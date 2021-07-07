// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Landing from '../components/Landing/Landing';

const LandingTemplate = () => (
  <Layout title={'Accueil - HOFFMANN.AI'}>
    <Page>
      <Landing />
    </Page>
  </Layout>
);

export default LandingTemplate;
