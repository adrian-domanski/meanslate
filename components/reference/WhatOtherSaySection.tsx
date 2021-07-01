import React from 'react';
import tw, { styled } from 'twin.macro';
import {
  Button,
  Paragraph,
  Section,
  SectionTitle,
  ThemeColor,
} from '../../styles/components';
import OpinionItem from './OpinionItem';

const WhatOtherSaySection = () => {
  return (
    <div tw='relative'>
      <Elipse src='/images/referencje/elipse_1.png' alt='tło' />
      <Section>
        <SectionTitle>
          Co o nas <ThemeColor>mówią?</ThemeColor>
          <br />
          Poznaj nasze referencje<ThemeColor>.</ThemeColor>
        </SectionTitle>
        <Paragraph tw='max-w-4xl' className='fade-up'>
          Za nami współpraca z setkami przedsiębiorstw różnej wielkości i z
          różnych sektorów. Tłumaczymy również dla osób prywatnych. Sprawdź, jak
          oceniana jest nasza usługa!
        </Paragraph>
        <OpinionGrid className='stagger'>
          <OpinionItem
            avatar='/images/referencje/placeholder.png'
            stars={5}
            job='Traveler'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus officiis, libero maiores consequatur veritatis explicabo?'
            name={'Matt Poppins'}
          />
          <OpinionItem
            avatar='/images/referencje/placeholder.png'
            stars={5}
            job='Traveler'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus officiis, libero maiores consequatur veritatis explicabo?'
            name={'Matt Poppins'}
          />
          <OpinionItem
            avatar='/images/referencje/men.png'
            stars={4}
            job='Traveler'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus officiis, libero maiores consequatur veritatis explicabo?'
            name={'Matt Poppins'}
          />
          <OpinionItem
            avatar='/images/referencje/men.png'
            stars={4}
            job='Traveler'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus officiis, libero maiores consequatur veritatis explicabo?'
            name={'Matt Poppins'}
          />
          <OpinionItem
            avatar='/images/referencje/women.png'
            stars={5}
            job='Traveler'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus officiis, libero maiores consequatur veritatis explicabo?'
            name={'Matt Poppins'}
          />
          <OpinionItem
            avatar='/images/referencje/women.png'
            stars={5}
            job='Traveler'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus officiis, libero maiores consequatur veritatis explicabo?'
            name={'Matt Poppins'}
          />
        </OpinionGrid>
        <Button href='/' tw='mt-8 mx-auto lg:(mt-16 mr-0)'>
          MORE OPINIONS
        </Button>
      </Section>
    </div>
  );
};

const OpinionGrid = tw.div`mt-10 grid gap-8 lg:(grid-cols-2 max-w-5xl mx-auto gap-x-16 mt-24)`;

const Elipse = styled.img(() => [
  tw`absolute -bottom-44 left-0 hidden 2xl:(block)`,
]);

export default WhatOtherSaySection;
