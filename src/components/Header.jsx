import React from 'react';
import styled from 'styled-components';
import bgHeaderMobile from '../assets/images/bg-header-mobile.svg';

const HeaderStyled = styled.header`
  width: 100%;
  height: 156px;
  background-image: url(${bgHeaderMobile});
`;

const Header = () => (
  <HeaderStyled />
);

export default Header;
