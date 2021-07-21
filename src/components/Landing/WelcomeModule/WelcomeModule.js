import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from './WelcomeModule.module.scss';

const WelcomeModule = ({ landing }) => (
  <div className={styles['welcome__module']}>
    <GatsbyImage
      image={landing[0].node.childImageSharp.gatsbyImageData}
      height={landing[0].node.childImageSharp.gatsbyImageData.height}
      width={landing[0].node.childImageSharp.gatsbyImageData.width}
      alt={landing[0].node.name}
      key={landing[0].node.name}
    />
    <h1 className={styles['welcome__module__title']}>HOFFMANN.AI</h1>
    <h6 className={styles['welcome__module__text']}>
      Une Agence spécialisée dans la digitalisation, qui met son expertise au
      service des particuliers et professionnels évoluant en France.
    </h6>
  </div>
);

export default WelcomeModule;
