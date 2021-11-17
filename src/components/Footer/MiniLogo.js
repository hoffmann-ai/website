// @flow strict
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from './MiniLogo.module.scss';
import { useGlobalData } from '../../hooks';

const MiniLogo = () => {
  const { logo } = useGlobalData();

  return (
    <div className={styles['logo']}>
      <GatsbyImage
        image={logo?.childImageSharp?.gatsbyImageData}
        className={styles['logo__photo']}
        alt='logo'
      />
    </div>
  );
};

export default MiniLogo;
