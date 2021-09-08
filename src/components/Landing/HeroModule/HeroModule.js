// @flow strict
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { GatsbyImagesType } from '../../../types/index';
import styles from './HeroModule.module.scss';

const Hero = ({ landing }: { landing: GatsbyImagesType }) => {
  if (!landing[0]) return (<></>);

  return (
    <div className={styles['hero__module']}>
      <GatsbyImage
        image={landing[0].node.childImageSharp.gatsbyImageData}
        height={landing[0].node.childImageSharp.gatsbyImageData.height}
        width={landing[0].node.childImageSharp.gatsbyImageData.width}
        alt={landing[0].node.name}
        key={landing[0].node.name}
      />
      <h2 className={styles['hero__module__title']}>HOFFMANN.AI</h2>
      <h6 className={styles['text_light']}>
        Une société spécialisée dans le domaine du service informatique. Nous intervenons sur
        des problématiques de digitalisation afin d\'accompagner nos clients dans leurs
        objectifs de communication, notoriété, marketing et création de logiciel.
      </h6>
    </div>
  );
};

export default Hero;
