import React from 'react';
import styled, { css } from 'styled-components';
import iconRemove from '../assets/images/icon-remove.svg';

const TagStyled = styled.div`
  width: auto;
  height: 30px;
  background-color: var(--background);
  border-radius: 3px;
  color: var(--darkGrayingCyan);
  margin: 0 10px 10px 0;
  text-align: center;
  display: flex;
  align-items: center;
  ${(props) => !props.removeActive && css`
    &:hover {
      cursor: pointer;
      background-color: var(--darkCyan);
      color: white;
    }
  `}
  span {
    padding: .5em;
  }
`;

const IconRemoveStyled = styled.div`
  background-color: var(--darkCyan);
  height: 100%;
  line-height: 33px;
  width: 30px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: pointer;
`;

const Tag = ({ name, removeActive }) => (
  <TagStyled removeActive={removeActive}>
    <span>{name}</span>
    {removeActive && (
      <IconRemoveStyled>
        <img src={iconRemove} alt='remove' />
      </IconRemoveStyled>
    )}
  </TagStyled>
);

export default Tag;
