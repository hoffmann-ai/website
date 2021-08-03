// @flow strict
import React from 'react';
import styles from './Stats.module.scss';

const Stats = () => (
  <div className={styles['container']}>
    <h2 className={styles['landing_title']}>Des chiffres qui parlent d'eux même</h2>
    <h6 className={styles['text_light']}>les avantages de nos services</h6>
    <div className={styles['grid']}>
      <div className={styles['card']}>
        <p className={styles['percent']}>98%</p>
        <p className={styles['card-text']}>des clients sont satisfaits</p>
      </div>
      <div className={styles['card']}>
        <p className={styles['percent']}>26%</p>
        <p className={styles['card-text']}>d'email en moins d'envoyé ou reçu</p>
      </div>
      <div className={styles['card']}>
        <p className={styles['percent']}>70%</p>
        <p className={styles['card-text']}>nous recommande</p>
      </div>
      <div className={styles['card']}>
        <p className={styles['percent']}>32%</p>
        <p className={styles['card-text']}>des utilisateurs on gagné du temps</p>
      </div>
    </div>
  </div>
);

export default Stats;