import React from 'react';
import styles from './Clients.module.scss';

const Clients = () => (
  <div className={styles['container']}>
    <h1>Ils nous font confiance</h1>
    <div className={styles['logos']}>
      <img src={'/logo_gefco.png'} />
      <img src={'/logo_nasa.png'} />
      <img src={'/logo_genius_eiffel.png'} />
    </div>
  </div>
);

export default Clients;