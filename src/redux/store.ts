/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filterSlice from './slices/filter/slice';
import featuredHouseSlice from './slices/featuredHouse/slice';

export const store = configureStore({
  reducer: {
    filterSlice,
    featuredHouseSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
