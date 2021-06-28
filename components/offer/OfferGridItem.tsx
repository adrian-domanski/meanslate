import React from 'react';
import tw, { styled } from 'twin.macro';
import { Paragraph } from '../../styles/components';

interface IOfferGridItem {
  darker?: boolean;
  title: string;
  description: JSX.Element;
  img: {
    src: string;
  };
}

const OfferGridItem: React.FC<IOfferGridItem> = ({
  description,
  img,
  title,
  darker,
}) => {
  return (
    <OfferGridItemWrapper darker={darker}>
      <Icon src={img.src} alt={title} />
      <ContentWrapper>
        <Title css={[darker && tw`text-white`]}>{title}</Title>
        <Description as='div' css={[darker && tw`text-white`]}>
          {description}
        </Description>
      </ContentWrapper>
    </OfferGridItemWrapper>
  );
};

const OfferGridItemWrapper = styled.div<{ darker?: boolean }>(({ darker }) => [
  tw`flex flex-col items-center shadow-custom py-8 px-5 rounded-lg bg-white xl:(flex-row items-start px-8)`,
  darker && tw`bg-themeDarker`,
]);
const Icon = tw.img` block object-cover xl:(self-start mt-4)`;
const ContentWrapper = tw.div`pl-4 xl:(pl-6)`;
const Title = tw.h2`text-xl text-center font-bold text-black my-4 xl:(text-left)`;
const Description = tw(Paragraph)`lg:(text-left)`;

export default OfferGridItem;
