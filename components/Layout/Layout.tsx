import React from 'react';
import tw from 'twin.macro';
import GlobalStyles from '../GlobalStyles';
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';

interface ILayout {
  footerBgURL?: string;
  navTransparent?: boolean;
}

const Layout: React.FC<ILayout> = ({
  children,
  footerBgURL,
  navTransparent,
}) => {
  return (
    <>
      <Head>
        <title>Meanslate - Profesjonalne tłumaczenia</title>
      </Head>
      <GlobalStyles />
      <PageWrapper>
        <Navbar navTransparent={navTransparent} />
        {children}
        <Footer footerBgURL={footerBgURL} />
      </PageWrapper>
    </>
  );
};

const PageWrapper = tw.div`flex flex-col h-full`;

export default Layout;
