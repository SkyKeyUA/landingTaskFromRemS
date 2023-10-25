/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import { IconsEnum, SvgIcon } from '../SvgIcon';

export const Footer: React.FC = () => {
  const footerList = [
    {
      label: 'Property',
      list: ['House', 'Apartment', 'Villa'],

      link: '/landingTaskFromRemS/',
    },
    {
      label: 'Article',
      list: ['New Article', 'Popular Article', 'Most Read', 'Tips & Tricks'],
      link: '/landingTaskFromRemS/',
    },
    {
      label: 'Contact',
      list: ['2464 Royal Ln. Mesa, New Jersey 45463', '(671) 555-0110', 'info@hounter.com'],
      link: ['/landingTaskFromRemS/', 'tel:6715550110', 'mailto:info@hounter.com'],
    },
  ];
  const social = [IconsEnum.facebook, IconsEnum.twitter, IconsEnum.instagram];
  return (
    <footer className={styles.root}>
      <div className={styles.containter}>
        <div className={styles.info}>
          <div className={styles.body}>
            <div className={styles.logo}>
              <Link to="/landingTaskFromRemS/">
                <SvgIcon size={36} src={IconsEnum.logo} />
                <span>Hounter</span>
              </Link>
            </div>
            <div className={styles.text}>
              We provide information about properties such as houses, villas and apartments to help
              people find their dream home
            </div>
          </div>
          <div className={styles.social}>
            {social.map((soc, i) => (
              <Link key={i} to="/landingTaskFromRemS/">
                <SvgIcon size={32} src={soc} />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.columns}>
          {footerList.map((obj, i) => (
            <div key={i} className={styles.column}>
              <div className={styles.label}>{obj.label}</div>
              <ul className={styles.list}>
                {obj.list.map((subobj, index) => (
                  <li key={index}>
                    <Link to={obj.link[index]}>{subobj}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
