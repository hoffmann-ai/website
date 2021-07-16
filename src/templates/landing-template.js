// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Landing from '../components/Landing/Landing';
import type { Edges } from '../types';

type Props = {
  pageContext: {
    data: {
      allFile: Edges,
      allMarkdownRemark: Edges
    }
  }
}

const LandingTemplate = ({ pageContext }: Props) => {
  const landingContext = pageContext.data;
  console.log(pageContext);

  return (
    <Layout title={'Accueil - HOFFMANN.AI'}>
      <Page>
        <Landing landingContext={landingContext} />
      </Page>
    </Layout>
  );
};

export default LandingTemplate;
