import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';
import { Button } from '../../styles/components';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <Nav>
      <ContentWrapper>
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
              <MenuListLink isActive={pathname === '/'}>
                Strona główna
              </MenuListLink>
            </Link>
          </MenuListItem>
          <MenuListItem>
            <Link href='/referencje' passHref>
              <MenuListLink isActive={pathname === '/referencje'}>
                Referencje
              </MenuListLink>
            </Link>
          </MenuListItem>
          <MenuListItem>
            <Link href='/oferta' passHref>
              <MenuListLink isActive={pathname === '/oferta'}>
                Oferta
              </MenuListLink>
            </Link>
          </MenuListItem>
          <MenuListItem>
            <Link href='/kontakt' passHref>
              <MenuListLink isActive={pathname === '/kontakt'}>
                Kontakt
              </MenuListLink>
            </Link>
          </MenuListItem>
        </MenuList>
        <RightBlock>
          <MyTranslations>
            <Link href='/' passHref>
              <TranslationsLink>
                <span>Moje tłumaczenia</span>
                <UserIcon src='/images/icons/user.svg' alt='Użytkownik' />
              </TranslationsLink>
            </Link>
          </MyTranslations>
          <Button as='button' darker tw='mt-4 w-full text-sm'>
            Zamów / Zaloguj
          </Button>
        </RightBlock>
      </ContentWrapper>
    </Nav>
  );
};

const Nav = styled.nav`
  ${tw`bg-transparent h-40`}
`;

const Logo = tw.img`w-44 lg:(w-60)`;

const Hamburger = tw.button`w-9 p-1 lg:(hidden)`;

const MenuList = styled.ul(({ isMobileOpen }: { isMobileOpen: boolean }) => [
  tw`transform scale-y-0 origin-top transition-transform duration-300 absolute top-full bg-themeDarker font-bold uppercase tracking-widest left-0 w-full text-white lg:(scale-y-100 flex justify-center bg-transparent static)`,
  isMobileOpen && tw`scale-y-100`,
]);

const MenuListItem = tw.li`border-b border-themeDarkest lg:(border-0)`;

const MenuListLink = styled.a<{ isActive?: boolean }>(({ isActive }) => [
  tw`p-4 block text-center text-shadow-sm transition-colors lg:(py-2)`,
  isActive && tw`bg-themeDarker rounded-full`,
  !isActive && tw`hover:(text-gray-100)`,
]);

const ContentWrapper = tw.div`px-5 py-4 flex items-center z-50 justify-between relative max-w-screen-2xl mx-auto`;

const RightBlock = tw.div`hidden lg:block`;

const MyTranslations = tw.div`mt-4 font-bold text-sm uppercase tracking-widest text-shadow-sm`;

const TranslationsLink = tw.a`text-white flex whitespace-nowrap mr-10 items-center hover:(text-gray-100) transition-colors`;

const UserIcon = tw.img`ml-3 w-8 block`;

export default Navbar;
