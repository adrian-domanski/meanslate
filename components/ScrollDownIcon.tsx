import React from 'react';
import 'twin.macro';

interface IScrollDownIcon {
  to: string;
}

const ScrollDownIcon: React.FC<IScrollDownIcon> = ({ to }) => {
  return (
    <a
      href={to}
      tw='bg-theme absolute transition-colors hover:bg-themeDarker -bottom-12 right-1/2 transform p-2 rounded-full w-12 h-12 flex items-center justify-center'
    >
      <img src='/images/arrow_down.svg' alt='Strzałka w dół' tw='w-4 block' />
    </a>
  );
};

export default ScrollDownIcon;
