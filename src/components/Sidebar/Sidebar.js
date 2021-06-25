// @flow strict
import React from 'react';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import Logo from './Logo';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

const Sidebar = () => {
  const {
    author, logo, copyright, menu
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
            <Contacts contacts={author.contacts} />
          </li>
          <li className={styles['sidebar__inner_list_item']}>
            <Copyright copyright={copyright} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
