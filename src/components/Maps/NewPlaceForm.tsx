import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface NewPlaceFormProps {
  lat: number;
  lng: number;
  onSubmit: (
    lat: number,
    lng: number,
    imageFiles: File[],
    thumbnailFile: File | null,
    rating: number
  ) => void;
  onDelete: () => void;
}

const NewPlaceForm: React.FC<NewPlaceFormProps> = ({
  lat,
  lng,
  onSubmit,
  onDelete,
}) => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [rating, setRating] = useState(0);

  const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setImageFiles(files);
  };

  const handleThumbnailChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedThumbnail = imageFiles.find(
      (file) => file.name === event.target.value
    );
    setThumbnailFile(selectedThumbnail || null);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(lat, lng, imageFiles, thumbnailFile, rating);
  };

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); 
    onDelete();
  };

  return (
    <div className="p-2 w-[300px] max-w-full">
      <h3 className="text-xl font-semibold mb-3 text-center">
        Đóng góp địa điểm mới
      </h3>
      <form onSubmit={handleSubmit}>
        {/* Input Latitude */}
        <div className="mb-3">
          <label
            htmlFor="latitude"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Latitude:
          </label>
          <input
            id="latitude"
            type="text"
            value={lat}
            className="w-full border border-gray-300 p-2 rounded bg-gray-100 cursor-not-allowed focus:outline-none"
            readOnly
          />
        </div>

        {/* Input Longitude */}
        <div className="mb-3">
          <label
            htmlFor="longitude"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Longitude:
          </label>
          <input
            id="longitude"
            type="text"
            value={lng}
            className="w-full border border-gray-300 p-2 rounded bg-gray-100 cursor-not-allowed focus:outline-none"
            readOnly
          />
        </div>

        {/* Multiple Image Upload */}
        <div className="mb-3">
          <label
            htmlFor="place-images"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Chọn nhiều ảnh:
          </label>
          <input
            id="place-images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImagesChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          />
        </div>

        {/* Select Thumbnail */}
        {imageFiles.length > 0 && (
          <div className="mb-3">
            <label
              htmlFor="thumbnail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Chọn ảnh Thumbnail:
            </label>
            <select
              id="thumbnail"
              onChange={handleThumbnailChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none"
            >
              <option value="">Chọn ảnh làm thumbnail</option>
              {imageFiles.map((file, index) => (
                <option key={index} value={file.name}>
                  {file.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Star Rating */}
        <div className="mb-3">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Đánh giá địa điểm:
          </label>
          <div className="flex">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => handleRatingChange(ratingValue)}
                    className="hidden"
                  />
                  <FaStar
                    size={24}
                    className="cursor-pointer"
                    color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                  />
                </label>
              );
            })}
          </div>
        </div>

        <div className="w-full flex justify-around">
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white p-2 rounded-lg"
          >
            Đóng góp
          </button>
          <button
            type="button"
            onClick={handleDeleteClick}
            className="bg-gradient-to-r from-gray-400 to-gray-600 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800 transition-all duration-600 text-white p-2 rounded-lg"
          >
            Xóa bỏ
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPlaceForm;
