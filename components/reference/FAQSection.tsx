import React from 'react';
import {
  Button,
  Section,
  SectionTitle,
  ThemeColor,
} from '../../styles/components';
import Faq from 'react-faq-component';
import { createGlobalStyle } from 'styled-components';
import tw, { styled } from 'twin.macro';

const FAQSection = () => {
  return (
    <div tw='relative'>
      <BackgroundImg src='/images/referencje/bg_2.png' alt='tło' />
      <Section>
        <GlobalStyles />
        <SectionTitle>
          FAQ<ThemeColor>.</ThemeColor>
        </SectionTitle>
        <Faq data={data} styles={styles} config={config} />
        <div tw='lg:(flex items-center justify-center space-x-8 text-base mt-24) my-12'>
          <SectionTitle tw='lg:(mb-0 text-4xl)'>Inne pytania?</SectionTitle>
          <Button darker tw='mx-auto lg:mx-0'>
            Skontaktuj się z nami
          </Button>
        </div>
      </Section>
    </div>
  );
};

const BackgroundImg = styled.img(() => [
  tw`absolute -top-80 w-full left-0 hidden lg:(block)`,
  `z-index: -1;`,
]);

const GlobalStyles = createGlobalStyle`
.faq-row-wrapper {
  background-color: transparent !important;
   .icon-wrapper {
		 left:0;
		 top: 20px !important;
	 }

   .faq-body {
     ${tw`lg:(grid grid-cols-2 gap-8)`};
   }

	 .faq-row {
		 border-bottom: 0 !important;
	 }

	 .row-content-text {
		 ${tw`leading-relaxed tracking-wider font-semibold`}
     padding-left: 54px !important;
	 }

	 .row-title-text {
		 padding-right: 0 !important;
		 padding-left: 3em;

		 ${tw`tracking-widest font-bold`}
	 }
}
`;

export default FAQSection;

const data = {
  title: '',
  rows: [
    {
      title: 'Jak zamówić tłumaczenie?',
      content: `Najlepiej skontaktować się z nami poprzez
								wypełnienie formularza na stronie internetowej
								- zgłoszenie można jednak wysyłać również
								za pośrednictwem maila.`,
    },
    {
      title: 'Czy wykonują Państwo tłumaczenie zdalne?',
      content: `Tak! Tłumaczymy dla osób prywatnych, firm
								i instytucji z całej Polski, a nasze tłumaczenia
								możemy przesyłać zdalnie, bez konieczności
								bezpośredniego spotkania.`,
    },
    {
      title:
        'Szukam biura tłumaczeń do stałej współpracy. Czy to jest u Państwa możliwe?',
      content: `Najlepiej skontaktować się z nami poprzez
								wypełnienie formularza na stronie internetowej
								- zgłoszenie można jednak wysyłać również
								za pośrednictwem maila.`,
    },
    {
      title:
        'Potrzebuje błyskawicznego tłumaczenia. Czy w ogóle się do Was zgłaszać?',
      content: `Tak! Tłumaczymy dla osób prywatnych, firm
								i instytucji z całej Polski, a nasze tłumaczenia
								możemy przesyłać zdalnie, bez konieczności
								bezpośredniego spotkania.`,
    },
    {
      title:
        'Chciałbym przetłumaczyć pismo urzędowe. Jaka jest cena tej usługi?',
      content: `Tak! Tłumaczymy dla osób prywatnych, firm
								i instytucji z całej Polski, a nasze tłumaczenia
								możemy przesyłać zdalnie, bez konieczności
								bezpośredniego spotkania.`,
    },
    {
      title:
        'Chciałbym przetłumaczyć moją stronę internetową na kilka języków. Czy mogą mi Państwo w tym pomóc?',
      content: `Najlepiej skontaktować się z nami poprzez
								wypełnienie formularza na stronie internetowej
								- zgłoszenie można jednak wysyłać również
								za pośrednictwem maila.`,
    },
    {
      title:
        'Potrzebuje tłumaczenia wrz z korektą - czy to jest u Państwa możliwe?',
      content: `Najlepiej skontaktować się z nami poprzez
								wypełnienie formularza na stronie internetowej
								- zgłoszenie można jednak wysyłać również
								za pośrednictwem maila.`,
    },
    {
      title: 'Czy oferują Państwo tłumaczenia przysięgłe/uwierzytelnione?',
      content: `Tak! Tłumaczymy dla osób prywatnych, firm
								i instytucji z całej Polski, a nasze tłumaczenia
								możemy przesyłać zdalnie, bez konieczności
								bezpośredniego spotkania.`,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: '#222629',
  rowTitleColor: '#222629',
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  arrowIcon: <img src='/images/referencje/faq-plus.png' alt='Otwórz' />,
  // tabFocus: true
};
