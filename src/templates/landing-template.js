// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Landing from '../components/Landing/Landing';
import type { AllMarkdownRemark } from '../types';

type Props = {
  pageContext: {
    lastPosts: {
      data: AllMarkdownRemark
    }
  }
}

const LandingTemplate = ({ pageContext }: Props) => {
  const lastPosts = pageContext.lastPosts.data.allMarkdownRemark.edges;

  return (
    <Layout title={'Accueil - HOFFMANN.AI'}>
      <Page>
        <Landing lastPosts={lastPosts} />
      </Page>
    </Layout>
  );
};

export default LandingTemplate;
