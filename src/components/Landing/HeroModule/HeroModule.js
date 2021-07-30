// @flow strict
import React from 'react';
import { GatsbyImage, gatsbyImageData } from 'gatsby-plugin-image';
import styles from './HeroModule.module.scss';

type Props = {
  node: {
    childImageSharp: typeof gatsbyImageData,
    name: string
  }
}

const Hero = ({ landing } : { landing : Array<Props> }) => (
  <div className={styles['hero__module']}>
    {landing[2] && (
      <>
        <GatsbyImage
          image={landing[2].node.childImageSharp.gatsbyImageData}
          height={landing[2].node.childImageSharp.gatsbyImageData.height}
          width={landing[2].node.childImageSharp.gatsbyImageData.width}
          alt={landing[2].node.name}
          key={landing[2].node.name}
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
