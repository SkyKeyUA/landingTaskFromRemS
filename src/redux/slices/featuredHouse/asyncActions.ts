/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FeaturedHouse } from './type';

export const fetchFeaturedHouse = createAsyncThunk<FeaturedHouse[]>(
  'featuredHouse/fetchFeaturedHouseStatus',
  async () => {
    const { data } = await axios.get('https://646b0ec87d3c1cae4ce31866.mockapi.io/items');
    return data as FeaturedHouse[];
  },
);
