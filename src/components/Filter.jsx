import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

const FilterStyled = styled.div`
  background-color: white;
  box-shadow: 5px 9px 20px -10px #63babb;
  min-height: 60px;
  border-radius: 5px;
  padding: 1em;
  margin: 0 1em;
  position: relative;
  top: -30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ClearStyled = styled.p`
  margin: 0;
  color: var(--darkGrayingCyan);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Filter = () => {
  return (
    <FilterStyled>
      <div>
        <Tag name='Frontend' removeActive />
      </div>
      <div>
        <ClearStyled>
          Clear
        </ClearStyled>
      </div>
    </FilterStyled>
  );
};

export default Filter;
