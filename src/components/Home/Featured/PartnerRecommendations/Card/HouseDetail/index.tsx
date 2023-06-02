/** @format */

import React from 'react';
import styles from './HouseDetail.module.scss';
import { IconsEnum, SvgIcon } from '../../../../../SvgIcon';
import { Link } from 'react-router-dom';

type DetailsProps = {
  id: number;
  iconEnum: IconsEnum;
  rooms: number;
  title: string;
};

export const HouseDetail: React.FC = () => {
  const details: DetailsProps[] = [
    {
      id: 1,
      iconEnum: IconsEnum.bedroom,
      rooms: 4,
      title: 'Bedrooms',
    },
    {
      id: 2,
      iconEnum: IconsEnum.bathroom,
      rooms: 2,
      title: 'Bathrooms',
    },
    {
      id: 3,
      iconEnum: IconsEnum.carport,
      rooms: 1,
      title: 'Carport',
    },
    {
      id: 4,
      iconEnum: IconsEnum.floor,
      rooms: 2,
      title: 'Floors',
    },
  ];
  return (
    <div className={styles.inner}>
      <div className={styles.title}>House Detail</div>
      <div className={styles.info}>
        {details.map((obj) => (
          <div key={obj.id} className={styles.body}>
            <Link to="/">
              <SvgIcon className={styles.svg} src={obj.iconEnum} />
              <div className={styles.rooms}>
                {obj.rooms} {obj.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
