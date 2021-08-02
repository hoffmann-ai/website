'use strict';

const path = require('path');
const _ = require('lodash');
const createCategoriesPages = require('./pagination/create-categories-pages.js');
const createTagsPages = require('./pagination/create-tags-pages.js');
const createPostsPages = require('./pagination/create-posts-pages.js');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js'),
  });

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js'),
  });

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list-template.js'),
  });

  const lastPosts = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" } } }
        limit: 4
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              description
              title
              category
              socialImage {
                childImageSharp {
                  gatsbyImageData(width: 450, height: 164)
                }
              }
            }
          }
        }
      }
    }
  `);

  const skills = await graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {template: {eq: "skills"}}}) {
        edges {
          node {
            frontmatter {
              name
              description
              logo {
                childImageSharp {
                  gatsbyImageData(width: 48, height: 48)
                }
              }
            }
          }
        }
      }
    }
  `);

  const clients = await graphql(`
    {
      allFile(filter: { relativeDirectory: { eq: "clients" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(height: 48)
            }
            name
          }
        }
      }
    }
  `);

  const landing = await graphql(`
    {
      allFile(filter: { relativeDirectory: { eq: "landing" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(height: 300)
            }
            name
          }
        }
      }
    }
  `);

  const services = await graphql(`
  {
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "services"}}}) {
      edges {
        node {
          frontmatter {
            name
            description
            logo {
              childImageSharp {
                gatsbyImageData(height: 500)
              }
            }
          }
        }
      }
    }
  }
`);

  // Home page
  createPage({
    path: '/',
    component: path.resolve('./src/templates/landing-template.js'),
    context: {
      lastPosts, skills, clients, landing, services
    },
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, (edge) => {
    if (_.get(edge, 'node.frontmatter.template') === 'page') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/page-template.js'),
        context: { slug: edge.node.fields.slug },
      });
    } else if (_.get(edge, 'node.frontmatter.template') === 'post') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post-template.js'),
        context: { slug: edge.node.fields.slug },
      });
    }
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
  await createPostsPages(graphql, actions);
};

module.exports = createPages;
