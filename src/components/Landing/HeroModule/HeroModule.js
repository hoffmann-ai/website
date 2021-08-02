// @flow strict
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { GatsbyImages } from '../../../types';
import styles from './HeroModule.module.scss';

const Hero = ({ landing } : { landing : GatsbyImages }) => (
  <div className={styles['hero__module']}>
    {landing[0] && (
      <>
        <GatsbyImage
          image={landing[0].node.childImageSharp.gatsbyImageData}
          height={landing[0].node.childImageSharp.gatsbyImageData.height}
          width={landing[0].node.childImageSharp.gatsbyImageData.width}
          alt={landing[0].node.name}
          key={landing[0].node.name}
        />
        <h2 className={styles['hero__module__title']}>HOFFMANN.AI</h2>
        <h6 className={styles['text_light']}>
          Une Agence spécialisée dans la digitalisation, qui met son expertise
          au service des particuliers et professionnels évoluant en France.
        </h6>
      </>
    )}
  </div>
);

export default Hero;
