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
    <h2>Notre expertise</h2>
    <h6 className={styles['text_light']}>pour rester à la pointe de la technologie</h6>
    <div className={styles['grid']}>
      {skills.map((skill) => (
        <div className={styles['cell']}>
          <div className={styles['logo']}>
            <GatsbyImage
              image={skill.node.childImageSharp.gatsbyImageData}
              height={skill.node.childImageSharp.gatsbyImageData.height}
              width={skill.node.childImageSharp.gatsbyImageData.width}
              alt={skill.node.name}
              key={skill.node.name} />
          </div>
          <h4>{skill.node.name}</h4>
          <p className={styles['text_light']}>
            Animante vel ut ut praedito cultuque ut ut vicissitudine redamare delectari est vestitu
            corporis ita ita non possit ut inanimis.
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;