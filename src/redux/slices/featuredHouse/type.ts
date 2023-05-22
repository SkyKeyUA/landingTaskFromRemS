/** @format */

import { IconsEnum } from '../../../components/SvgIcon';

export type FeaturedHouse = {
  id: string;
  category: number;
  image: string;
  icon: string;
  sort: string;
  title: string;
  text: string;
  user: string;
  fullname: string;
  location: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface FeaturedHouseState {
  items: FeaturedHouse[];
  status: Status;
  //status: 'loading' | 'success' | 'error';
}

export type SearchFeaturedHouseParams = {
  category: string;
};
