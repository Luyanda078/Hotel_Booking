import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import authReducer from './Redux/authSlice'; // Example reducer
import accommodationReducer from './Redux/accommodationSlice'; // Another example

const store = configureStore({
  reducer: {
    auth: authReducer, // Example: Add your reducers here
    accommodation: accommodationReducer, // Add other slices if needed
  },
});

export default store;
