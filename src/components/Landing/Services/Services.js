import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from './Services.module.scss';

const Services = ({ services }) => (
  <div className={styles['services__module']}>
    <div className={styles['services__module__innergrid']}>
      <div className={styles['services__module__innergrid__comp']}>
        {services[0] && (
          <>
            <GatsbyImage
              image={services[0].node.childImageSharp.gatsbyImageData}
              alt='Strategy'
              className={styles['services__module__innergrid__comp__image']}
            />
            <h4>Cloud</h4>
            <p className={styles['services__module__innergrid__comp__text']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vestibulum aliquam metus.
            </p>
          </>
        )}
      </div>
      <div className={styles['services__module__innergrid__comp']}>
        {services[2] && (
          <>
            <GatsbyImage
              image={services[2].node.childImageSharp.gatsbyImageData}
              alt='Strategy'
              className={styles['services__module__innergrid__comp__image']}
            />
            <h4>DevOps & InfraOps</h4>
            <p className={styles['services__module__innergrid__comp__text']}>
              Ansible, Docker, Git, Kubernetes, Maven, Unix, Vagrant
            </p>
          </>
        )}
      </div>
      <div className={styles['services__module__innergrid__comp']}>
        {services[1] && (
          <>
            <GatsbyImage
              image={services[1].node.childImageSharp.gatsbyImageData}
              alt='Strategy'
              className={styles['services__module__innergrid__comp__image']}
            />
            <h4>Technologies Web</h4>
            <p className={styles['services__module__innergrid__comp__text']}>
              AWS, CSS, HTML, Java Spring, NodeJS, ReactJS, Shopify, Wordpress
            </p>
          </>
        )}
      </div>
    </div>
  </div>
);
export default Services;
