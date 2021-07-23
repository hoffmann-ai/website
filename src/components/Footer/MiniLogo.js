// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from './MiniLogo.module.scss';
import { useGlobalData } from '../../hooks';

const MiniLogo = () => {
  const { logo } = useGlobalData();

  return (
    <div className={styles['logo']}>
      <Link to="/">
        <GatsbyImage
          image={logo?.childImageSharp?.gatsbyImageData}
          className={styles['logo__photo']}
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default MiniLogo;
