import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      // Add accommodation to favorites if it's not already in the list
      const accommodation = action.payload;
      const exists = state.favorites.find((item) => item.id === accommodation.id);
      if (!exists) {
        state.favorites.push(accommodation);
      }
    },
    removeFavorite: (state, action) => {
      // Remove accommodation from favorites by id
      const accommodationId = action.payload;
      state.favorites = state.favorites.filter((item) => item.id !== accommodationId);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
