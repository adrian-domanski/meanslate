import React from 'react';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader';
import { Section, SectionTitle } from '../styles/components';

const kontakt = () => {
  return (
    <Layout>
      <PageHeader
        title='Tłumaczymy.'
        subtitle='Profesjonalnie, specjalistycznie i w trymiga!'
        img={{
          src: '/images/earth-header.svg',
          alt: 'Kontynenty',
        }}
        annotation='I to w wielu językach!'
        bgImg='/images/header_bg.svg'
      />

      <main>
        <Section>
          <SectionTitle>Tutaj będzie contact page</SectionTitle>
        </Section>
      </main>
    </Layout>
  );
};

export default kontakt;
