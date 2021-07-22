import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from './LastPosts.module.scss';

const LastPosts = ({ lastPosts }) => (
  <>
    <h1>Nos derniers posts</h1>
    <div className={styles['container']}>
      {lastPosts.map((post) => (
        <Link to={post.node.fields.slug} key={post.node.fields.slug} className={styles['card']}>
          <p className={styles['category']}>{post.node.frontmatter.category.toUpperCase()}</p>
          <GatsbyImage
            image={post.node.frontmatter.socialImage.childImageSharp.gatsbyImageData}
            alt={post.node.frontmatter.title}
            height={post.node.frontmatter.socialImage.childImageSharp.gatsbyImageData.height}
            width={post.node.frontmatter.socialImage.childImageSharp.gatsbyImageData.width}/>
          <h4>{post.node.frontmatter.title}</h4>
          <p>{post.node.frontmatter.description}</p>
          <button className={styles['button']}>Voir l'article</button>
        </Link>
      ))}
    </div>
  </>
);

export default LastPosts;