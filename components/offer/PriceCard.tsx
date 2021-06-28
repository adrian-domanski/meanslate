import React from 'react';
import tw, { styled, TwStyle } from 'twin.macro';
import { Button, Paragraph } from '../../styles/components';

interface IPriceCard {
  title: string;
  description: JSX.Element;
  price: number;
  darker?: boolean;
  customStyles?: TwStyle[];
}

const PriceCard: React.FC<IPriceCard> = ({
  title,
  description,
  price,
  darker,
  customStyles,
}) => {
  return (
    <PriceCardWrapper css={customStyles}>
      <ContentWrapper>
        <CornerSVG
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='79px'
          height='62px'
        >
          <path
            fillRule='evenodd'
            fill={darker ? 'rgb(244, 136, 45)' : '#f8b131'}
            d='M79.000,-0.001 L79.000,61.040 L0.742,-0.001 L79.000,-0.001 Z'
          />
        </CornerSVG>

        <PriceCardTitle>{title}</PriceCardTitle>
        <PriceWrapper>
          <StartsWith>od</StartsWith>
          <Currency darker={darker}>$</Currency>
          <Price darker={darker}>{price}</Price>
        </PriceWrapper>
      </ContentWrapper>
      <Line />
      <ContentWrapper>
        <Description as='div'>{description}</Description>
        <GetStartedButton darker={darker}>Zaczynajmy</GetStartedButton>
        <Annotation>Bestseller</Annotation>
      </ContentWrapper>
    </PriceCardWrapper>
  );
};

const PriceCardWrapper = styled.div<{ darker?: boolean }>(({ darker }) => [
  tw`flex flex-col items-center shadow-custom transform py-12 text-center relative bg-white`,
]);
const PriceCardTitle = tw.h2`text-4xl font-bold tracking-wide`;
const PriceWrapper = tw.div`flex space-x-2 mt-4 items-center justify-center text-2xl font-bold`;
const StartsWith = tw.p`text-gray-300`;
const Currency = styled.span<{ darker?: boolean }>(({ darker }) => [
  tw`font-bold text-theme`,
  darker && tw`text-themeDarker`,
]);
const Price = styled.span<{ darker?: boolean }>(({ darker }) => [
  tw`font-bold text-5xl text-theme`,
  darker && tw`text-themeDarker`,
]);
const Line = tw.hr`h-1 bg-gray-200 w-full my-8`;
const Description = tw(Paragraph)`font-semibold text-center`;
const Annotation = tw.p`uppercase font-bold tracking-widest text-gray-800`;
const GetStartedButton = tw(Button)`w-full mt-8 mb-4 tracking-huge`;
const ContentWrapper = tw.div`px-8`;
const CornerSVG = tw.svg`absolute top-0 right-0`;

export default PriceCard;
