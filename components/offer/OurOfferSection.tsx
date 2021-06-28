import React from 'react';
import tw from 'twin.macro';
import {
  Paragraph,
  Section,
  SectionTitle,
  ThemeColor,
} from '../../styles/components';
import OfferGridItem from './OfferGridItem';

const OurOfferSection = () => {
  return (
    <Section>
      <SectionTitle tw='text-center'>
        Sprawdź,
        <br />
        <ThemeColor>jakie</ThemeColor> tłumaczenia wykonujemy
      </SectionTitle>
      <Paragraph tw='text-center'>
        Tłumaczymy szybko, sumiennie i w wielu językach
      </Paragraph>
      <OfferGrid>
        <OfferGridItem
          description={
            <>
              <p>
                Tłumaczenia ogólne, inaczej określane również jako zwykłe to
                takie, które nie wymagają poświadczenia tłumacza przysięgłego.
                Korespondencja firmowa, regulaminy, prace dyplomowe, raporty,
                wzory pism?
              </p>
              <p tw='mt-4'>Chętnie je dla Ciebie przetłumaczymy. Ekspresowo!</p>
            </>
          }
          img={{
            src: '/images/oferta/icons/medical-record.png',
          }}
          title='Tłumaczenie ogólne'
        />
        <OfferGridItem
          description={
            <>
              <p>
                Twoje tłumaczenie wymaga wiedzy technicznej? Nie ma problemu.
                Nasi specjaliści od lat wykonują tłumaczenia specjalistyczne z
                różnych dziedzin: instrukcje obsługi, specyfikacje produktowe
                czy różnego rodzaju dokumentacje dla firm i instytucji.
              </p>
            </>
          }
          img={{
            src: '/images/oferta/icons/medical-record-white.png',
          }}
          title='Tłumaczenia techniczne'
          darker
        />
        <OfferGridItem
          description={
            <>
              <p>
                Tłumaczenia uwierzytelnione to takie, do których wymagany jest
                tłumacz przysięgły, wpisany do rejestru tłumaczy przez
                Ministerstwo Sprawiedliwości.
              </p>
              <p tw='mt-4'>
                Potrzebujesz przetłumaczyć w ten sposób pismo urzędowe?
                Skontaktuj się z nami.
              </p>
            </>
          }
          img={{
            src: '/images/oferta/icons/contract.png',
          }}
          title='Tłumaczenie uwierzytelnione'
        />
        <OfferGridItem
          description={
            <>
              <p>
                W naszym biurze wykonujemy korektę językową i porównawczą w
                wielu językach. Jeśli potrzebujesz specjalistycznej oceny tekstu
                i wprowadzenia zmian - jesteśmy do dyspozycji.
              </p>
              <p tw='mt-4'>
                Korektę można zamówić zarówno z tłumaczeniem, jak i jako osobna
                usługa.
              </p>
            </>
          }
          img={{
            src: '/images/oferta/icons/contract.png',
          }}
          title='Korekta tekstu'
        />
        <OfferGridItem
          description={
            <>
              <p>
                Obok korekty tekstów, nasze biuro zajmuje się również
                copywritingiem. Dla naszych klientów tworzymy hasła reklamowe,
                treści na strony www oraz kreujemy nazwy produktów i marek.
              </p>
              <p tw='mt-4'>Zapraszamy do współpracy</p>
            </>
          }
          img={{
            src: '/images/oferta/icons/technical-support.png',
          }}
          title='Copywriting'
        />
        <OfferGridItem
          description={
            <>
              <p>
                Nie wiesz, czy Twoje zapytanie mieści się w naszej ofercie?
                Skontaktuj się z nami: mailowo, telefonicznie lub przez
                formularz na stronie głównej.
              </p>
              <p tw='mt-4'>
                Chętnie odpowiemy na wszystkie pytania i wątpliwości oraz
                doradzimy najlepsze rozwiązania.
              </p>
            </>
          }
          img={{
            src: '/images/oferta/icons/technical-support.png',
          }}
          title='Twoje tłumaczenia'
        />
      </OfferGrid>
    </Section>
  );
};

const OfferGrid = tw.div`grid gap-8 mt-12 lg:(grid-cols-2)`;

export default OurOfferSection;
