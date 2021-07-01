import React from 'react';
import tw from 'twin.macro';
import {
  Paragraph,
  Section,
  SectionTitle,
  ThemeColor,
} from '../../styles/components';

const Header = () => {
  return (
    <header tw='relative'>
      <BackgroundImg src='/images/kontakt/bg_1.png' alt='Tło' />
      <Section tw='mt-12 lg:(mt-24 mb-0)'>
        <SectionTitle tw='text-center xl:text-left'>
          <ThemeColor>Bądźmy</ThemeColor> w kontakcie<ThemeColor>.</ThemeColor>
        </SectionTitle>
        <Paragraph
          tw='lg:(mb-12) text-center xl:(text-left)'
          className='fade-up'
        >
          Zapraszamy na spotkanie!
        </Paragraph>
        <SectionWrapper>
          <HeaderImg
            src='/images/kontakt/header_bg.png'
            alt='Bądżmy w kontakcie'
            className='fade-up'
          />

          <ContactList className='stagger'>
            <ContactListGroup>
              <ContactIcon src='/images/kontakt/icons/place.svg' alt='Adres' />
              <ContentWrapper>
                <ContactGroupTitle>Adres:</ContactGroupTitle>
                <ContactGroupDescription as='div'>
                  <Paragraph tw='lg:(leading-tight)'>
                    Hoża 86 / 410
                    <br />
                    00-682 Warszawa, Polska
                  </Paragraph>
                </ContactGroupDescription>
              </ContentWrapper>
            </ContactListGroup>

            <ContactListGroup>
              <ContactIcon
                src='/images/kontakt/icons/email.png'
                alt='Email'
                tw='h-9'
              />
              <ContentWrapper>
                <ContactGroupTitle>Email:</ContactGroupTitle>
                <ContactGroupDescription as='div'>
                  <Paragraph tw='lg:(leading-tight)'>
                    biuro@meanslate.com
                  </Paragraph>
                </ContactGroupDescription>
              </ContentWrapper>
            </ContactListGroup>

            <ContactListGroup>
              <ContactIcon
                src='/images/kontakt/icons/phone-call.svg'
                alt='Email'
              />
              <ContentWrapper>
                <ContactGroupTitle>Telefon:</ContactGroupTitle>
                <ContactGroupDescription as='div'>
                  <Paragraph tw='lg:(leading-tight)'>+48 666 666 666</Paragraph>
                </ContactGroupDescription>
              </ContentWrapper>
            </ContactListGroup>
          </ContactList>
        </SectionWrapper>
      </Section>
    </header>
  );
};

const HeaderImg = tw.img`mt-8 block w-2/3 mx-auto xl:(-mr-36 relative -z-10 w-full bottom-52 left-24)`;
const ContactList = tw.div`mt-8 flex flex-col space-y-8 justify-center text-center md:(flex-row items-center space-y-0 justify-around mt-12 mb-12) xl:(flex-col w-1/3 block space-y-12)`;
const ContactListGroup = tw.div`lg:(flex text-left)`;
const ContactIcon = tw.img`block mx-auto w-12 lg:(w-12 h-10 m-0 mt-1)`;
const ContentWrapper = tw.div`lg:(pl-4)`;
const ContactGroupTitle = tw.h2`font-bold text-black text-xl my-2 lg:(text-lg tracking-widest)`;
const ContactGroupDescription = tw(Paragraph)`lg:(leading-snug!)`;
const SectionWrapper = tw.div`xl:(flex flex-row-reverse)`;
const BackgroundImg = tw.img`hidden lg:(block w-full object-cover -z-10 absolute top-1/3)`;

export default Header;
