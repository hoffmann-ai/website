// @flow strict
import React from 'react';
import { GatsbyImage, gatsbyImageData } from 'gatsby-plugin-image';
import styles from './Clients.module.scss';

type Props = {
  node: {
    childImageSharp: typeof gatsbyImageData,
    name: string
  }
}

const Clients = ({ clients } : { clients : Array<Props> }) => (
  <div className={styles['container']}>
    <h1>Ils nous font confiance</h1>
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