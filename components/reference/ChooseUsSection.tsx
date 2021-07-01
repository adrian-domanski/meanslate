import React from 'react';
import {
  Paragraph,
  Section,
  SectionTitle,
  ThemeColor,
} from '../../styles/components';
import tw, { styled } from 'twin.macro';

const ChooseUsSection = () => {
  return (
    <div tw='relative' id='start'>
      <BackgroundImg src='/images/referencje/bg_1.png' alt='tło' />
      <Section tw='mt-12 lg:(mt-44)'>
        <SectionTitle>
          Wybierz biuro tłumaczeń godne <ThemeColor>zaufania.</ThemeColor>
        </SectionTitle>
        <Paragraph tw='max-w-5xl' className='fade-up'>
          Nie musisz nam wierzyć na słowo: sprawdź nasze referencje, sprawdź
          opinie o naszej pracy i sam zdecyduj, czy współpraca z nami będzie
          dobrym wyborem. Z jakimi branżami współpracujemy?
        </Paragraph>
        <BoxGrid className='stagger'>
          <BoxGridItem>
            <BoxGridItemText>Osoby prywatne</BoxGridItemText>
          </BoxGridItem>
          <BoxGridItem>
            <BoxGridItemText>Branża</BoxGridItemText>
          </BoxGridItem>
          <BoxGridItem darker>
            <BoxGridItemText>Budownictwo</BoxGridItemText>
          </BoxGridItem>
          <BoxGridItem darker>
            <BoxGridItemText>E-commerce</BoxGridItemText>
          </BoxGridItem>

          <BoxGridItem>
            <BoxGridItemText>Małe firmy</BoxGridItemText>
          </BoxGridItem>
          <BoxGridItem>
            <BoxGridItemText>Turystyka i rekreacja</BoxGridItemText>
          </BoxGridItem>
          <BoxGridItem darker>
            <BoxGridItemText>Branża FMCG</BoxGridItemText>
          </BoxGridItem>
          <BoxGridItem darker>
            <BoxGridItemText>Bankowość</BoxGridItemText>
          </BoxGridItem>
        </BoxGrid>
      </Section>
    </div>
  );
};

const BoxGrid = tw.div`grid-cols-2 grid gap-2 mt-8 lg:(grid-cols-4 pl-12 relative) max-w-6xl mx-auto`;

const BoxGridItem = styled.div<{ darker?: boolean }>(({ darker }) => [
  tw`bg-theme p-8 flex items-center justify-center text-center text-white font-semibold tracking-widest lg:(h-48)`,
  darker && tw`bg-themeDarker`,
]);

const BoxGridItemText = tw.div`z-10`;

const BackgroundImg = styled.img(() => [
  tw`hidden lg:(block absolute -top-64 w-full)`,
  `
  z-index: -20;
`,
]);

export default ChooseUsSection;
