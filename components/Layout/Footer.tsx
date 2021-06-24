import Link from 'next/link';
import React from 'react';
import tw, { styled } from 'twin.macro';

const Footer = () => {
  return (
    <StyledFooter>
      <div tw='bg-theme py-20 flex items-center justify-center'>
        <img src='/images/logo.svg' alt='Manslate' />
      </div>
      <MenuList>
        <MenuListItem>
          <Link href='/' passHref>
            <MenuListLink isActive>Strona główna</MenuListLink>
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link href='/' passHref>
            <MenuListLink>Referencje</MenuListLink>
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link href='/' passHref>
            <MenuListLink>Oferta</MenuListLink>
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link href='/' passHref>
            <MenuListLink>Kontakt</MenuListLink>
          </Link>
        </MenuListItem>
      </MenuList>
      <Copyright>
        <p>Meanslate 2020. All rights reserved. From </p>
        <img src='/images/softwise.svg' width={100} alt='Softwise' />
      </Copyright>
    </StyledFooter>
  );
};

const StyledFooter = tw.footer`mt-auto `;

const MenuList = tw.ul`flex py-8 px-4 flex-col items-center space-y-8 uppercase`;

const MenuListItem = tw.li`font-bold`;

const MenuListLink = styled.a(({ isActive }: { isActive?: boolean }) => [
  tw`text-lightGray`,
  isActive && tw`text-black`,
]);

const Copyright = tw.div`flex flex-col items-center space-y-4 p-4 text-lightGray pb-8`;

export default Footer;
