import React from 'react';
import tw from 'twin.macro';
import { Paragraph } from '../../styles/components';

interface IOpinionItem {
  avatar: string;
  name: string;
  job: string;
  stars: number;
  description: string;
}

const OpinionItem: React.FC<IOpinionItem> = ({
  avatar,
  name,
  job,
  description,
  stars,
}) => {
  return (
    <OpinionBox>
      <OpinionImg src={avatar} alt={name} />
      <OpinionContentWrapper>
        <OpinionInfo>
          <PersonNameAndRating>
            <Name>{name}</Name>
            <Rating
              src={
                stars === 5
                  ? '/images/referencje/5-stars.png'
                  : '/images/referencje/4-stars.png'
              }
            />
          </PersonNameAndRating>
          <PersonJob>{job}</PersonJob>
        </OpinionInfo>
        <Description>{description}</Description>
      </OpinionContentWrapper>
    </OpinionBox>
  );
};

const OpinionBox = tw.div`flex`;
const OpinionImg = tw.img`block w-16 h-16`;
const OpinionContentWrapper = tw.div`pl-4`;
const OpinionInfo = tw.div`flex flex-col`;
const Name = tw.div`font-bold text-black`;
const PersonNameAndRating = tw.div`flex justify-between items-center`;
const PersonJob = tw.div`-mt-1 text-black font-semibold`;
const Rating = tw.img`block h-full`;
const Description = tw(Paragraph)`text-left leading-snug mt-3`;

export default OpinionItem;
