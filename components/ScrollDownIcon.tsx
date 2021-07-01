import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import gsap from 'gsap';

interface IScrollDownIcon {
  to: string;
}

const ScrollDownIcon: React.FC<IScrollDownIcon> = ({ to }) => {
  const { pathname } = useRouter();

  useEffect(() => {
    gsap.from('#g-icon', {
      y: 5,
      yoyo: true,
      duration: 1,
      repeat: -1,
    });
  }, []);

  return (
    <a
      href={to}
      css={[
        tw`bg-theme absolute transition-colors duration-300 hover:bg-themeDarker -bottom-20 lg:(-bottom-20) right-1/2 translate-x-1/2 transform p-2 rounded-full w-12 h-12 flex items-center justify-center`,
        pathname === '/referencje' && tw`-bottom-10!`,
        pathname === '/oferta' && tw`-bottom-10!`,
      ]}
    >
      <img
        src='/images/arrow_down.svg'
        id='g-icon'
        alt='Strzałka w dół'
        tw='w-4 block'
      />
    </a>
  );
};

export default ScrollDownIcon;
