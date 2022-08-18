import React, { useState } from 'react';

import * as Styled from './styles';
import "@fontsource/raleway"

interface MainNavItem {
  title: string;
  slug: string;
}

const mainNavItems: MainNavItem[] = [
  {
    title: 'My Story',
    slug: '/journey'
  },
  {
    title: 'Work',
    slug: '/experiences'
  },
  {
    title: 'Projects',
    slug: '/projects'
  },
  {
    title: 'Blog',
    slug: '/blog'
  },
  {
    title: 'Contact',
    slug: '/contact'
  }
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Styled.MainNav open={open}>
        {mainNavItems.map((item, index) => (
          <Styled.MainNavItem
            key={`nav-item-${index}`}
            to={item.slug}
            activeClassName="active"
            whileTap={{ scale: 0.9 }}
          >
            {item.title}
          </Styled.MainNavItem>
        ))}
        <Styled.Linkk href={"https://drive.google.com/file/d/14y_0gDuvDSgUAt49T2Yj5y0MYdAp8ewM/view?usp=sharing"} target="_blank" rel="noreferrer">
          Resume
        </Styled.Linkk>
      </Styled.MainNav>
      <Styled.ToogleMainNav open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Styled.ToogleMainNav>
    </>
  );
};

export default MainNav;
