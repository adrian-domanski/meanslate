import React from 'react';
import {
  Paragraph,
  Section,
  SectionTitle,
  ThemeColor,
} from '../../styles/components';
import tw, { styled } from 'twin.macro';
import PriceCard from './PriceCard';

const PriceSection = () => {
  return (
    <div tw='relative' id='start'>
      <BackgroundImg src='/images/oferta/bg_1.png' alt='tło' />
      <Section tw='mt-24'>
        <SectionTitle tw='text-center'>
          Ceny <ThemeColor>tłumaczeń.</ThemeColor>
        </SectionTitle>
        <Paragraph tw='text-center' className='fade-up'>
          Wybierz tłumaczenie, którego potrzebujesz.
        </Paragraph>
        <PriceCardsGrid>
          <PriceCard
            description={
              <>
                <p>
                  Prosty dokument
                  <br />z angielskiego
                  <br />
                  na polski
                </p>
                <p tw='mt-4'>W ekspresowym tempie!</p>
              </>
            }
            price={35}
            title='Normal'
            customStyles={[tw`hidden xl:(block scale-75 -mr-16)`]}
          />
          <PriceCard
            description={
              <>
                <p>
                  Prosty dokument
                  <br />z angielskiego
                  <br />
                  na polski
                </p>
                <p tw='mt-4'>W ekspresowym tempie!</p>
              </>
            }
            price={35}
            title='Normal'
            customStyles={[tw`md:(scale-95 -mx-6)`]}
          />
          <PriceCard
            description={
              <>
                <p>
                  Prosty dokument
                  <br />z angielskiego
                  <br />
                  na polski
                </p>
                <p tw='mt-4'>W ekspresowym tempie!</p>
              </>
            }
            price={25}
            title='Starter'
            darker={true}
            customStyles={[tw`md:(scale-110 z-30 -mx-6)`]}
          />
          <PriceCard
            description={
              <>
                <p>
                  Prosty dokument
                  <br />z angielskiego
                  <br />
                  na polski
                </p>
                <p tw='mt-4'>W ekspresowym tempie!</p>
              </>
            }
            price={35}
            title='Normal'
            customStyles={[tw`md:(scale-95 z-20 -mx-6)`]}
          />
          <PriceCard
            description={
              <>
                <p>
                  Prosty dokument
                  <br />z angielskiego
                  <br />
                  na polski
                </p>
                <p tw='mt-4'>W ekspresowym tempie!</p>
              </>
            }
            price={35}
            title='Normal'
            customStyles={[tw`hidden xl:(block scale-75 -ml-16)`]}
          />
        </PriceCardsGrid>
        <OtherLanguages className='fade-up'>
          Tłumaczymy wszystkie inne języki
        </OtherLanguages>
      </Section>
    </div>
  );
};

const PriceCardsGrid = tw.div`mt-12 grid gap-y-8 md:(grid grid-cols-3 mt-20) xl:(grid-cols-5)`;
const OtherLanguages = tw.div`bg-theme text-white tracking-huge uppercase font-bold py-4 px-8 text-center mt-12 table mx-auto md:(mt-20)`;
const BackgroundImg = tw.img`hidden lg:(block absolute) w-full object-cover -top-11 -z-10`;

export default PriceSection;
