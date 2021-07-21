// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './MiniLogo.module.scss';

type Props = {
  img: string,
};

const MiniLogo = ({ img }: Props) => (
  <div className={styles['logo']}>
    <Link to="/">
      <img
        src={withPrefix(img)}
        className={styles['logo__photo']}
        width="30"
        height="30"
        alt="logo"
      />
    </Link>
  </div>
);

export default MiniLogo;
