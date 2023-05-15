/** @format */

import { CSSProperties } from 'react';

export enum IconsEnum {
  logo = '/img/icons/logo.svg',
  arrow = '/img/icons/arrow.svg',
  clock = '/img/icons/clock.svg',
  location = '/img/icons/location.svg',
  mail = '/img/icons/mail.svg',
  star = '/img/icons/star.svg',
  bathroom = '/img/icons/details/bathroom.svg',
  bedroom = '/img/icons/details/bedroom.svg',
  call = '/img/icons/details/call.svg',
  carport = '/img/icons/details/carport.svg',
  floor = '/img/icons/details/floor.svg',
  apartment = '/img/icons/recommendation/apartment.svg',
  bestDeals = '/img/icons/recommendation/bestDeals.svg',
  house = '/img/icons/recommendation/house.svg',
  popular = '/img/icons/recommendation/popular.svg',
  villa = '/img/icons/recommendation/villa.svg',
  facebook = '/img/icons/social/facebook.svg',
  instagram = '/img/icons/social/instagram.svg',
  twitter = '/img/icons/social/twitter.svg',
}

export type SvgIconProps = {
  src: IconsEnum;
  onClick?: () => void;
  size?: number;
  rotate?: '0' | '90' | '180' | '270';
  className?: string;
  style?: CSSProperties;
};
