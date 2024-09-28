import "leaflet/dist/leaflet.css";
import { useState } from "react";
import MapComponent from "../components/Maps/Mapcontainer";
import MapSelector from "../components/Maps/MapSelector";
import { HiPlus } from "react-icons/hi";

const MapPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex flex-col md:flex-row overflow-y-auto no-scrollbar pt-[72px] h-screen">
      {/* Nút mở menu cho di động */}
      <HiPlus
        onClick={handleMenuToggle}
        size={40}
        className="fixed bottom-24 right-6 md:hidden z-50 bg-primary text-white rounded-lg shadow-lg cursor-pointer"
      />

      {/* Phần bên trái */}
      <MapSelector
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
      />

      {/* Phần bản đồ */}
      <div className="w-full md:w-2/3 h-full ">
        <MapComponent />
      </div>
    </div>
  );
};

export default MapPage;
