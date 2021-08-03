// @flow strict
import React from 'react';
import { GatsbyImage, gatsbyImageData } from 'gatsby-plugin-image';
import CallToAction from '../../CallToAction/CallToAction';
import styles from './EndingCallToAction.module.scss';

type Props = {
  node: {
    childImageSharp: typeof gatsbyImageData,
    name?: string
  }
};

const EndingCallToAction = ({ landing }: { landing: Array<Props> }) => (
  <div className={styles['container']}>
    {landing[1] && (
      <>
        <GatsbyImage
          image={landing[1].node.childImageSharp.gatsbyImageData}
          height={landing[1].node.childImageSharp.gatsbyImageData.height}
          width={landing[1].node.childImageSharp.gatsbyImageData.width}
          alt={landing[1].node.name}
          key={landing[1].node.name}
        />
        <h2>Vous avez un projet en tête ?</h2>
        <h6 className={styles['text_light']}>
          Contactez-nous pour que nous discutions de votre projet.
        </h6>
        <CallToAction />
      </>
    )}
  </div>
);

export default EndingCallToAction;
