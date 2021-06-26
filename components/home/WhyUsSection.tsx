import React from 'react';
import {
  Paragraph,
  Section,
  SectionTitle,
  ThemeColor,
} from '../../styles/components';
import 'twin.macro';
import WhyUsItem from './WhyUsItem';
import tw, { styled } from 'twin.macro';

const WhyUsSection = () => {
  return (
    <div tw='relative'>
      <Elipse src='/images/elipsa.svg' alt='elipsa' tw='hidden 3xl:block' />
      <Section>
        <SectionTitle>
          Dlaczego <ThemeColor>warto?</ThemeColor>
          <br />
          <ThemeColor>Poznaj</ThemeColor> nas!
        </SectionTitle>
        <Paragraph tw='mb-12'>
          Jesteśmy zgranym zespołem specjalistów z dużym doświadczeniem, którzy
          zebrali się pod jednym sztandarem, aby zaoferować nową jakość
          tłumaczeń online.
        </Paragraph>

        {/* Why us list */}
        <WhyUsListWrapper>
          <WhyUsItem
            icon={{ src: '/images/icons/happy.svg', alt: 'Uśmiech' }}
            title='Świetny kontakt'
            description='Nie chowamy się za umowami, nie chowamy za kruczkami, odbieramy telefony i łatwo się z nami porozumieć.
Jesteśmy nowoczesnym biurem tłumaczeń, a w tej nowoczesności kryje się przede wszystkim bezproblemowy
kontakt i świetne relacje w każdej współpracy. Sprawdź i przekonaj się, że mówimy prawdę!'
            isSecondary
          />

          <WhyUsItem
            icon={{ src: '/images/icons/quality.svg', alt: 'Uśmiech' }}
            title='Tłumaczenia, które nie dają plamy'
            description='O jakość nie musisz się martwić. Gwarantujemy, że wszystkie tłumaczenia przygotowane przez nas są starannie,
a otrzymane tłumaczenie oddaje charakter i styl tekstu, który został nam przekazany. Powierzając to zadanie
specjalistom, nie musisz niczego się obawiać. I o to właśnie chodzi!
'
          />

          <WhyUsItem
            icon={{ src: '/images/icons/police-folder.svg', alt: 'Uśmiech' }}
            title='Poufność'
            description='Gwarancja poufności danych to podstawa, zwłaszcza w przypadku tłumaczeń branżowych. Nasze biuro podpisuje
umowę o bezpieczeństwo i poufność wszystkich powierzonych nam informacji. Możesz powierzyć nam tłumaczenie
każdego dokumentu, a my będziemy chronić Twoją prywatność.'
          />

          <WhyUsItem
            icon={{ src: '/images/icons/translation.svg', alt: 'Uśmiech' }}
            title='Tłumaczenia branżowe i specjalistyczne'
            description='Tłumaczymy nie tylko dokumenty, oferujemy nie tylko tłumaczenie przysięgłe - codziennie współpracujemy
z firmami i korporacjami, oferując im wszechstronne tłumaczenia, nie tylko dokumentów firmowych, ale i całych
systemów czy aplikacji. Po prostu daj nam to zadanie.'
          />

          <WhyUsItem
            icon={{ src: '/images/icons/express.svg', alt: 'Uśmiech' }}
            title='Działamy w trybie ekspres'
            description='Tłumaczenia na wczoraj? Nie ma problemu. Wiemy, jak cenny jest czas i możemy zaoferować tłumaczenia bardzo
ekspresowe - w zależności od wielkości dostarczonego materiału możemy wykonać usługę tłumaczenia nawet
w ciągu 1 dnia roboczego. W ofercie są również tłumaczenia weekendowe. Sprawdź, jakie są możliwości.
'
          />

          <WhyUsItem
            icon={{ src: '/images/icons/long-term.svg', alt: 'Uśmiech' }}
            title='Stała wspólpraca'
            description='Dla stałych klientów mamy indywidualną ofertę, stałe rabaty i szybsze realizacje - zdecydowanie potrafimy docenić
długotrwałą współpracę. Jeśli potrzebujesz regularnych tłumaczeń i chcesz związać się ze sprawdzona firmą
na dłużej - zapraszamy. Mamy ofertę dopasowaną do Twojego biznesu.'
          />
        </WhyUsListWrapper>
      </Section>
    </div>
  );
};

const WhyUsListWrapper = tw.div`space-y-16`;

const Elipse = styled.img`
  ${tw`block absolute`}
  bottom: 50px;
  z-index: -1;
`;

export default WhyUsSection;
