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
  ${(props) => props.color && css`
    background-color: var(--${props.color})
  `}
`;

const Badge = ({ name, color }) => (
  <BadgeStyled color={color}>
    { name }
  </BadgeStyled>
);

export default Badge;
