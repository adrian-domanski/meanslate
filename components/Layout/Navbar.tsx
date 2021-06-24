import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <Nav>
      <div>
        <Logo src='/images/logo.svg' alt='Meanslate' />
      </div>
      <Hamburger
        onClick={() => {
          setIsMobileOpen(!isMobileOpen);
        }}
      >
        <img src='/images/bars-solid.svg' alt='Otwórz menu' />
      </Hamburger>

      <MenuList isMobileOpen={isMobileOpen}>
        <MenuListItem>
          <Link href='/' passHref>
            <MenuListLink>Strona główna</MenuListLink>
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link href='/' passHref>
            <MenuListLink>Strona główna</MenuListLink>
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link href='/' passHref>
            <MenuListLink>Strona główna</MenuListLink>
          </Link>
        </MenuListItem>
      </MenuList>
    </Nav>
  );
};

const Nav = tw.nav`bg-theme px-5 py-4 flex items-center justify-between relative`;

const Logo = tw.img`w-44`;

const Hamburger = tw.button`w-9 p-1`;

const MenuList = styled.ul(({ isMobileOpen }: { isMobileOpen: boolean }) => [
  tw`transform scale-y-0 origin-top transition-transform duration-300 absolute top-full bg-themeDarker left-0 w-full text-white`,
  isMobileOpen && tw`scale-y-100`,
]);

const MenuListItem = tw.li`border-b border-themeDarkest`;

const MenuListLink = tw.a`p-4 block text-center`;

export default Navbar;
