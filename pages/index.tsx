import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader';
import WhatYouExpectSection from '../components/home/WhatYouExpectSection';
import WhyUsSection from '../components/home/WhyUsSection';
import OurExpertsSection from '../components/home/OurExpertsSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import ContactTranslateForm from '../components/contact/ContactTranslateForm';
import tw from 'twin.macro';

export default function Home() {
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
        <WhatYouExpectSection />
        <WhyUsSection />
        <OurExpertsSection />
        <HowItWorksSection />
        <ContactTranslateForm
          bg={{
            src: '/images/bg_3.png',
            alt: 'tło',
            css: [
              tw`absolute w-screen -z-10 object-cover left-1`,
              `top: -400px; min-height: 800px;`,
            ],
          }}
        />
      </main>
    </Layout>
  );
}
