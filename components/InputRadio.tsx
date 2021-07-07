import React from 'react';
import { Paragraph } from '../styles/components';
import 'twin.macro';

interface IInputRadio {
  name: string;
  checked: boolean;
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputRadio: React.FC<IInputRadio> = ({ checked, label, onChange }) => {
  return (
    <label tw='flex items-center space-x-2 cursor-pointer'>
      <input
        type='radio'
        tw='appearance-none'
        checked={checked}
        onChange={onChange}
      />
      <div tw='w-10 h-10 shadow-custom bg-white rounded-full flex items-center justify-center'>
        {checked && <div tw='w-3 h-3 bg-theme rounded-full'></div>}
      </div>
      <Paragraph tw='font-bold text-gray-600'>{label}</Paragraph>
    </label>
  );
};

export default InputRadio;
