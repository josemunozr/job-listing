import React from 'react';
import styled from 'styled-components';

const TagStyled = styled.span`
  width: auto;
  height: 30px;
  background-color: var(--background);
  padding: .5em;
  border-radius: 3px;
  color: var(--darkGrayingCyan);
  margin: 0 10px 10px 0;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: var(--darkCyan);
    color: white;
  }
`;

const Tag = ({ name }) => (
  <TagStyled>
    {name}
  </TagStyled>
);

export default Tag;
