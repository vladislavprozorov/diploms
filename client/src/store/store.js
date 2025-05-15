import { configureStore } from '@reduxjs/toolkit';
import myCourses from './mySlice';
import authSlice from './auth/auth';
export var store = configureStore({
    reducer: {
        myCourses: myCourses,
        authSlice: authSlice,
    },
});
