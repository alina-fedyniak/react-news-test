export const AUTH_SLICE_NAME = 'auth';

export interface AuthState {
  auth: boolean;
}

export const initialState: AuthState = {
  auth: false,
};
