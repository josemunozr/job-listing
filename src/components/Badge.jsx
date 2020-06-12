import React from 'react';
import styled, { css } from 'styled-components';

const BadgeStyled = styled.span`
  padding: 5px 10px;
  border-radius: 12px;
  color: white;
  font-size: .7rem;
  width: auto;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 5px;
  ${(props) => props.type === 'new' && css`
    background-color: var(--darkGrayingCyan);
  `}
  ${(props) => props.type === 'feature' && css`
    background-color: var(--VeryDarkGrayingCyan);
  `}
`;

const Badge = ({ type }) => (
  <BadgeStyled type={type}>
    { type }
  </BadgeStyled>
);

export default Badge;
