import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from './Services.module.scss';

const Services = ({ services }) => (
  <div className={styles['services__module']}>
    <div className={styles['services__module__innergrid']}>
      <div className={styles['services__module__innergrid__comp']}>
        <GatsbyImage
          image={services[0].node.childImageSharp.gatsbyImageData}
          alt='Strategy'
          className={styles['logo']}
        />
        <h4>Strategy & Architecture</h4>
        <p className={styles['services__module__innergrid__comp__text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vestibulum aliquam metus.
        </p>
      </div>
      <div className={styles['services__module__innergrid__comp']}>
        <GatsbyImage
          image={services[0].node.childImageSharp.gatsbyImageData}
          alt='Strategy'
          className={styles['logo']}
        />
        <h4>Strategy & Architecture</h4>
        <p className={styles['services__module__innergrid__comp__text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vestibulum aliquam metus.
        </p>
      </div>
      <div className={styles['services__module__innergrid__comp']}>
        <GatsbyImage
          image={services[0].node.childImageSharp.gatsbyImageData}
          alt='Strategy'
          className={styles['logo']}
        />
        <h4>Strategy & Architecture</h4>
        <p className={styles['services__module__innergrid__comp__text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vestibulum aliquam metus.
        </p>
      </div>
      <div className={styles['services__module__innergrid__comp']}>
        <GatsbyImage
          image={services[0].node.childImageSharp.gatsbyImageData}
          alt='Strategy'
          className={styles['logo']}
        />
        <h4>Strategy & Architecture</h4>
        <p className={styles['services__module__innergrid__comp__text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vestibulum aliquam metus.
        </p>
      </div>
      <div className={styles['services__module__innergrid__comp']}>
        <GatsbyImage
          image={services[0].node.childImageSharp.gatsbyImageData}
          alt='Strategy'
          className={styles['logo']}
        />
        <h4>Strategy & Architecture</h4>
        <p className={styles['services__module__innergrid__comp__text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vestibulum aliquam metus.
        </p>
      </div>
      <div className={styles['services__module__innergrid__comp']}>
        <GatsbyImage
          image={services[0].node.childImageSharp.gatsbyImageData}
          alt='Strategy'
          className={styles['logo']}
        />
        <h4>Strategy & Architecture</h4>
        <p className={styles['services__module__innergrid__comp__text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vestibulum aliquam metus.
        </p>
      </div>
    </div>
  </div>
);
export default Services;
