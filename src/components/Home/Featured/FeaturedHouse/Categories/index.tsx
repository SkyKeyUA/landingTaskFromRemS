/** @format */

import React from 'react';
import styles from './Categories.module.scss';
import { Link } from 'react-router-dom';
import { IconsEnum, SvgIcon } from '../../../../SvgIcon';

type CategoriesProps = {
  categoryId: number;
  onClickCategory: (i: number) => void;
};

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ categoryId, onClickCategory }) => {
    const categories = [
      {
        icon: IconsEnum.house,
        category: 'House',
      },
      {
        icon: IconsEnum.villa,
        category: 'Villa',
      },
      {
        icon: IconsEnum.apartment,
        category: 'Apartment',
      },
    ];
    return (
      <div className={styles.root}>
        <ul className={styles.items}>
          {categories.map((obj, i) => (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={categoryId === i ? `${styles.item} ${styles.active}` : styles.item}>
              <Link to="/landingTaskFromRemS/">
                <SvgIcon className={styles.svg} size={24} src={obj.icon} />
                <span>{obj.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  },
);
