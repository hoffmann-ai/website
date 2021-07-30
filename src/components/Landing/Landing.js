import React from 'react';
import styles from './Landing.module.scss';
import Services from './Services/Services';
import Hero from './HeroModule/HeroModule';
import LastPosts from './LastPosts';
import Clients from './Clients';
import Skills from './Skills';
import CallToAction from '../CallToAction';

const Landing = ({
  lastPosts, clients, skills, landing, services
}) => (
  <div className={styles['landing__page']}>
    <Hero landing={landing} />
    <CallToAction />
    <Clients clients={clients} />
    <div className={styles['services']}>
      <Services services={services} />
    </div>
    <Skills skills={skills} />
    <LastPosts lastPosts={lastPosts} />
  </div>
);

export default Landing;
