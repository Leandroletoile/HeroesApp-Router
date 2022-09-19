import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import heroSlice from './heroes/heroSlice';

export const store = configureStore({
    reducer:{
        auth: authSlice,
        heroes: heroSlice
    } 
})