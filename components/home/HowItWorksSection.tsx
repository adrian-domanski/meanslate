import React from 'react';
import { Section, SectionTitle, ThemeColor } from '../../styles/components';
import tw, { styled } from 'twin.macro';

const HowItWorksSection = () => {
  return (
    <div tw='relative'>
      <Elipse src='/images/elipse_2.svg' alt='Elipsa' tw='hidden lg:block' />
      <Section>
        <SectionTitle>
          <ThemeColor>How it works</ThemeColor>?<br />
          Short cheat sheet<ThemeColor>.</ThemeColor>
        </SectionTitle>

        <StepsWrapper className='stagger'>
          <StepWrapper>
            <Circle>1</Circle>
            <StepTitle>First step</StepTitle>
            <StepParagraph>Send a file with text</StepParagraph>
          </StepWrapper>

          <StepWrapper>
            <Circle>2</Circle>
            <StepTitle>Confirm order</StepTitle>
            <StepParagraph>
              Accept an offer, which you will get from Our office and make a
              payment.
            </StepParagraph>
          </StepWrapper>

          <StepWrapper>
            <Circle>3</Circle>
            <StepTitle>Translated text in yours mailbox</StepTitle>
            <StepParagraph>
              We send you finished translation as a file or like a lin to get
              your file.
            </StepParagraph>
          </StepWrapper>
        </StepsWrapper>
      </Section>
    </div>
  );
};

const StepWrapper = styled.div(() => [
  tw`pl-12 ml-10 border-l-2 pb-8 last:pb-0 last:border-0 relative`,
  `&:last-child {
		left: 1px;
	}`,
]);

const StepTitle = tw.h4`font-bold tracking-widest`;

const StepParagraph = tw.p`tracking-widest text-gray-500`;

const StepsWrapper = tw.div`mt-8`;

const Circle = tw.div`bg-theme left-0 text-2xl transform -translate-x-1/2 absolute w-10 h-10 flex items-center justify-center text-white font-semibold rounded-full`;

const Elipse = styled.img`
  ${tw`absolute right-0`}
  top: -120px;
  z-index: -1;
`;

export default HowItWorksSection;
