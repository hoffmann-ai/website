// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Landing from '../components/Landing/Landing';
import type { Edges } from '../types';

type Props = {
  pageContext: {
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
    }
  }
}

const LandingTemplate = ({ pageContext }: Props) => {
  const lastPosts = pageContext.lastPosts.data.allMarkdownRemark.edges;
  const clients = pageContext.clients.data.allFile.edges;
  const skills = pageContext.skills.data.allFile.edges;

  return (
    <Layout title={'Accueil - HOFFMANN.AI'}>
      <Page>
        <Landing lastPosts={lastPosts} clients={clients} skills={skills} />
      </Page>
    </Layout>
  );
};

export default LandingTemplate;
