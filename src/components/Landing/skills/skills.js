import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from './Skills.module.scss';

const Skills = ({ skills }) => (
  <div className={styles['container']}>
    <div className={styles['text']}>
      <h3>Notre expertise</h3>
      <p>pour rester à la pointe de la technologie</p>
    </div>
    {displaySkills(skills)}
  </div>
);

const displaySkills = (skills: any[]) => {
  const render = [];
  skills.forEach((skill, i) => {
    const angle = (i * (360 / skills.length)) * (Math.PI / 180);
    render.push(<GatsbyImage image={skill.node.childImageSharp.gatsbyImageData} alt="aws" className={styles['logo']}
      style={{ top: `${50 + Math.cos(angle) * 40}%`, left: `${50 + Math.sin(angle) * 40}%` }} />);
  });
  return render;
};

export default Skills;