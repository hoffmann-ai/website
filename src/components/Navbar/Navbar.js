// @flow strict
import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import styles from './Navbar.module.scss';
import { useSiteMetadata } from '../../hooks';

const Navbar = () => {
  const {
    logo, menu
  } = useSiteMetadata();

  return (
    <div className={styles['navbar']}>
      <nav className={styles['navbar__inner']}>
        <ul className={styles['navbar__inner_list']}>
          <li className={styles['navbar__inner_list_item']}>
            <Logo img={logo} />
          </li>
          <li className={styles['navbar__inner_list_item']}>
            <Menu menu={menu} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
