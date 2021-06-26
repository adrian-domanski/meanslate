import React from 'react';
import tw, { styled } from 'twin.macro';

interface ICardComponent {
  listItems: string[];
  icon: {
    src: string;
    alt: string;
  };
  type?: 'primary' | 'secondary';
  title: string;
}

const Card: React.FC<ICardComponent> = ({
  icon,
  listItems,
  type = 'primary',
  title,
}) => {
  return (
    <CardWrapper type={type}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody type={type}>
        <CardIcon src={icon.src} alt={icon.alt} />
        <CardList>
          {listItems.map((item, index) => (
            <CardListItem key={index}>{item}</CardListItem>
          ))}
        </CardList>
      </CardBody>
    </CardWrapper>
  );
};

const CardWrapper = styled.div(({ type }: { type?: string }) => [
  tw`mt-8 lg:(mt-0) z-10`,
  type === 'secondary' &&
    tw`transform scale-90 -mb-12 origin-top lg:(py-8 text-sm origin-right)`,
]);

const CardHeader = tw.div`bg-gray-500 text-white p-4 lg:(px-2 whitespace-nowrap)`;

const CardTitle = tw.h2`text-center font-bold text-lg tracking-widest`;

const CardIcon = tw.img`block w-14 mx-auto mb-8`;

const CardBody = styled.div(({ type }: { type?: string }) => [
  tw`bg-theme text-white p-5 items-center flex flex-col font-bold tracking-widest lg:(py-8)`,
  type === 'secondary' && tw`bg-themeDarker py-16 lg:(py-8)`,
]);

const CardList = tw.ul`text-center`;

const CardListItem = tw.li`mb-5`;

export default Card;
