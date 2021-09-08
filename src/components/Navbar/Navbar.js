// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Menu from './Menu';
import styles from './Navbar.module.scss';
import Newsletter from '../Newsletter/Newsletter';

import { useGlobalData, useSiteMetadata } from '../../hooks';

const Navbar = () => {
  const { menu } = useSiteMetadata();
  const { logo } = useGlobalData();

  return (
    <div className={styles['navbar']}>
      <nav className={styles['navbar__inner']}>
        <ul className={styles['navbar__inner_list']}>
          <li className={styles['navbar__inner_list_item']}>
            <Link to='/'>
              <GatsbyImage
                className={styles['navbar__inner_list_item_logo']}
                image={logo?.childImageSharp?.gatsbyImageData}
                alt='logo'
              />
            </Link>
          </li>
          <li className={styles['navbar__inner_list_item']}>
            <Menu menu={menu} />
          <Newsletter className={styles['navbar__inner_list_item']} style={'responsive'} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
