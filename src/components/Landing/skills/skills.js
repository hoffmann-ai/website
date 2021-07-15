import React from 'react';
import styles from './Skills.module.scss';

const Skills = () => (
  <div className={styles['container']}>
    <div className={styles['text']}>
      <h4>Notre expertise</h4>
      <p>pour rester à la pointe de la technologie</p>
    </div>
    <img src={'./skills/aws.svg'} className={styles['logo']} style={{ top: '0', left: '45%' }}/>
    <img src={'./skills/docker.svg'} className={styles['logo']} style={{ top: '5%', left: '80%' }}/>
    <img src={'./skills/azure.svg'} className={styles['logo']} style={{ top: '-5%', left: '10%' }}/>
    <img src={'./skills/prometheus.svg'} className={styles['logo']} style={{ top: '15%', left: '80%' }}/>
    <img src={'./skills/cloud.svg'} className={styles['logo']} style={{ top: '5%', left: '10%' }}/>
    <img src={'./skills/kubernetes.svg'} className={styles['logo']} style={{ top: '10%', left: '45%' }}/>
  </div>
);

export default Skills;