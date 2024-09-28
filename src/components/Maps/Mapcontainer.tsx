import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import osmProvider from "../../osm-provider";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import L from "leaflet";
import RouteMap from "./RouteMap";
import IMG4 from "../../assets/places/place4.jpg";
import WeatherSmartCard from "../Weather/WeatherChart";
import NewPlaceForm from "./NewPlaceForm";

const markerColors = [
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "yellow",
  "pink",
  "cyan",
];

const createNumberedIcon = (number: number | string, color: string) => {
  return new L.DivIcon({
    html: `<div style="background-color: ${color}; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; font-size: 18px; align-items: center; justify-content: center;">${number}</div>`,
    iconSize: [30, 30],
    className: "numbered-icon",
  });
};

// Custom component to handle map click events
const MapClickHandler: React.FC<{
  onMapClick: (lat: number, lng: number) => void;
}> = ({ onMapClick }) => {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
};

const MapComponent: React.FC = () => {
  const [clickedPosition, setClickedPosition] = useState<
    [number, number] | null
  >(null);

  const days = useSelector((state: RootState) => state.destinations.days);
  const coordinates = useSelector(
    (state: RootState) => state.destinations.selectedCityCoordinates
  );

  const position: L.LatLngExpression | undefined = coordinates
    ? [coordinates.lat, coordinates.lng]
    : [21.0285, 105.8542];

  const DateStart = new Date(days[0].date);
  console.log(DateStart);

  const handleMapClick = (lat: number, lng: number) => {
    console.log("Clicked position:", lat, lng);
    setClickedPosition([lat, lng]);
  };

  const handleNewPlaceSubmit = (lat: number, lng: number, imageFile: File | null, imageFiles: File[], rating: number
  ) => {
    // Logic gửi dữ liệu đến backend với lat, lng và imageFile
    console.log("New place added:", lat, lng, imageFile, imageFiles, rating);
    setClickedPosition(null); // Xóa marker sau khi thêm
  };

  const handleDeletePlace = () => {
    setClickedPosition(null); 
  };

  return (
    <MapContainer center={position} zoom={11} className="w-full h-full">
      <TileLayer
        url={osmProvider.maptiler.url}
        attribution={osmProvider.maptiler.attribution}
      />

      {/* Map click handler component */}
      <MapClickHandler onMapClick={handleMapClick} />

      {/* Display a new marker at the clicked position if available */}
      {clickedPosition && (
        <Marker
          position={clickedPosition}
          icon={createNumberedIcon("+", "black")}
        >
          <Popup>
            <NewPlaceForm
              lat={clickedPosition[0]}
              lng={clickedPosition[1]}
              onSubmit={handleNewPlaceSubmit}
              onDelete={handleDeletePlace}
            />
          </Popup>
        </Marker>
      )}

      {days.map((day, dayIndex) =>
        day.destinations.map((destination, index) => {
          return (
            <Marker
              key={destination.name}
              position={[destination.lat, destination.lng]}
              icon={createNumberedIcon(
                index + 1,
                markerColors[dayIndex % markerColors.length]
              )}
            >
              <Popup>
                <div className="space-y-2">
                  <h2
                    title={destination.name}
                    className="font-bold text-lg w-[250px] whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    {destination.name}
                  </h2>
                  <img
                    src={IMG4}
                    alt={destination.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <p>
                    <strong>Thể loại:</strong> Khám phá
                  </p>
                  <div className="flex items-center">
                    <strong>Đánh giá:</strong>
                    <div className="flex items-center ml-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={i < 3 ? "#FFD700" : "#E5E7EB"}
                          className="w-5 h-5"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 ">({3})</span>
                  </div>
                  <WeatherSmartCard
                    lat={destination.lat}
                    lng={destination.lng}
                    selectedDate={DateStart}
                  />
                </div>
              </Popup>
            </Marker>
          );
        })
      )}
      <RouteMap days={days} />
    </MapContainer>
  );
};

export default MapComponent;
