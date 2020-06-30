import React, { useState } from 'react';
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
  position: relative;
`;

const ClearStyled = styled.p`
  margin: 0;
  color: var(--darkGrayingCyan);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ListTagsContainer = styled.div`
  background-color: white;
  box-shadow: 5px 9px 20px -10px #63babb;
  border-top: 1px solid #63babb;
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  padding: 1em;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
`;

const Filter = ({ tagList }) => {
  const listTagsToFilter = tagList.slice();
  const [filteredTags, setFilteredTags] = useState([]);

  function handleAddTagToFilter(tag) {
    setFilteredTags((filteredTags) => [...filteredTags, tag]);
  }

  return (
    <FilterStyled>
      <div>
        {
          filteredTags && filteredTags.map((tag) => (
            <Tag
              tag={tag}
              key={tag.code}
              removeActive
            />
          ))
        }
      </div>
      <div>
        <ClearStyled onClick={() => setFilteredTags([])}>
          Clear
        </ClearStyled>
      </div>
      <ListTagsContainer>
        {
          listTagsToFilter && listTagsToFilter.map((tag) => (
            <Tag
              tag={tag}
              key={tag.code}
              handleClick={handleAddTagToFilter}
            />
          ))
        }
      </ListTagsContainer>
    </FilterStyled>
  );
};

export default Filter;
