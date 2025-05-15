import { configureStore } from '@reduxjs/toolkit';
import myCourses from './mySlice';
import authSlice from './auth/auth';
export const store = configureStore({
  reducer: {
    myCourses,
    authSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
