import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://twitter.com/raghavmalawat/" rel="noreferrer noopener" target="_blank">
          Twitter
        </Styled.Link>
        <Styled.Link
          href="https://github.com/raghavmalawat/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Github
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/raghavmalawat/"
          rel="noreferrer noopener"
          target="_blank"
        >
          LinkedIn
        </Styled.Link>
        <Styled.Link
          href="https://www.goodreads.com/review/list/92765639-raghav-malawat/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Goodreads
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
