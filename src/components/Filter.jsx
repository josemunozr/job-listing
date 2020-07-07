import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tag from './Tag';

const FilterStyled = styled.div`
  background-color: white;
  box-shadow: 5px 9px 20px -10px #63babb;
  min-height: 60px;
  border-radius: 5px;
  margin: 0 1em;
  position: relative;
  top: -30px;
  display: flex;
  flex-direction: column;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  align-items: center;
  min-height: 60px;
`;

const ContainerFilteredTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ClearStyled = styled.p`
  margin: 0;
  color: var(--darkGrayingCyan);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CloseStyled = styled.p`
  margin: 0;
  color: var(--darkGrayingCyan);
  cursor: pointer;
  position: absolute;
  bottom: 1em;
  right: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

const ListTagsContainer = styled.div`
  background-color: white;
  box-shadow: 5px 9px 20px -10px #63babb;
  border-top: 1px solid #63babb;
  width: 100%;
  padding: 1em;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const PlaceHolderStyled = styled.p`
  margin: 0;
  color: var(--darkGrayingCyan);
  opacity: .7;
`;

const Filter = ({ tagList, handleChangeFilter }) => {
  const [listTagsToFilter, setListTagsToFilter] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  const [showlistTagsToFilter, setShowListTagsToFilter] = useState(false);

  useEffect(() => {
    setListTagsToFilter([...tagList]);
  }, []);

  useEffect(() => {
    handleChangeFilter(filteredTags.map((tag) => tag.code));
  }, [filteredTags]);

  function handleAddTagToFilter(tag) {
    //add tag to list filtered
    setFilteredTags((filteredTags) => [...filteredTags, tag]);
    //remove tag of list to filtered
    const currentListTagstoFilter = [...listTagsToFilter];
    const indexTags = currentListTagstoFilter.findIndex((item) => item.code === tag.code);
    currentListTagstoFilter.splice(indexTags, 1);
    setListTagsToFilter(currentListTagstoFilter);
  }

  function handleRemoveTag(tag) {
    //remove tag of list filtered
    const currentListFilteredTags = [...filteredTags];
    const indexTags = currentListFilteredTags.findIndex((item) => item.code === tag.code);
    currentListFilteredTags.splice(indexTags, 1);
    setFilteredTags(currentListFilteredTags);
    //add tag to initial list
    setListTagsToFilter((listTagsToFilter) => [...listTagsToFilter, tag]);
  }

  function handleClearFilteredTags() {
    setFilteredTags([]);
    setListTagsToFilter([...tagList]);
  }

  return (
    <FilterStyled>
      <BoxContainer onClick={() => setShowListTagsToFilter(true)}>
        {
          filteredTags.length === 0 && (
            <PlaceHolderStyled>Filter Jobs</PlaceHolderStyled>
          )
        }
        <ContainerFilteredTags>
          {
            filteredTags && filteredTags.map((tag) => (
              <Tag
                tag={tag}
                key={tag.code}
                handleRemoveTag={handleRemoveTag}
                filtered={false}
                removeActive
              />
            ))
          }
        </ContainerFilteredTags>
        {
          filteredTags.length > 0 && (
            <ClearStyled onClick={handleClearFilteredTags}>
              Clear
            </ClearStyled>
          )
        }
      </BoxContainer>
      {
        showlistTagsToFilter && listTagsToFilter && listTagsToFilter.length !== 0 && (
          <ListTagsContainer>
            {
              listTagsToFilter && listTagsToFilter.map((tag) => (
                <Tag
                  tag={tag}
                  key={tag.code}
                  handleAddTag={handleAddTagToFilter}
                />
              ))
            }
            <CloseStyled onClick={() => setShowListTagsToFilter(false)}>Close</CloseStyled>
          </ListTagsContainer>

        )
      }
    </FilterStyled>
  );
};

export default Filter;
