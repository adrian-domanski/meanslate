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
  bgImg: string;
}

const PageHeader: React.FC<IPageHeader> = ({
  title,
  subtitle,
  img,
  annotation,
  bgImg,
}) => {
  return (
    <Header bgImg={bgImg}>
      <BackgroundImg src={bgImg} alt='tło' />
      <ContentWrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Annotation>{annotation}</Annotation>
        {img && <AdditionalImg src={img.src} alt={img.alt} />}
      </ContentWrapper>
      <ScrollDownIcon to='#start' />
    </Header>
  );
};

const Header = styled.div<{ bgImg: string }>(({ bgImg }) => [
  `
  min-height: 400px;

    @media screen and (min-width: 1024px) {
      min-height: 600px;
    }
`,
  tw`text-center relative -mt-40`,
]);

const BackgroundImg = styled.img(() => [
  `
    min-height: 400px;
    z-index: -1;

    @media screen and (min-width: 1024px) {
      min-height: 600px;
    }
  `,
  tw`relative object-cover w-full block`,
]);

const Title = tw.h1`text-white font-bold text-4xl lg:(text-7xl) mt-64 mb-1 2xl:(mt-0) tracking-wide z-20`;

const SubTitle = tw.h2`text-black font-bold text-xl z-20 lg:text-4xl`;

const AdditionalImg = tw.img`block h-1/2 absolute top-1/2 mt-20 -translate-y-1/2 xl:(h-3/4) z-10 left-1/2 transform -translate-x-1/2`;

const Annotation = tw.p`text-white absolute bottom-20 z-20 right-20 lg:(bottom-10 text-lg right-4) xl:(bottom-0) tracking-widest font-bold`;

const ContentWrapper = styled.div`
  ${tw`z-10 max-w-5xl justify-center pt-36 pb-52 px-4 flex items-center flex-col w-full mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3`}

  @media screen and (min-width: 1024px) {
    min-height: 500px !important;
  }
`;

export default PageHeader;
