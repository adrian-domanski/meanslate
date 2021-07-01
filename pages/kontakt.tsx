import React from 'react';
import Layout from '../components/Layout/Layout';
import Header from '../components/contact/Header';
import ContactTranslateForm from '../components/contact/ContactTranslateForm';
import ContactUsFormSection from '../components/contact/ContactUsFormSection';

const kontakt = () => {
  return (
    <Layout
      navTransparent={false}
      footerBgURL='/images/oferta/custom_footer.png'
      title='Kontakt'
    >
      <Header />
      <main>
        <ContactTranslateForm />
        <ContactUsFormSection />
      </main>
    </Layout>
  );
};

export default kontakt;
