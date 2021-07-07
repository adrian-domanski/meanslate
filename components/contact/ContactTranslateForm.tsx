import React, { useState } from 'react';
import tw from 'twin.macro';
import {
  Section,
  SectionTitle,
  ThemeColor,
  Paragraph,
  Button,
} from '../../styles/components';
import { Input, UploadFile, UploadLabel } from '../home/LetsGetStartedSection';
import FormStepOne from './FormStepOne';
import FormStepTwo from './FormStepTwo';

const ContactTranslateForm = () => {
  const [targetLanguage, setTargetLanguage] = useState('');
  const [documentLanguage, setDocumentLanguage] = useState('');
  const [file, setFile] = useState<File>();
  const [step, setStep] = useState(1);

  const handleInputChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'targetLanguage':
        return setTargetLanguage(value);
      case 'documentLanguage':
        return setDocumentLanguage(value);
      default:
        return console.log('Unhandled change object name');
    }
  };

  const handleFileChange = (e) => {
    const [file] = e.target.files;
    if (file) setFile(file);
  };

  return (
    <div tw='relative lg:mt-52'>
      <Elipse src='/images/oferta/elipsa_1.png' alt='tło' />
      <Section tw='max-w-6xl xl:(mb-96)'>
        <SectionTitle tw='text-center'>
          <ThemeColor>Zacznij</ThemeColor> tłumaczyć<ThemeColor>.</ThemeColor>
        </SectionTitle>
        <Paragraph tw='text-center' className='fade-up'>
          Z naszą pomocą przetłumaczysz dokumenty w kilkunastu językach!
        </Paragraph>
        <TranslateForm className='stagger'>
          {step === 1 ? (
            <FormStepOne
              documentLanguage={documentLanguage}
              targetLanguage={targetLanguage}
              handleFileChange={handleFileChange}
              handleInputChange={handleInputChange}
              file={file}
              setStep={setStep}
            />
          ) : (
            <FormStepTwo />
          )}
        </TranslateForm>
      </Section>
    </div>
  );
};

const TranslateForm = tw.form`mt-8 lg:(grid grid-cols-12 gap-x-4 mt-10)`;
export const SelectInput = tw(
  Input
)`appearance-none mt-4 lg:(mt-0) cursor-pointer`;
export const SelectOption = tw.option`cursor-pointer`;
export const InputWrapper = tw.div`relative lg:(col-span-3) cursor-pointer`;
export const InputIcon = tw.img`block absolute top-1/2 transform -translate-y-1/2 right-4`;
export const Elipse = tw.img`hidden xl:(block absolute top-52 -z-10 left-0)`;

export default ContactTranslateForm;
