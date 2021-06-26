import React from 'react';
import tw, { styled } from 'twin.macro';
import ScrollDownIcon from './ScrollDownIcon';

interface IPageHeader {
  title?: string;
  subtitle?: string;
  img?: {
    src: string;
    alt: string;
  };
  annotation?: string;
}

const PageHeader: React.FC<IPageHeader> = ({
  title,
  subtitle,
  img,
  annotation,
}) => {
  return (
    <Header>
      <ContentWrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Annotation>{annotation}</Annotation>
        {img && <BackgroundImage src={img.src} alt={img.alt} />}
        <ScrollDownIcon to='#start' />
      </ContentWrapper>
    </Header>
  );
};

const Header = styled.div`
  background: url('/images/header_bg.svg');
  background-size: cover;
  background-position: center bottom;
  ${tw`text-center`}

  @media screen and (min-width: 1024px) {
    min-height: 500px !important;
  }
`;

const Title = tw.h1`text-white font-bold text-4xl lg:text-6xl mb-1 tracking-wide z-20`;

const SubTitle = tw.h2`text-black font-bold text-xl z-20 lg:text-3xl`;

const BackgroundImage = tw.img`block h-3/4 absolute z-10 left-1/2 transform -translate-x-1/2`;

const Annotation = tw.p`text-white absolute bottom-20 right-20 lg:(bottom-24 text-lg right-4) tracking-widest font-bold`;

const ContentWrapper = styled.div`
  ${tw`z-10 max-w-5xl relative justify-center pb-44 pt-12 px-4 flex items-center flex-col w-full mx-auto`}

  @media screen and (min-width: 1024px) {
    min-height: 500px !important;
  }
`;

export default PageHeader;
