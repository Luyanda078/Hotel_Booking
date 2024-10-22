// src/redux/reviewSlice.js
import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
  },
  reducers: {
    addReview: (state, action) => {
      state.reviews.push(action.payload);
      // You can also make an API call here to save the review to a backend
    },
  },
});

export const { addReview } = reviewSlice.actions;

export default reviewSlice.reducer;
