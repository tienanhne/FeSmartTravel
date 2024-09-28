import React, { useState } from "react";

interface NewPlaceFormProps {
  lat: number;
  lng: number;
  onSubmit: (lat: number, lng: number, imageFile: File | null) => void;
  onDelete: () => void;
}

const NewPlaceForm: React.FC<NewPlaceFormProps> = ({
  lat,
  lng,
  onSubmit,
  onDelete,
}) => {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setImageFile(file);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(lat, lng, imageFile);
  };

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
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

        {/* Image Upload */}
        <div className="mb-3">
          <label
            htmlFor="place-image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Cập nhật ảnh:
          </label>
          <input
            id="place-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          />
        </div>

        {/* Submit Button */}
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
