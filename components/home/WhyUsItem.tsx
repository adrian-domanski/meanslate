import React from 'react';
import tw, { styled } from 'twin.macro';
import { Paragraph } from '../../styles/components';

interface IWhyUsItem {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  isSecondary?: boolean;
}

const WhyUsItem: React.FC<IWhyUsItem> = ({
  icon,
  title,
  description,
  isSecondary,
}) => {
  return (
    <WhyUsBox>
      <IconBox isSecondary={isSecondary}>
        <Icon src={icon.src} alt={icon.alt} />
      </IconBox>
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    </WhyUsBox>
  );
};

const WhyUsBox = tw.div`lg:(grid grid-cols-12)`;

const IconBox = styled.div(({ isSecondary }: { isSecondary?: boolean }) => [
  tw`bg-theme w-24 h-24 p-4 flex items-center justify-center mx-auto lg:(col-span-2 w-32 h-32 p-6 self-center)`,
  isSecondary && tw`bg-themeDarker`,
]);

const ContentWrapper = tw.div`lg:(col-span-10)`;

const Title = tw.h2`text-center my-4 font-semibold text-2xl tracking-wide lg:(text-left mt-0)`;

const Description = tw(Paragraph)``;

const Icon = tw.img`block lg:(w-52)`;

export default WhyUsItem;
