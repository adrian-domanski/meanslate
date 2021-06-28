import React from 'react';
import Layout from '../components/Layout/Layout';
import PriceSection from '../components/offer/PriceSection';
import PageHeader from '../components/PageHeader';
import OurOfferSection from '../components/offer/OurOfferSection';
import LetsWorkTogether from '../components/offer/LetsWorkTogether';
import LetsGetStartedSection from '../components/home/LetsGetStartedSection';
import tw from 'twin.macro';

const Offer = () => {
  return (
    <Layout footerBgURL='/images/oferta/custom_footer.png'>
      <PageHeader
        title='Tłumaczymy.'
        subtitle='Profesjonalnie, specjalistycznie i w trymiga!'
        bgImg='/images/oferta/header_bg.png'
      />

      <main>
        <PriceSection />
        <OurOfferSection />
        <LetsWorkTogether />
        <div tw='relative'>
          <BackgroundImg src='/images/oferta/elipsa_2.png' alt='tło' />
          <LetsGetStartedSection hasBackground={false} />
        </div>
      </main>
    </Layout>
  );
};

const BackgroundImg = tw.img`hidden lg:(block absolute top-0 right-0 -z-10)`;

export default Offer;
