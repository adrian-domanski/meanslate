import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader';
import WhatYouExpectSection from '../components/home/WhatYouExpectSection';
import WhyUsSection from '../components/home/WhyUsSection';
import OurExpertsSection from '../components/home/OurExpertsSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import LetsGetStartedSection from '../components/home/LetsGetStartedSection';

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
      />

      <main>
        <WhatYouExpectSection />
        <WhyUsSection />
        <OurExpertsSection />
        <HowItWorksSection />
        <LetsGetStartedSection />
      </main>
    </Layout>
  );
}
