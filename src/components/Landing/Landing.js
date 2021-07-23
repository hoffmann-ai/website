import React from 'react';
import styles from './Landing.module.scss';
import Services from './Services/Services';
import Hero from './HeroModule/HeroModule';
import Newsletter from '../Newsletter/Newsletter';
import LastPosts from './LastPosts';
import Clients from './Clients';
import Skills from './Skills';

const Landing = ({
  lastPosts, clients, skills, landing, services
}) => (
  <div className={styles['landing__page']}>
    <Hero landing={landing} />
    <h4 className={styles['landing__page__subscribe__message']}>
      Abonnez-vous à notre newseltter pour être à jour sur nos articles !
    </h4>
    <Newsletter style={'landing'} />
    <p className={styles['landing__page__unsubscribe__message']}>
      Vous pouvez vous désabonner à tout moment.
    </p>
    <div className={styles['services']}>
      <h1>Nos services</h1>
      <Services services={services} />
    </div>
    <Clients clients={clients} />
    <Skills skills={skills} />
    <LastPosts lastPosts={lastPosts} />
  </div>
);

export default Landing;
