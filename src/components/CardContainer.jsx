import React from 'react';
import styled from 'styled-components';

const CardContainerStyled = styled.div`
  padding: 4em 1em;
`;

const CardContainer = ({ children }) => (
  <CardContainerStyled>
    { children }
  </CardContainerStyled>
);

export default CardContainer;

