import React from 'react';
import styled, { css } from 'styled-components';
import iconRemove from '../assets/images/icon-remove.svg';

const TagStyled = styled.div`
  width: auto;
  height: 30px;
  ${(props) => props.filtered && css`
    background-color: var(--darkCyan);
    color: white;
  `}
  ${(props) => (!props.filtered || props.removeActive) && css`
    background-color: var(--background);
    color: var(--darkCyan);
  `}
  border-radius: 3px;
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

const Tag = ({ tag, removeActive, handleAddTag, handleRemoveTag }) => (
  <TagStyled removeActive={removeActive} filtered={tag.filtered} onClick={() => handleAddTag && handleAddTag(tag)}>
    <span>{tag.name}</span>
    {removeActive && (
      <IconRemoveStyled onClick={() => handleRemoveTag && handleRemoveTag(tag)}>
        <img src={iconRemove} alt='remove' />
      </IconRemoveStyled>
    )}
  </TagStyled>
);

export default Tag;
