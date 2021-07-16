import React, { useEffect } from 'react';
import tw from 'twin.macro';
import GlobalStyles from '../GlobalStyles';
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface ILayout {
  footerBgURL?: string;
  navTransparent?: boolean;
  title?: string;
}

const Layout: React.FC<ILayout> = ({
  children,
  footerBgURL,
  navTransparent,
  title,
}) => {
  // Add animation
  useEffect(() => {
    // Titles
    gsap.utils.toArray('.sectionTitle').forEach((title: HTMLElement) => {
      gsap.from(title, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        scrollTrigger: title,
      });
    });

    // Fade up
    gsap.utils.toArray('.fade-up').forEach((el: HTMLElement) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        delay: 0.5,
        scrollTrigger: el,
      });
    });

    // Stagger
    gsap.utils.toArray('.stagger').forEach((el: HTMLElement) => {
      gsap.from(el.children.length ? el.children : el, {
        opacity: 0,
        y: 50,
        stagger: 0.25,
        scrollTrigger: el,
      });
    });
  }, []);
  return (
    <>
      <Head>
        <title>
          {title
            ? `Meanslate - ${title}`
            : 'Meanslate - Profesjonalne tłumaczenia'}
        </title>
        <link rel='shortcut icon' href='favicon.png' type='image/x-icon' />
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
