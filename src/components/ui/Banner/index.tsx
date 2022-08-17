import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, content, linkTo, linkText }) => (
  <Styled.Banner>
    <Container section>
      <div>
        <TitleSection title={title} subtitle={subtitle} />
        <Styled.Content>{content}</Styled.Content>
        {/* <Styled.Content>{`Recently built`}<a href="http://staging.indibill.in" target="_blank"> <u>IndiBill Invoicing App</u></a></Styled.Content> */}
      </div>
      <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
    </Container>
  </Styled.Banner>
);

export default Banner;
