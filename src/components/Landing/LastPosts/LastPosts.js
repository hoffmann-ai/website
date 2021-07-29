// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, gatsbyImageData } from 'gatsby-plugin-image';
import styles from './LastPosts.module.scss';

type Props = {
  node: {
    name: string,
    frontmatter: {
      title: string,
      description: string,
      socialImage: {
        childImageSharp: typeof gatsbyImageData,
      },
      category: string
    },
    fields: {
      slug: string
    }
  }
}

const LastPosts = ({ lastPosts } : { lastPosts : Array<Props> }) => (
  <div className={styles['container']}>
    <h2>Nos derniers posts</h2>
    <p className={styles['text_light']}>Retrouvez nos derniers articles</p>
    <div className={styles['grid']}>
      {lastPosts.map((post) => (
        <Link to={post.node.fields.slug} key={post.node.fields.slug} className={styles['card']}>
          <p className={styles['category']}>{post.node.frontmatter.category.toUpperCase()}</p>
          <GatsbyImage
            image={post.node.frontmatter.socialImage.childImageSharp.gatsbyImageData}
            alt={post.node.frontmatter.title}
            height={post.node.frontmatter.socialImage.childImageSharp.gatsbyImageData.height}
            width={post.node.frontmatter.socialImage.childImageSharp.gatsbyImageData.width}/>
          <h4>{post.node.frontmatter.title}</h4>
          <p className={styles['text_light']}>{post.node.frontmatter.description}</p>
          <button className={styles['button']}>Voir l'article</button>
        </Link>
      ))}
    </div>
  </div>
);

export default LastPosts;