import React from 'react';
import styled from 'styled-components';
import bgHeaderMobile from '../assets/images/bg-header-mobile.svg';
import bgHeaderDesktop from '../assets/images/bg-header-desktop.svg';

const HeaderStyled = styled.header`
  width: 100%;
  height: 156px;
  background-image: url(${bgHeaderMobile});
  @media (min-width: 426px) {
    background-image: url(${bgHeaderDesktop});
  }
`;

const Header = () => (
  <HeaderStyled />
);

export default Header;
