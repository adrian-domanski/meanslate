import React from 'react';
import {
  Paragraph,
  Section,
  SectionTitle,
  ThemeColor,
} from '../../styles/components';
import 'twin.macro';
import tw, { styled } from 'twin.macro';

const OurExpertsSection = () => {
  return (
    <div tw='relative'>
      <BackgroundImage src='/images/bg-2.png' alt='tło' tw='hidden lg:block' />
      <Section>
        <SectionTitle>
          <ThemeColor>Global reach</ThemeColor>.<br />
          Experts from all over the world.
        </SectionTitle>
        <Paragraph tw='lg:(max-w-2xl mb-12)'>
          We invest in human resources, technological innovation and{' '}
          <b>we care about development</b> to continue to meet the growing
          demand for language services <b>around the world</b>.
        </Paragraph>
        <Img
          src='/images/experts-around-world.svg'
          alt='experts from all over the world'
        />
        <LanguageList>
          <LanguageListItem>
            <Dot />
            English - 36%
          </LanguageListItem>
          <LanguageListItem>
            <Dot />
            Germany - 29%
          </LanguageListItem>
          <LanguageListItem>
            <Dot />
            French - 16%
          </LanguageListItem>
          <LanguageListItem>
            <Dot />
            Other - 19%
          </LanguageListItem>
          <LanguageListItem>
            <Dot tw='bg-themeDarker!' />
            Nederland - 2%
          </LanguageListItem>
          <LanguageListItem>
            <Dot tw='bg-themeDarker!' />
            Italian - 2%
          </LanguageListItem>
          <LanguageListItem>
            <Dot tw='bg-themeDarker!' />
            Russian - 3%
          </LanguageListItem>
          <LanguageListItem>
            <Dot tw='bg-themeDarker!' />
            Spanish - 19%
          </LanguageListItem>
        </LanguageList>
      </Section>
    </div>
  );
};

const Img = tw.img` mt-8`;

const LanguageList = tw.ul`mt-8 grid grid-cols-2 gap-4 lg:(grid-cols-4 mt-16)`;

const LanguageListItem = tw.li`flex items-center justify-center font-semibold tracking-widest text-gray-600`;

const Dot = tw.span`block w-2 h-2 rounded-full bg-theme mr-3`;

const BackgroundImage = styled.img`
  ${tw`block absolute`}
  top: -350px;
  min-height: 1600px;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

export default OurExpertsSection;
