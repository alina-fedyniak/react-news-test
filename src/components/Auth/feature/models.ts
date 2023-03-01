export const AUTH_SLICE_NAME = 'auth';

export interface AuthState {
  auth: boolean;
  username: string | null;
  password: string | null;
}

export const initialState: AuthState = {
  auth: false,
  username: null,
  password: null

};
