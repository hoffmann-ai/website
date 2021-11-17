// @flow strict
import React from 'react';
import styles from './Stats.module.scss';

const Stats = () => (
  <div className={styles['container']}>
    <h2 className={styles['landing_title']}>Des chiffres qui parlent d'eux même</h2>
    <h6 className={styles['text_light']}><br></br></h6>
    <div className={styles['grid']}>
      <div className={styles['card']}>
        <p className={styles['percent']}>98%</p>
        <p className={styles['card-text']}>de nos clients sont satisfaits</p>
      </div>
      <div className={styles['card']}>
        <p className={styles['percent']}>100%</p>
        <p className={styles['card-text']}>de nos clients ont économisé sur la gestion de leur infrastructure</p>
      </div>
      <div className={styles['card']}>
        <p className={styles['percent']}>90%</p>
        <p className={styles['card-text']}>de nos clients nous recommandent</p>
      </div>
      <div className={styles['card']}>
        <p className={styles['percent']}>84%</p>
        <p className={styles['card-text']}>des utilisateurs on gagné du temps</p>
      </div>
    </div>
  </div>
);

export default Stats;