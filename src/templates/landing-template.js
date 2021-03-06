// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Landing from '../components/Landing/Landing';
import type { Edges, GatsbyImagesType, ServiceData } from '../types';

type Props = {
  pageContext: {
    lastPosts: {
      data: {
        allMarkdownRemark: {
          edges: Edges,
        },
      },
    },
    clients: {
      data: {
        allFile: {
          edges: Edges,
        },
      },
    },
    skills: {
      data: {
        allMarkdownRemark: {
          edges: Edges,
        },
      },
    },
    landing: {
      data: {
        allFile: {
          edges: GatsbyImagesType,
        },
      },
    },
    services: {
      data: {
        allMarkdownRemark: {
          edges: ServiceData[],
        },
      },
    },
  },
};

const LandingTemplate = ({ pageContext }: Props) => {
  const lastPosts = pageContext.lastPosts ? pageContext.lastPosts.data.allMarkdownRemark.edges : [];
  const clients = pageContext.clients ? pageContext.clients.data.allFile.edges : [];
  const skills = pageContext.skills ? pageContext.skills.data.allMarkdownRemark.edges : [];
  const landing = pageContext.landing.data.allFile.edges;
  const services = pageContext.services ? pageContext.services.data.allMarkdownRemark.edges : [];

  return (
    <Layout title={'Accueil - HOFFMANN.AI'}>
      <Page>
        <Landing
          lastPosts={lastPosts}
          clients={clients}
          skills={skills}
          landing={landing}
          services={services}
        />
      </Page>
    </Layout>
  );
};

export default LandingTemplate;
