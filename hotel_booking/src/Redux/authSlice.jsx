import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../firebase'; // Firebase configuration

// Thunks for registering and logging in users
export const registerUser = createAsyncThunk('auth/registerUser', async ({ email, password }) => {
  const userCredential = await auth.createUserWithEmailAndPassword(email, password);
  return userCredential.user;
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
  const userCredential = await auth.signInWithEmailAndPassword(email, password);
  return userCredential.user;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      auth.signOut();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'fulfilled';
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'fulfilled';
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
