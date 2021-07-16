import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from './Skills.module.scss';

const Skills = ({ skills }) => (
  <div className={styles['container']}>
    <div className={styles['text']}>
      <h3>Notre expertise</h3>
      <p>pour rester à la pointe de la technologie</p>
    </div>
<<<<<<< HEAD
    {skills.map((skill, i) => {
      const angle = (i * (360 / skills.length)) * (Math.PI / 180);
      return (
        <GatsbyImage
          image={skill.node.childImageSharp.gatsbyImageData}
          height={skill.node.childImageSharp.gatsbyImageData.height}
          width={skill.node.childImageSharp.gatsbyImageData.width}
          alt={skill.node.name}
          key={skill.node.name}
          className={styles['logo']}
          style={{ top: `${50 + Math.cos(angle) * 30}%`, left: `${50 + Math.sin(angle) * 30}%` }} />
      );
    })}
=======
    <GatsbyImage image={logos[0].node.childImageSharp.gatsbyImageData} alt="aws" className={styles['logo']} style={{ top: '20%', left: '30%' }}/>
    <GatsbyImage image={logos[1].node.childImageSharp.gatsbyImageData} alt="azure" className={styles['logo']} style={{ top: '20%', left: '50%' }}/>
    <GatsbyImage image={logos[2].node.childImageSharp.gatsbyImageData} alt="cloud" className={styles['logo']} style={{ top: '20%', left: '70%' }}/>
    <GatsbyImage image={logos[3].node.childImageSharp.gatsbyImageData} alt="docker" className={styles['logo']} style={{ top: '80%', left: '30%' }}/>
    <GatsbyImage image={logos[4].node.childImageSharp.gatsbyImageData} alt="kubernetes" className={styles['logo']} style={{ top: '80%', left: '50%' }}/>
    <GatsbyImage image={logos[5].node.childImageSharp.gatsbyImageData} alt="prometheus" className={styles['logo']} style={{ top: '80%', left: '70%' }}/>
>>>>>>> aa86b62 (fix: remove deprecated gatsby-image and use gatsby-plugin-image instead)
  </div>
);

export default Skills;