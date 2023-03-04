import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {AUTH_SLICE_NAME, AuthState, initialState} from './models';

export const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
      logOut: () => {
         localStorage.removeItem('auth');
      },

      logIn: (state: AuthState, action: PayloadAction<{status: boolean}>) => {
          state.auth = action.payload.status
      }
  },
});

export  const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer;
