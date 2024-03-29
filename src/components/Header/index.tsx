import React from 'react';

import MainNav from './MainNav';
import Logo from './Logo';

import * as Styled from './styles';
import DarkMode from 'components/ui/DarkMode';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <Styled.Header>
    <Styled.Wrapper>
      <Logo />
      {/* <DarkMode /> */}
      <MainNav />
    </Styled.Wrapper>
  </Styled.Header>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
