/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { IconsEnum, SvgIcon } from '../../../../SvgIcon';

import './FeaturedHouse.scss';

type FeaturedHouseProps = {
  image: string;
  icon: IconsEnum;
  sort: string;
  title: string;
  text: string;
  user: string;
  fullname: string;
  location: string;
};

export const FeaturedHouse: React.FC<FeaturedHouseProps> = ({
  image,
  icon,
  sort,
  title,
  text,
  user,
  fullname,
  location,
}) => {
  return (
    <div className="featuredHouse__body">
      <div className="featuredHouse__image">
        <Link to="/">
          <img src={image} alt="featuredHouse" />
        </Link>
        <div className={`featuredHouse__sort ${sort.toLocaleLowerCase().split(' ').join('')}`}>
          <Link to="/">
            <SvgIcon size={14} className="featuredHouse__svg" src={icon} />
            <span>{sort}</span>
          </Link>
        </div>
      </div>
      <div className="featuredHouse__title">
        <Link to="/">{title}</Link>
      </div>
      <div className="featuredHouse__text">
        <Link to="/">{text}</Link>
      </div>
      <div className="featuredHouse__info">
        <div className="featuredHouse__user">
          <Link to="/">
            <img src={user} alt="user" />
          </Link>
        </div>
        <div className="featuredHouse__items">
          <div className="featuredHouse__fullname">
            <Link to="/">{fullname}</Link>
          </div>
          <div className="featuredHouse__location">
            <Link to="/">{location}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
