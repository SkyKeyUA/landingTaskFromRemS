/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FeaturedHouse } from './type';

export const fetchFeaturedHouse = createAsyncThunk<FeaturedHouse[]>(
  'featuredHouse/fetchFeaturedHouseStatus',
  async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    if (!apiUrl) {
      throw new Error('API URL is not defined');
    }

    const { data } = await axios.get(apiUrl);
    return data as FeaturedHouse[];
  },
);
