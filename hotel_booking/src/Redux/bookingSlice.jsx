import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase';

// Create a booking
export const createBooking = createAsyncThunk(
  'bookings/createBooking',
  async (bookingDetails) => {
    const docRef = await db.collection('bookings').add(bookingDetails);
    return { id: docRef.id, ...bookingDetails };
  }
);

// Fetch user bookings
export const fetchUserBookings = createAsyncThunk(
  'bookings/fetchUserBookings',
  async (userId) => {
    const snapshot = await db.collection('bookings').where('userId', '==', userId).get();
    const bookings = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return bookings;
  }
);

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.fulfilled, (state, action) => {
        state.bookings.push(action.payload);
      })
      .addCase(fetchUserBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
      });
  },
});

export default bookingSlice.reducer;
