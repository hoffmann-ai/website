import React from 'react';
import { Link, navigate } from 'gatsby';
import Img from 'gatsby-image';
import styles from './LastPosts.module.scss';

const LastPosts = ({ lastPosts }) => (
    <div className={styles['container']}>
      {lastPosts.map((post, i) => (
        <div key={i} className={styles['card']}>
          <p className={styles['category']}>{post.node.frontmatter.category.toUpperCase()}</p>
          <Img
            fluid={post.node.frontmatter.socialImage.childImageSharp.fluid}
            onClick={() => navigate(post.node.fields.slug)}/>
          <h4 onClick={() => navigate(post.node.fields.slug)}>{post.node.frontmatter.title}</h4>
          <p>{post.node.frontmatter.description}</p>
          <Link to={post.node.fields.slug} className={styles['button']}>voir l'article</Link>
        </div>
      ))}
    </div>
);

export default LastPosts;