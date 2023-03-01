import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {AUTH_SLICE_NAME, AuthState, initialState} from './models';

export const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
      logIn: (state: AuthState, action: PayloadAction<{username: string | null, password: string | null}>) => {
          state.username = action.payload.username;
          state.password = action.payload.password;
          if (state.username === 'admin' && state.password === '12345') {
              state.auth = true;
          }
      },

      logOut: () => {
         localStorage.clear();
         return {...initialState};
      }
  },
});

export  const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer;
