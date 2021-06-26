import React from 'react';
import tw from 'twin.macro';
import GlobalStyles from '../GlobalStyles';
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Meanslate - Profesjonalne tłumaczenia</title>
      </Head>
      <GlobalStyles />
      <PageWrapper>
        <Navbar />
        {children}
        <Footer />
      </PageWrapper>
    </>
  );
};

const PageWrapper = tw.div`flex flex-col h-full`;

export default Layout;
