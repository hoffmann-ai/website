// @flow strict
import React from 'react';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import Newsletter from '../Newsletter/Newsletter';
import Logo from './Logo';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

const Sidebar = () => {
  const {
    author, logo, copyright, menu
  } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Logo img={logo} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Sidebar;
