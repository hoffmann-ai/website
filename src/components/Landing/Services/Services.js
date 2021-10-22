// @flow strict
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import CallToAction from '../../CallToAction';
import type { ServiceData } from '../../../types';
import styles from './Services.module.scss';

const Services = ({ services }: { services: ServiceData[] }) => (
  <div className={styles['container_serv']}>
    <h2 className={styles['landing_title']}>Nos services</h2>
    <h6 className={styles['text_light']}>Nous accompagnons les particuliers , les PME, les grandes entreprises dans la définition de leur stratégie digitale, le pilotage de leurs projets web & mobile, la réflexion sur les usages et les parcours utilisateurs (UX/UI), la conception et le développement de leurs applications, le développement de la connaissance client (CRM), la mesure de la performance des sites web et apps mobiles développées ainsi que dans la formation de vos équipes.<br />Nous réalisons vos projets avec transparence, car pour nous la confiance de nos clients est primordiale.</h6>
    {services.map((service) => (
      <div className={styles['service_container']} key={service.node.frontmatter.name}>
        <div className={styles['service_container_content']}>
          <GatsbyImage
            image={service.node.frontmatter.logo.childImageSharp.gatsbyImageData}
            height={service.node.frontmatter.logo.childImageSharp.gatsbyImageData.height}
            width={service.node.frontmatter.logo.childImageSharp.gatsbyImageData.width}
            alt={service.node.frontmatter.name}
            key={service.node.frontmatter.name}
            className={styles['service_container_image']}
          />
        </div>
        <div className={styles['service_container_content']}>
          <h4 className={styles['service_container_content_title']}>
            {service.node.frontmatter.name}
          </h4>
          <p className={styles['text_light']}>
            {service.node.frontmatter.description}
          </p>
          <CallToAction />
        </div>
      </div>
    ))}
  </div>
);

export default Services;
