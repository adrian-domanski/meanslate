import Link from 'next/link';
import React from 'react';
import tw, { styled } from 'twin.macro';
import { Paragraph } from '../../styles/components';
import { useRouter } from 'next/router';

interface IFooter {
  footerBgURL?: string;
}

const Footer: React.FC<IFooter> = ({ footerBgURL }) => {
  const { pathname } = useRouter();

  return (
    <StyledFooter footerBgURL={footerBgURL}>
      {footerBgURL && <SVGWave src={footerBgURL} alt='Tło' />}
      <MeanslateLogo footerBgURL={footerBgURL}>
        <img src='/images/logo.svg' alt='Manslate' tw='block' />
      </MeanslateLogo>
      <div tw='lg:(col-span-6 flex items-center flex-col justify-center)'>
        <MenuList>
          <MenuListItem>
            <Link href='/' passHref>
              <MenuListLink
                isActive={pathname === '/'}
                footerBgURL={footerBgURL}
              >
                Strona główna
              </MenuListLink>
            </Link>
          </MenuListItem>
          <MenuListItem>
            <Link href='/' passHref>
              <MenuListLink
                isActive={pathname === '/referencje'}
                footerBgURL={footerBgURL}
              >
                Referencje
              </MenuListLink>
            </Link>
          </MenuListItem>
          <MenuListItem>
            <Link href='/' passHref>
              <MenuListLink
                isActive={pathname === '/oferta'}
                footerBgURL={footerBgURL}
              >
                Oferta
              </MenuListLink>
            </Link>
          </MenuListItem>
          <MenuListItem>
            <Link href='/' passHref>
              <MenuListLink
                isActive={pathname === '/kontakt'}
                footerBgURL={footerBgURL}
              >
                Kontakt
              </MenuListLink>
            </Link>
          </MenuListItem>
        </MenuList>
        <Copyright footerBgURL={footerBgURL}>
          <p tw='lg:(mt-8)'>Meanslate 2020. All rights reserved. From </p>
          <img
            src='/images/softwise.svg'
            width={100}
            alt='Softwise'
            tw='block lg:mt-8!'
          />
        </Copyright>
      </div>
      <ContactInfo as='div' footerBgURL={footerBgURL}>
        <p tw='mb-3'>WiselySoft Sp. z.o.o.</p>
        <p>KRS 0000821821</p>
        <p>NIP 7010962402</p>
        <p tw='mb-3'>REGON 385249400</p>
        <p>Hoża 86 / 410,</p>
        <p>00-682 Warszawa, Polska</p>
        <div tw='hidden lg:(flex mt-3 space-x-3)'>
          <img src='/images/icons/phone-call.svg' alt='Telefon' />
          <img src='/images/icons/email.svg' alt='Telefon' />
        </div>
      </ContactInfo>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer<{ footerBgURL?: string }>(
  ({ footerBgURL }) => [
    tw`mt-auto pt-24 lg:(grid grid-cols-12 w-full) relative`,
    footerBgURL && tw`bg-theme mt-44`,
  ]
);

const MenuList = tw.ul`flex py-8 px-4 flex-col items-center space-y-8 uppercase lg:(py-0 flex-row justify-between space-y-0 space-x-8) xl:(space-x-12)`;

const MenuListItem = tw.li`font-bold`;

const MenuListLink = styled.a<{ isActive?: boolean; footerBgURL?: string }>(
  ({ isActive, footerBgURL }) => [
    tw`text-lightGray transition-colors 2xl:tracking-widest`,
    isActive && tw`text-black`,
    !isActive && tw`hover:text-gray-400`,
    footerBgURL && tw`text-shadow-md`,
    footerBgURL && !isActive && tw`text-white`,
    footerBgURL &&
      isActive &&
      tw`bg-themeDarker px-5 py-1 rounded-full text-white`,
  ]
);

const Copyright = styled.div<{ footerBgURL?: string }>(({ footerBgURL }) => [
  tw`flex flex-col items-center space-y-4 p-4 text-lightGray pb-8 lg:(pb-0 flex-row justify-center space-x-4)`,
  footerBgURL && tw`text-white`,
]);

const ContactInfo = styled(Paragraph)<{ footerBgURL?: string }>`
  ${tw`text-gray-400 font-semibold mb-8 lg:(col-span-3 text-sm mb-3 leading-tight)`}
  ${({ footerBgURL }) => footerBgURL && tw`text-white`}
`;

const MeanslateLogo = styled.div<{ footerBgURL?: string }>(
  ({ footerBgURL }) => [
    tw`bg-theme py-20 flex items-center justify-center lg:(col-span-3 py-0)`,
    footerBgURL && tw`pb-5 pt-0`,
  ]
);

const SVGWave = tw.img`absolute block top-0 transform w-full -translate-y-full`;

export default Footer;
