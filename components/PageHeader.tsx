import React from 'react';
import tw, { styled } from 'twin.macro';

interface IPageHeader {
  title?: string;
  subtitle?: string;
  img?: {
    src: string;
    alt: string;
  };
  annotation?: string;
}

const PageHeader = ({ title, subtitle, img, annotation }) => {
  return (
    <Header>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      {img && <BackgroundImage src={img.src} alt={img.alt} />}
      <Annotation>{annotation}</Annotation>
    </Header>
  );
};

const Header = styled.header`
  background: url('/images/header_bg.svg');
  background-size: cover 100%;
  background-position: center bottom;
  ${tw`text-center flex flex-col justify-center pb-44 pt-12 px-4 relative`}
`;

const Title = tw.h1`text-white font-bold text-4xl mb-1 tracking-wide z-20`;

const SubTitle = tw.h2`text-black font-bold text-xl z-20`;

const BackgroundImage = tw.img`block absolute z-10 left-1/2 transform -translate-x-1/2`;

const Annotation = tw.p`text-white absolute bottom-20 right-6 tracking-widest font-bold`;

export default PageHeader;
