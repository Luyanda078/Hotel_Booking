import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase'; // Assuming Firestore is used

// Fetch accommodations from Firestore
export const fetchAccommodations = createAsyncThunk(
  'accommodations/fetchAccommodations',
  async () => {
    const snapshot = await db.collection('accommodations').get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
  }
);

// Add a new accommodation
export const addAccommodation = createAsyncThunk(
  'accommodations/addAccommodation',
  async (newAccommodation) => {
    const docRef = await db.collection('accommodations').add(newAccommodation);
    return { id: docRef.id, ...newAccommodation };
  }
);

const accommodationSlice = createSlice({
  name: 'accommodations',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    updateAccommodation: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.items.findIndex((acc) => acc.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...updatedData };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccommodations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccommodations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchAccommodations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addAccommodation.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const { updateAccommodation } = accommodationSlice.actions;

export default accommodationSlice.reducer;
