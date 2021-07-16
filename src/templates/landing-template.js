// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Landing from '../components/Landing/Landing';
import type { Edges } from '../types';

type Props = {
  pageContext: {
<<<<<<< HEAD
    lastPosts: {
      data: {
        allMarkdownRemark: {
          edges: Edges
        }
      }
    },
    clients: {
      data: {
        allFile: {
          edges: Edges
        }
      }
    },
    skills: {
      data: {
        allFile: {
          edges: Edges
        }
      }
=======
    data: {
      allFile: Edges,
      allMarkdownRemark: Edges
>>>>>>> aa86b62 (fix: remove deprecated gatsby-image and use gatsby-plugin-image instead)
    }
  }
}

const LandingTemplate = ({ pageContext }: Props) => {
<<<<<<< HEAD
  const lastPosts = pageContext.lastPosts ? pageContext.lastPosts.data.allMarkdownRemark.edges : [];
  const clients = pageContext.clients ? pageContext.clients.data.allFile.edges : [];
  const skills = pageContext.skills ? pageContext.skills.data.allFile.edges : [];
=======
  const landingContext = pageContext.data;
  console.log(pageContext);
>>>>>>> aa86b62 (fix: remove deprecated gatsby-image and use gatsby-plugin-image instead)

  return (
    <Layout title={'Accueil - HOFFMANN.AI'}>
      <Page>
        <Landing lastPosts={lastPosts} clients={clients} skills={skills} />
      </Page>
    </Layout>
  );
};

export default LandingTemplate;
