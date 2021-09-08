import React from 'react';
import { Link } from 'gatsby';
import styles from './CallToAction.module.scss';

const CallToAction = () => (
  <div>
    <Link to={'/contact'}>
      <button className={styles['button']}>Nous contacter</button>
    </Link>
  </div>
);

export default CallToAction;
