import React from 'react';
import { GatsbyImage, gatsbyImageData } from 'gatsby-plugin-image';
import CallToAction from '../../CallToAction';
import styles from './Services.module.scss';

type Props = {
  node: {
    frontmatter: {
      name: string,
      description: string,
      logo: {
        childImageSharp: {
          gatsbyImageData: typeof gatsbyImageData
        }
      }
    }
  }
};
const Services = ({ services }: { services: Array<Props> }) => (
  <div className={styles['container_serv']}>
    <h2 className={styles['landing_title']}>Nos services</h2>
    <h6 className={styles['text_light']}>les services dans lesquels nous sommes experts</h6>
    {services.map((service) => (
      <div className={styles['service_container']}>
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
          <p className={styles['service_container_content_text']}>
            {service.node.frontmatter.description}
          </p>
          <CallToAction />
        </div>
      </div>
    ))}
  </div>
);

export default Services;
