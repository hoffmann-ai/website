// @flow strict
import React from 'react';
import { GatsbyImage, gatsbyImageData } from 'gatsby-plugin-image';
import styles from './Skills.module.scss';

type Props = {
  node: {
    frontmatter: {
      name: string;
      description: string;
      logo: {
        childImageSharp: {
          gatsbyImageData: typeof gatsbyImageData
        }
      }
    }
  }
}

const Skills = ({ skills }: { skills: Array<Props> }) => (
  <div className={styles['container']}>
    <h2 className={styles['landing_title']}>Notre expertise</h2>
    <h6 className={styles['text_light']}>HOFFMANN.AI  prône une forte culture startup associée à des valeurs d’excellence, d’audace et d’innovation, une expertise dans l’accompagnement à la digitalisation des entreprises et au développement de leurs produits digitaux, ainsi qu’une pédagogie douce et compréhensible lors de formations.</h6>
    <div className={styles['grid']}>
      {skills.map((skill) => (
        <div className={styles['cell']} key={skill.node.frontmatter.name}>
          <div className={styles['logo']}>
            <GatsbyImage
              image={skill.node.frontmatter.logo.childImageSharp.gatsbyImageData}
              height={skill.node.frontmatter.logo.childImageSharp.gatsbyImageData.height}
              width={skill.node.frontmatter.logo.childImageSharp.gatsbyImageData.width}
              alt={skill.node.frontmatter.name}
              key={skill.node.frontmatter.name} />
          </div>
          <h4>{skill.node.frontmatter.name}</h4>
          <p className={styles['text_light']}>{skill.node.frontmatter.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;