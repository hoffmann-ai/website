// @flow strict
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { GatsbyImagesType } from '../../../types/index';
import styles from './Clients.module.scss';

const Clients = ({ clients } : { clients : GatsbyImagesType }) => (
  <div className={styles['container']}>
    <h6 className={styles['text_light']}>Les sociétés qui ont travaillé avec nous</h6>
    <div className={styles['logos']}>
      {clients.map((client) => (
        <GatsbyImage
          className={styles['logo']}
          image={client.node.childImageSharp.gatsbyImageData}
          height={client.node.childImageSharp.gatsbyImageData.height}
          width={client.node.childImageSharp.gatsbyImageData.width}
          alt={client.node.name}
          key={client.node.name}
          imgStyle={{ objectFit: 'contain' }}
        />
      ))}
    </div>
  </div>
);

export default Clients;