// @flow strict
import React from 'react';
import { GatsbyImage, gatsbyImageData } from 'gatsby-plugin-image';
import styles from './Skills.module.scss';

type Props = {
  node: {
    childImageSharp: typeof gatsbyImageData,
    name: string
  }
}

const Skills = ({ skills } : { skills : Array<Props> }) => (
  <div className={styles['container']}>
    <div className={styles['text']}>
      <h3>Notre expertise</h3>
      <p>pour rester à la pointe de la technologie</p>
    </div>
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
  </div>
);

export default Skills;