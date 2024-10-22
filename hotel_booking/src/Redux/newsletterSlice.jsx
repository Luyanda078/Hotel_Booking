// src/redux/newsletterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState: {
    subscriptions: [],
  },
  reducers: {
    subscribeToNewsletter: (state, action) => {
      state.subscriptions.push(action.payload); // Add subscription to list
      // You can also make an API call here to save the subscription in the backend
    },
  },
});

export const { subscribeToNewsletter } = newsletterSlice.actions;

export default newsletterSlice.reducer;
