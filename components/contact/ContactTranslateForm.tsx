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
import languagesJson from './languages.json';

const ContactTranslateForm = () => {
  const [targetLanguage, setTargetLanguage] = useState('');
  const [documentLanguage, setDocumentLanguage] = useState('');
  const [file, setFile] = useState<File>();

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

  const getFileName = () => {
    let fileName = file?.name;
    if (fileName.length > 20)
      fileName = fileName.slice(0, 10) + '[...].' + fileName.split('.')[1];
    return fileName;
  };

  return (
    <div tw='relative lg:mt-52'>
      <Elipse src='/images/oferta/elipsa_1.png' alt='tło' />
      <Section tw='max-w-6xl xl:(mb-96)'>
        <SectionTitle tw='text-center'>
          <ThemeColor>Zacznij</ThemeColor> tłumaczyć<ThemeColor>.</ThemeColor>
        </SectionTitle>
        <Paragraph tw='text-center'>
          Z naszą pomocą przetłumaczysz dokumenty w kilkunastu językach!
        </Paragraph>
        <TranslateForm>
          <InputWrapper>
            <SelectInput
              as='select'
              value={documentLanguage}
              onChange={handleInputChange}
              name='documentLanguage'
            >
              <SelectOption value='' disabled>
                Język dokumentu
              </SelectOption>
              {languagesJson.languages.map((language, index) => (
                <SelectOption key={index} value={language}>
                  {language}
                </SelectOption>
              ))}
            </SelectInput>
            <InputIcon src='/images/icons/arrow-down.png' alt='Arrow down' />
          </InputWrapper>

          <InputWrapper>
            <SelectInput
              as='select'
              value={targetLanguage}
              onChange={handleInputChange}
              name='targetLanguage'
            >
              <SelectOption value='' disabled>
                Docelowy język
              </SelectOption>
              {languagesJson.languages.map((language, index) => (
                <SelectOption key={index} value={language}>
                  {language}
                </SelectOption>
              ))}
            </SelectInput>
            <InputIcon src='/images/icons/arrow-down.png' alt='Arrow down' />
          </InputWrapper>

          <UploadLabel htmlFor='upload' tw='col-span-6'>
            <p>{file ? getFileName() : 'Prześlij plik'}</p>
            <div>
              <span>Kliknij mnie</span>
              <img src='/images/icons/upload.svg' alt='Wyślij plik' />
            </div>
          </UploadLabel>
          <UploadFile type='file' id='upload' onChange={handleFileChange} />
          <Button
            as='button'
            tw='mt-6 w-full lg:(col-span-4 col-start-3 mt-10)'
          >
            Wyślij zapytanie
          </Button>
          <Button as='button' tw='mt-2 w-full lg:(col-span-4 mt-10)' darker>
            Zobacz ofertę
          </Button>
        </TranslateForm>
      </Section>
    </div>
  );
};

const TranslateForm = tw.form`mt-8 lg:(grid grid-cols-12 gap-x-4 mt-10)`;
const SelectInput = tw(Input)`appearance-none mt-4 lg:(mt-0)`;
const SelectOption = tw.option``;
const InputWrapper = tw.div`relative lg:(col-span-3)`;
const InputIcon = tw.img`block absolute top-1/2 transform -translate-y-1/2 right-4`;
const Elipse = tw.img`hidden xl:(block absolute top-52 -z-10 left-0)`;

export default ContactTranslateForm;
