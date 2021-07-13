// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Logo.module.scss';

type Props = {
  img: string,
};

const Logo = ({ img }: Props) => (
  <div className={styles['logo']}>
    <Link to="/">
      <img
        src={withPrefix(img)}
        className={styles['logo__photo']}
        width="70"
        height="70"
        alt="logo"
      />
    </Link>
  </div>
);

export default Logo;
