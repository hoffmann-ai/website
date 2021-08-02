// @flow strict
import React from 'react';
import styles from './Landing.module.scss';
import Services from './Services/Services';
import Hero from './HeroModule/HeroModule';
import LastPosts from './LastPosts';
import Clients from './Clients';
import Skills from './Skills';
import CallToAction from '../CallToAction';
import type { Edges, GatsbyImages, ServiceData } from '../../types';

interface Props {
  lastPosts: Edges;
  clients: Edges;
  skills: Edges;
  landing: GatsbyImages;
  services: ServiceData[];
}

const Landing = ({
  lastPosts, clients, skills, landing, services
}: Props) => (
  <div className={styles['landing__page']}>
    <Hero landing={landing} />
    <CallToAction />
    <Clients clients={clients} />
    <Services services={services} />
    <Skills skills={skills} />
    <LastPosts lastPosts={lastPosts} />
  </div>
);

export default Landing;
