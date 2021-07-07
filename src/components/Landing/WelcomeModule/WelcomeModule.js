import React from 'react';
import styles from './WelcomeModule.module.scss';

const WelcomeModule = () => (
  <div className={styles['welcome__module']}>
    <img
      className={styles['welcome__module__image']}
      src='/workspace.png'
    ></img>
    <h1 className={styles['welcome__module__title']}>HOFFMANN.AI</h1>
    <h6 className={styles['welcome__module__text']}>
      Une Agence spécialisée dans la digitalisation, qui met son expertise au
      service des particuliers et professionnels évoluant en France.
    </h6>
  </div>
);

export default WelcomeModule;
