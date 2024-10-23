import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../Redux/favouritesSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);

  const handleRemove = (id) => {
    dispatch(removeFavorite(id));
  };

  if (favorites.length === 0) {
    return <p className="p-4">You haven't saved any accommodations yet.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Accommodations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map((acc) => (
          <div key={acc.id} className="border p-4">
            <img src={acc.imageUrl} alt={acc.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-xl font-bold">{acc.name}</h2>
            <p>{acc.description}</p>
            <p className="text-sm text-gray-600">Price: {acc.pricePerNight} / night</p>
            <button
              className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
              onClick={() => handleRemove(acc.id)}
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

