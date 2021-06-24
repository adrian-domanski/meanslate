import React from 'react';
import tw from 'twin.macro';
import GlobalStyles from '../GlobalStyles';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
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
