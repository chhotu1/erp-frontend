import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/Slices/userSlice';
import authReducer from '../store/Slices/authSlice';
import cashbookSlice from '../store/Slices/cashbookSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth:authReducer,
    cashbook:cashbookSlice,
  }
})