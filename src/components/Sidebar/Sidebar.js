// @flow strict
import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

const Sidebar = () => {
  const {
    logo, menu
  } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <nav className={styles['sidebar__inner']}>
        <ul className={styles['sidebar__inner_list']}>
          <li className={styles['sidebar__inner_list_item']}>
            <Logo img={logo} />
          </li>
          <li className={styles['sidebar__inner_list_item']}>
            <Menu menu={menu} />
          </li>
          <li className={styles['sidebar__inner_list_item']}>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
