import React from 'react';
import styles from './Landing.module.scss';
import WelcomeModule from './WelcomeModule/WelcomeModule';
import Newsletter from '../Newsletter/Newsletter';
import Tabs from './Tabs/Tabs';

const Landing = () => (
  <div className={styles['landing__page']}>
    <WelcomeModule />
    <Newsletter />
    <p className={styles['landing__page__tiny__text']}>
      Pour ne rien manquer de nos blogs et tutoriels.
    </p>
    <h3>Quelques-unes de nos réalisations...</h3>
    <div className={styles['landing__divider']}></div>
    <Tabs>
      <div label='SpotMyDive'>
        <img src='/spotmydive.png'></img>
      </div>
      <div label='MachineBreak'>
        <img src='/machinebreak.png'></img>
      </div>
      <div label='GeniusEiffel'>
        <img src='/eiffel.png'></img>
      </div>
      <div label='Gefco'>
        <img src='/gefco.png'></img>
      </div>
      <div label='ASPorte'>
        <img src='/asporte.png'></img>
      </div>
      <div label='Tuteur À l Heure'>
        <img src='/tuteur.png'></img>
      </div>
    </Tabs>
  </div>
);

export default Landing;
