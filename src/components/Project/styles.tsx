import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Projects = styled.div`
  ${tw`w-full flex flex-wrap`};
`;

export const Project = styled.div`
  ${tw`w-full p-2`};
`;

export const ProjectContainer = styled.div`
  ${tw`w-full h-full rounded-lg flex flex-col sm:flex-row overflow-hidden border border-gray-300`};
  min-height: 450px;
`;

export const Content = styled.div`
  ${tw`flex flex-col justify-between p-6 text-indigo-900`};
`;

export const Image = styled.figure`
  ${tw`w-full py-4 px-8 m-auto`};
`;

export const Title = styled.h1`
  ${tw`text-xl font-bold mb-4`};
`;

export const SubTitle = styled.h1`
  ${tw`text-lg text-sm mb-4 italic text-gray-600`};
`;

export const Description = styled.p``;

export const Tags = styled.div`
  ${tw`pt-2 flex flex-wrap`}
`;

export const Tag = styled.span`
  ${tw`text-xs uppercase italic text-teal-500 font-semibold bg-gray-100 border rounded-md px-2 py-1 mr-2 mb-2`}
`;
