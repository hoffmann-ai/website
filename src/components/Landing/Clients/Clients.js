import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styles from './Clients.module.scss';

const Clients = ({ clients }) => (
  <div className={styles['container']}>
    <h1>Ils nous font confiance</h1>
    <div className={styles['logos']}>
      {clients.map((client, i) => (
        <GatsbyImage className={styles['logo']} image={client.node.childImageSharp.gatsbyImageData} alt="client" key={i} imgStyle={{ objectFit: 'contain' }} />
      ))}
    </div>
  </div>
);

export default Clients;