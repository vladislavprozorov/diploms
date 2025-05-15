import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthAction, AuthState } from './types';
const initialState: AuthState = {
  isAuth: true,
};
const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuth: (state = initialState, action: PayloadAction<boolean>) => {
      return { ...state, isAuth: action.payload };
    },
  },
});
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
