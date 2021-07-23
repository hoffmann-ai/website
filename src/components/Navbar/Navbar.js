// @flow strict
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Menu from './Menu';
import styles from './Navbar.module.scss';
import { useGlobalData, useSiteMetadata } from '../../hooks';

const Navbar = () => {
  const { menu } = useSiteMetadata();
  const { logo } = useGlobalData();

  return (
    <div className={styles['navbar']}>
      <nav className={styles['navbar__inner']}>
        <ul className={styles['navbar__inner_list']}>
          <li className={styles['navbar__inner_list_item']}>
            <GatsbyImage
              className={styles['navbar__inner_list_item_logo']}
              image={logo?.childImageSharp?.gatsbyImageData}
              alt="Hoffmann" />
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
