// src/pages/Accommodations.js
import React from 'react';
import AccommodationList from '../components/AccommodationList';

const Accommodations = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Accommodations</h1>
      <AccommodationList />
    </div>
  );
};

export default Accommodations;
