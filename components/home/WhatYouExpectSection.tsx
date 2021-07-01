import React from 'react';
import {
  Section,
  SectionTitle,
  ThemeColor,
  Paragraph,
  Button,
} from '../../styles/components';
import 'twin.macro';
import Link from 'next/link';
import Card from './Card';
import tw, { styled } from 'twin.macro';

const WhatYouExpectSection = () => {
  return (
    <div tw='relative'>
      <BackgroundImage
        src='/images/bg-1.png'
        alt='background image'
        tw='hidden lg:block'
      />
      <Section
        tw='mt-24 lg:(grid grid-cols-12 mt-72 mb-24 relative) overflow-hidden xl:overflow-visible w-full'
        id='start'
      >
        {/* Subsection */}
        <div tw='mb-24 lg:(col-span-4 mb-0 flex flex-col self-center)'>
          <SectionTitle>
            Tłumaczenia <ThemeColor>jakich</ThemeColor> oczekujesz
            <ThemeColor>.</ThemeColor>
          </SectionTitle>
          <Paragraph className='fade-up'>
            Nasza oferta? Profesjonalne tłumaczenia zarówno dla klientów
            indywidualnych, jak i biznesowych - od tłumaczeń korespondencji,
            przez tłumaczenia dokumentów technicznych, aplikacji czy ofertę
            translacji systemów dla branży IT.
          </Paragraph>
          <Paragraph tw='mt-5' className='fade-up'>
            Zobacz naszą ofertę i wybierz partnera, nie podwykonawcę.
          </Paragraph>
          <Link href='/' passHref>
            <Button tw='mx-auto mt-5 lg:ml-0' className='fade-up'>
              Dowiedz się więcej
            </Button>
          </Link>
        </div>

        {/* Subsection */}
        <div tw='max-w-md lg:(col-span-8 grid grid-cols-3 relative -right-20 max-w-full) xl:(ml-8) mx-auto'>
          <div tw='hidden lg:(block absolute z-0 bg-gray-200 w-full h-16 top-1/2 transform -translate-y-1/2)'></div>
          <Card
            icon={{ src: '/images/official-documents.svg', alt: 'dokumenty' }}
            title={'Dokumenty'}
            listItems={[
              'tłumaczenie korespondencji',
              'tłumaczenie dokumentów handlowych',
              'materiały marketingowe',
              'teksty prawnicze',
            ]}
          />
          <Card
            icon={{ src: '/images/technical-support.svg', alt: 'dokumenty' }}
            title={'Materiały techniczne'}
            type='secondary'
            listItems={[
              'instrukcje obsługi',
              'specyfikacje produktowe',
              'karty charakterystyki',
              'prezentacje produktowe',
            ]}
          />

          <Card
            icon={{ src: '/images/knowledge.svg', alt: 'dokumenty' }}
            title={'Nauka'}
            type='secondary'
            listItems={[
              'recenzje',
              'karty i opisy badań',
              'książki i artykuły',
              'publikacje naukowe',
            ]}
          />
        </div>
      </Section>
    </div>
  );
};

const BackgroundImage = styled.img`
  ${tw`block w-screen absolute`}
  top: -280px;
  width: 100%;
  min-height: 1600px;
  object-fit: cover;
  z-index: -1;
`;

export default WhatYouExpectSection;
