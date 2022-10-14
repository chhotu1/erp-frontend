import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/Slices/userSlice';
import authReducer from '../store/Slices/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth:authReducer
  }
})