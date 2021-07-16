import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from './Skills.module.scss';

const Skills = ({ logos }) => (
  <div className={styles['container']}>
    <div className={styles['text']}>
      <h3>Notre expertise</h3>
      <p>pour rester à la pointe de la technologie</p>
    </div>
    <GatsbyImage image={logos[0].node.childImageSharp.gatsbyImageData} alt="aws" className={styles['logo']} style={{ top: '20%', left: '30%' }}/>
    <GatsbyImage image={logos[1].node.childImageSharp.gatsbyImageData} alt="azure" className={styles['logo']} style={{ top: '20%', left: '50%' }}/>
    <GatsbyImage image={logos[2].node.childImageSharp.gatsbyImageData} alt="cloud" className={styles['logo']} style={{ top: '20%', left: '70%' }}/>
    <GatsbyImage image={logos[3].node.childImageSharp.gatsbyImageData} alt="docker" className={styles['logo']} style={{ top: '80%', left: '30%' }}/>
    <GatsbyImage image={logos[4].node.childImageSharp.gatsbyImageData} alt="kubernetes" className={styles['logo']} style={{ top: '80%', left: '50%' }}/>
    <GatsbyImage image={logos[5].node.childImageSharp.gatsbyImageData} alt="prometheus" className={styles['logo']} style={{ top: '80%', left: '70%' }}/>
  </div>
);

export default Skills;