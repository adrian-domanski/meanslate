import React from 'react';
import Layout from '../components/Layout/Layout';
import PriceSection from '../components/offer/PriceSection';
import PageHeader from '../components/PageHeader';
import OurOfferSection from '../components/offer/OurOfferSection';
import LetsWorkTogether from '../components/offer/LetsWorkTogether';
import LetsGetStartedSection from '../components/home/LetsGetStartedSection';
import tw from 'twin.macro';
import ContactTranslateForm from '../components/contact/ContactTranslateForm';

const Offer = () => {
  return (
    <Layout footerBgURL='/images/oferta/custom_footer.png' title='Oferta'>
      <PageHeader
        title='Oferta?'
        subtitle='Dopasowana do Twoich potrzeb'
        bgImg='/images/oferta/header_bg.png'
      />

      <main>
        <PriceSection />
        <OurOfferSection />
        <LetsWorkTogether />
        <ContactTranslateForm
          bg={{
            src: '/images/oferta/elipsa_2.png',
            alt: 'tło',
            css: [tw`hidden lg:(block absolute top-0 right-0 -z-10)`],
          }}
        />
      </main>
    </Layout>
  );
};

export default Offer;
