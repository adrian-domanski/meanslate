import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';
import {
  Button,
  Paragraph,
  Section,
  SectionTitle,
  ThemeColor,
} from '../../styles/components';

const LetsWorkTogether = () => {
  return (
    <div tw='relative'>
      <BackgroundImg src='/images/oferta/bg_2.png' alt='tło' />
      <BackgroundImg
        src='/images/oferta/elipsa_1.png'
        alt='tło'
        tw='w-auto -top-72'
      />
      <Section>
        <SectionTitle tw='text-center'>
          <ThemeColor>Gotowy?</ThemeColor> No to tłumaczymy!
        </SectionTitle>
        <Paragraph tw='text-center' className='fade-up'>
          Skontaktuj się z nami już dziś - to nic zobowiązującego.
          <br />
          Mamy nadzieję, że będzie to początek owocnej współpracy!
        </Paragraph>
        <ButtonsWrapper className='stagger'>
          <Link href='/kontakt' passHref>
            <Button tw='w-full mt-8 text-center md:(table w-auto px-8)'>
              Skontaktuj się z nami
            </Button>
          </Link>
          <Link href='/referencje' passHref>
            <Button
              tw='w-full text-center mt-4 md:(mt-8 table w-auto px-8)'
              darker
            >
              Zobacz referencje
            </Button>
          </Link>
        </ButtonsWrapper>
      </Section>
    </div>
  );
};

const ButtonsWrapper = tw.div`md:(flex space-x-4 justify-center mt-4)`;
const BackgroundImg = tw.img`hidden lg:(block absolute -top-96 -z-10 w-full)`;

export default LetsWorkTogether;
