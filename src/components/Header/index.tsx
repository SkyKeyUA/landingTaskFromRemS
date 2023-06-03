/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { IconsEnum, SvgIcon } from '../SvgIcon';

type MenuItem = {
  menu: string;
  submenu?: string[];
};

const menuItems: MenuItem[] = [
  {
    menu: 'About Us',
  },
  {
    menu: 'Article',
  },
  {
    menu: 'Property',
    submenu: ['House', 'Villa', 'Apartment'],
  },
];

export const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const toggleMenu = open ? `${styles.menu__link_arrow} ${styles.open}` : styles.menu__link_arrow;
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.logo}>
            <Link to="/">
              <SvgIcon size={36} src={IconsEnum.logo} />
              <span>Hounter</span>
            </Link>
          </div>
          <nav className={styles.menu}>
            <ul className={styles.menu__list}>
              {menuItems.map((obj, index) => (
                <li className={obj.submenu ? toggleMenu : styles.menu__link} key={index}>
                  {obj.submenu ? (
                    <>
                      <span onClick={() => setOpen(!open)}>{obj.menu}</span>
                      <SvgIcon
                        size={18}
                        src={IconsEnum.arrow}
                        className={open ? `${styles.arrow} ${styles.arrow_open}` : styles.arrow}
                        onClick={() => setOpen(!open)}
                      />
                      <ul
                        className={
                          open ? `${styles.submenu__list} ${styles.open}` : styles.submenu__list
                        }>
                        {obj.submenu.map((subObj, subIndex) => (
                          <li className={styles.submenu__link} key={subIndex}>
                            <Link to="/">{subObj}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to="/">{obj.menu}</Link>
                  )}
                </li>
              ))}
            </ul>
            <button className={styles.menu__btn}>Sign Up!</button>
          </nav>
        </div>
      </div>
    </header>
  );
};
