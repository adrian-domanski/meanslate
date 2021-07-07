import React from 'react';
import { Button } from '../../styles/components';
import { UploadFile, UploadLabel } from '../home/LetsGetStartedSection';
import {
  InputIcon,
  InputWrapper,
  SelectInput,
  SelectOption,
} from './ContactTranslateForm';
import languagesJson from './languages.json';
import 'twin.macro';

const FormStepOne = ({
  targetLanguage,
  documentLanguage,
  handleInputChange,
  handleFileChange,
  file,
  setStep,
}) => {
  const getFileName = () => {
    let fileName = file?.name;
    if (fileName.length > 20)
      fileName = fileName.slice(0, 10) + '[...].' + fileName.split('.')[1];
    return fileName;
  };

  return (
    <>
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
        onClick={() => setStep(2)}
      >
        Wyślij zapytanie
      </Button>
      <Button as='button' tw='mt-2 w-full lg:(col-span-4 mt-10)' darker>
        Zobacz ofertę
      </Button>
    </>
  );
};

export default FormStepOne;
