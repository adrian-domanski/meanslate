import React from 'react';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader';
import ChooseUsSection from '../components/reference/ChooseUsSection';
import FAQSection from '../components/reference/FAQSection';
import WhatOtherSaySection from '../components/reference/WhatOtherSaySection';
import LetsGetStartedSection from '../components/home/LetsGetStartedSection';
import tw from 'twin.macro';
import ContactTranslateForm from '../components/contact/ContactTranslateForm';

const Reference = () => {
  return (
    <Layout
      footerBgURL='/images/referencje/custom_footer.png'
      title='Referencje'
    >
      <PageHeader
        title='Najwyższa jakość usług?'
        subtitle='Mamy na to dowody!'
        bgImg='/images/referencje/header_bg.png'
      />

      <main>
        <ChooseUsSection />
        <WhatOtherSaySection />
        <FAQSection />
        {/* <div tw='relative'>
          <Elipse src='' alt='tło' />
          <LetsGetStartedSection hasBackground={false} />
        </div> */}
        <ContactTranslateForm
          bg={{
            src: '/images/referencje/elipse_2.png',
            alt: 'tło',
            css: [tw`absolute hidden xl:(block) right-0 top-0`],
          }}
        />
      </main>
    </Layout>
  );
};

const Elipse = tw.img``;

export default Reference;
