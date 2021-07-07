import React, { useState } from 'react';
import { Button, Paragraph } from '../../styles/components';
import 'twin.macro';
import CheckBox from '../CheckBox';
import { Input } from '../home/LetsGetStartedSection';
import InputRadio from '../InputRadio';
import Link from 'next/link';

const FormStepTwo = () => {
  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [secondCheckbox, setSecondCheckbox] = useState(false);
  const [type, setType] = useState('company');

  return (
    <>
      <div tw='flex justify-center space-x-12 my-16 lg:(col-span-12 mt-4)'>
        <InputRadio
          name='company'
          label='Firma'
          onChange={() => setType('company')}
          checked={type === 'company'}
        />
        <InputRadio
          name='private'
          label='Prywatnie'
          checked={type === 'private'}
          onChange={() => setType('private')}
        />
      </div>
      <div tw='space-y-4 text-right col-span-12 md:(grid grid-cols-2 space-y-0 gap-4) lg:(grid-cols-3 items-center justify-center mb-8)'>
        <Input placeholder='Imię*' name='firstName' />
        <Input placeholder='Nazwisko*' name='lastName' />
        <Input placeholder='E-mail*' name='email' />
        {/* Company */}
        {type === 'company' && (
          <>
            <Input placeholder='Nazwa firmy*' name='companyName' />
            <Input placeholder='NIP*' name='nip' />
            <Input placeholder='Adres*' name='address' />
            <Input placeholder='Miasto*' name='city' />
            <Input placeholder='Kod pocztowy*' name='postCode' />
            <div>
              <Paragraph tw='text-right md:(text-left) lg:text-center'>
                *pole obowiązkowe
              </Paragraph>
            </div>
          </>
        )}
      </div>
      <div tw='col-span-12 mt-14 mb-8'>
        <CheckBox
          checked={firstCheckbox}
          onChange={(e) => setFirstCheckbox(e.target.checked)}
          label='Masz pytania, wątpliwaości, chcesz zlecić nam tłumaczenie? W takim razie wypełnij poniższy'
        />
        <div tw='mt-4'>
          <CheckBox
            checked={secondCheckbox}
            onChange={(e) => setSecondCheckbox(e.target.checked)}
            label='Masz pytania, wątpliwaości, chcesz zlecić nam tłumaczenie? W takim razie wypełnij poniższy'
          />
        </div>
      </div>

      <Link href='/' passHref>
        <Button
          as='a'
          tw='mt-6 w-full lg:(col-span-4 col-start-5 mt-10) text-center'
        >
          Przejdź do moich tłumaczeń
        </Button>
      </Link>
    </>
  );
};

export default FormStepTwo;
