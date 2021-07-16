import React from 'react';
import {
  Button,
  Paragraph,
  Section,
  SectionTitle,
  ThemeColor,
} from '../../styles/components';
import tw, { styled } from 'twin.macro';

interface ILetsGetStartedSection {
  hasBackground?: boolean;
}

const LetsGetStartedSection: React.FC<ILetsGetStartedSection> = ({
  hasBackground = true,
}) => {
  return (
    <div tw='relative'>
      {hasBackground && (
        <BackgroundImage src='' alt='Tło' tw='hidden lg:block' />
      )}
      <Section tw='max-w-5xl'>
        <SectionTitle tw='text-center'>
          <ThemeColor>Zacznij</ThemeColor> tłumaczyć<ThemeColor>.</ThemeColor>
        </SectionTitle>
        <Paragraph tw='text-center max-w-md mx-auto' className='fade-up'>
          Z naszą pomocą przetłumaczysz dokumenty w kilkunastu językach
        </Paragraph>
        <TranslateForm className='stagger'>
          <Input type='text' placeholder='Język dokumentu' tw='lg:col-span-3' />
          <Input
            type='text'
            placeholder='Docelowy język'
            tw='mt-4 lg:(col-span-3 mt-0)'
          />
          <UploadLabel htmlFor='upload' tw='col-span-6'>
            <p>Prześlij plik</p>
            <div>
              <span>Kliknij mnie</span>
              <img src='/images/icons/upload.svg' alt='Wyślij plik' />
            </div>
          </UploadLabel>
          <UploadFile type='file' id='upload' />
          <Button as='button' tw='mt-6 w-full lg:(col-span-4 col-start-3 mt-6)'>
            Wyślij zapytanie
          </Button>
          <Button as='button' tw='mt-2 w-full lg:(col-span-4 mt-6)' darker>
            Zobacz ofertę
          </Button>
        </TranslateForm>
      </Section>
    </div>
  );
};

const TranslateForm = tw.form`mt-8 lg:(grid grid-cols-12 gap-x-4)`;

export const Input = tw.input`p-4 shadow-custom text-gray-500 placeholder-gray-500 font-bold tracking-widest rounded block w-full`;

export const UploadFile = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const UploadLabel = styled.label`
  ${tw`px-4 font-bold text-gray-500 bg-white tracking-widest cursor-pointer items-center shadow-custom mt-4 flex justify-between lg:(mt-0)`}
  padding-top: 16px;
  padding-bottom: 16px;

  div {
    ${tw`flex text-gray-300`}

    img {
      ${tw`ml-3`}
    }
  }
`;

const BackgroundImage = styled.img`
  ${tw`absolute w-screen`}
`;

export default LetsGetStartedSection;
