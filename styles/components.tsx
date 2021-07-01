import tw, { styled } from 'twin.macro';

export const SectionTitle = styled.h1.attrs({ className: 'sectionTitle' })`
  ${tw`text-black font-bold text-3xl text-center tracking-wide mb-5 lg:(text-left text-5xl)`}
`;

export const Section = tw.section`px-6 py-12 sm:px-8 max-w-3xl lg:(max-w-7xl my-36) w-full mx-auto`;

export const ThemeColor = tw.span`text-theme`;

export const Paragraph = tw.p`tracking-widest leading-normal text-textColor text-center lg:(text-left text-lg)`;

export const Button = styled.a<{ darker?: boolean }>(
  ({ darker: secondary }) => [
    tw`bg-theme cursor-pointer text-white px-4 py-3 uppercase tracking-widest font-bold table hover:bg-themeDarker transition-colors`,
    secondary && tw`bg-themeDarker hover:bg-themeDarkest`,
  ]
);
