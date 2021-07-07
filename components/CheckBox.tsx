import React from 'react';
import tw, { styled } from 'twin.macro';
import { Paragraph } from '../styles/components';

interface ICheckBox {
  label: string;
  checked: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckBox: React.FC<ICheckBox> = ({ label, checked, onChange }) => {
  return (
    <div tw='cursor-pointer'>
      <label tw='flex items-center cursor-pointer'>
        <StyledCheckBox type='checkbox' onChange={onChange} />
        <StyledBox tw='border-2 bg-white border-theme rounded flex items-center justify-center'>
          {checked && (
            <StyledSVG
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='check'
              className='svg-inline--fa fa-check fa-w-16'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              tw='cursor-pointer'
            >
              <path
                fill='#f8b131'
                d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
              />
            </StyledSVG>
          )}
        </StyledBox>
        <Paragraph tw='pl-2 w-auto select-none text-left'>{label}</Paragraph>
      </label>
    </div>
  );
};

const StyledCheckBox = styled.input(() => [tw`appearance-none`]);

const StyledBox = styled.div`
  min-width: 24px;
  min-height: 24px;
  height: 24px;
  width: 24px;
`;

const StyledSVG = styled.svg`
  display: block;
  top: 4px;
  left: 4px;
  width: 16px;
  height: 16px;

  @media screen and (min-width: 1024px) {
    top: 6px;
  }
`;

export default CheckBox;
