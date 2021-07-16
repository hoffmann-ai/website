import React from 'react';
import Img from 'gatsby-image';
import styles from './Skills.module.scss';

const Skills = ({ logos }) => (
  <div className={styles['container']}>
    <div className={styles['text']}>
      <h3>Notre expertise</h3>
      <p>pour rester à la pointe de la technologie</p>
    </div>
    <Img fixed={logos[0].node.childImageSharp.fixed} className={styles['logo']} style={{ top: '35%', left: '25%' }}/>
    <Img fixed={logos[1].node.childImageSharp.fixed} className={styles['logo']} style={{ top: '80%', left: '30%' }}/>
    <Img fixed={logos[2].node.childImageSharp.fixed} className={styles['logo']} style={{ top: '20%', left: '30%' }}/>
    <Img fixed={logos[3].node.childImageSharp.fixed} className={styles['logo']} style={{ top: '80%', left: '40%' }}/>
    <Img fixed={logos[4].node.childImageSharp.fixed} className={styles['logo']} style={{ top: '20%', left: '40%' }}/>
    <Img fixed={logos[5].node.childImageSharp.fixed} className={styles['logo']} style={{ top: '65%', left: '45%' }}/>
  </div>
);

export default Skills;