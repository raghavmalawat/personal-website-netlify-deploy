import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  ${tw`flex items-center mr-auto text-indigo-900 hover:text-indigo-900`};
`;

export const Text = styled.h1`
  ${tw`text-xl uppercase font-bold`};
`;

export const Image = styled.figure`
  ${tw`w-20 h-20 mr-3 border border-primary-400 rounded-full`};

  img {
    ${tw`border-4 border-white rounded-full`};
  }
`;
