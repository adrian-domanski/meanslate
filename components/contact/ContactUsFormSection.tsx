import React from 'react';
import tw from 'twin.macro';
import {
  Button,
  Paragraph,
  Section,
  SectionTitle,
  ThemeColor,
} from '../../styles/components';
import { Input } from '../home/LetsGetStartedSection';

const ContactUsFormSection = () => {
  return (
    <div tw='relative'>
      <BackgroundImg src='/images/kontakt/bg_2.png' alt='Tło' />
      <Elipse src='/images/oferta/elipsa_2.png' alt='Tło' />
      <Section tw='max-w-5xl'>
        <SectionTitle tw='text-center'>
          Skontaktuj się <ThemeColor>z nami.</ThemeColor>
        </SectionTitle>
        <Paragraph tw='text-center mb-24'>
          Masz pytania, wątpliwości, chcesz zlecić nam tłumaczenie? W takim
          razie wypełnij poniższy formularz, zadzwoń lub wyślij wiadomość na
          naszego maila - jesteśmy do dyspozycji!
        </Paragraph>
        <ContactForm>
          <div tw='lg:(flex space-x-8)'>
            <Input placeholder='Imię' />
            <Input placeholder='Nazwisko' tw='mt-4 lg:mt-0' />
          </div>
          <Input placeholder='Temat' />
          <Input placeholder='Wiadomość' as='textarea' tw='resize-none h-48' />
          <Button as='button' tw='lg:(table ml-auto px-12)'>
            Wyślij zapytanie
          </Button>
        </ContactForm>
      </Section>
    </div>
  );
};

const ContactForm = tw.form`flex flex-col space-y-4 mt-8 lg:(space-y-8)`;
const BackgroundImg = tw.img`hidden lg:(block w-full -z-10 absolute object-cover -top-96)`;
const Elipse = tw.img`hidden xl:(block -z-10 absolute -bottom-44 right-0)`;

export default ContactUsFormSection;
