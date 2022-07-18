import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  companyLink: string;
  subtitle: string;
  content: React.ReactNode;
  startDate: string;
  endDate: string;
}

const Timeline: React.FC<Props> = ({ title, companyLink, subtitle, content, startDate, endDate }) => (
  <Styled.Timeline>
    <Styled.Point />
    <Styled.Details>
      <Styled.Date>{startDate} - {endDate}</Styled.Date>
      <a href={companyLink} rel="noreferrer noopener" target="_blank">
        <Styled.Title>{title}</Styled.Title>
      </a>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Details>
    <Styled.Content>{content}</Styled.Content>
  </Styled.Timeline>
);

export default Timeline;
