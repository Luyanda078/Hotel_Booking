import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccommodations } from '../redux/accommodationSlice';
import { addFavorite } from '../redux/favoritesSlice';

const AccommodationList = () => {
  const dispatch = useDispatch();
  const { accommodations, loading } = useSelector((state) => state.accommodations);

  useEffect(() => {
    dispatch(fetchAccommodations());
  }, [dispatch]);

  const handleAddFavorite = (accommodation) => {
    dispatch(addFavorite(accommodation));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {accommodations.map((acc) => (
        <div key={acc.id} className="border p-4">
          <img src={acc.imageUrl} alt={acc.name} className="w-full h-40 object-cover mb-2" />
          <h2 className="text-xl font-bold">{acc.name}</h2>
          <p>{acc.description}</p>
          <p className="text-sm text-gray-600">Price: {acc.pricePerNight} / night</p>
          <button
            className="mt-2 bg-blue-500 text-white py-1 px-2 rounded"
            onClick={() => handleAddFavorite(acc)}
          >
            Save to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default AccommodationList;
