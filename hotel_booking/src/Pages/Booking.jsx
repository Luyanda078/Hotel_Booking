import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBooking } from '../Redux/bookingSlice'; // Booking action
import { useSelector } from 'react-redux';

const Booking = () => {
  const dispatch = useDispatch();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const [accommodationId, setAccommodationId] = useState(''); // Assuming you select an accommodation from a list

  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please login to book.');
      return;
    }

    dispatch(
      createBooking({
        userId: user.uid,
        accommodationId,
        checkIn,
        checkOut,
        rooms,
        guests,
      })
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Book Your Stay</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Accommodation ID</label>
          <input
            type="text"
            value={accommodationId}
            onChange={(e) => setAccommodationId(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Select Accommodation"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Check-In Date</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Check-Out Date</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Number of Rooms</label>
          <input
            type="number"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            min="1"
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Number of Guests</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 px-4 rounded hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
