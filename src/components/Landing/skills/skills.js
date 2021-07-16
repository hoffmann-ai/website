import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from './Skills.module.scss';

const Skills = ({ skills }) => (
  <div className={styles['container']}>
    <div className={styles['text']}>
      <h3>Notre expertise</h3>
      <p>pour rester à la pointe de la technologie</p>
    </div>
    <GatsbyImage image={skills[0].node.childImageSharp.gatsbyImageData} alt="aws" className={styles['logo']} style={{ top: '20%', left: '30%' }}/>
    <GatsbyImage image={skills[1].node.childImageSharp.gatsbyImageData} alt="azure" className={styles['logo']} style={{ top: '20%', left: '50%' }}/>
    <GatsbyImage image={skills[2].node.childImageSharp.gatsbyImageData} alt="cloud" className={styles['logo']} style={{ top: '20%', left: '70%' }}/>
    <GatsbyImage image={skills[3].node.childImageSharp.gatsbyImageData} alt="docker" className={styles['logo']} style={{ top: '80%', left: '30%' }}/>
    <GatsbyImage image={skills[4].node.childImageSharp.gatsbyImageData} alt="kubernetes" className={styles['logo']} style={{ top: '80%', left: '50%' }}/>
    <GatsbyImage image={skills[5].node.childImageSharp.gatsbyImageData} alt="prometheus" className={styles['logo']} style={{ top: '80%', left: '70%' }}/>
  </div>
);

export default Skills;