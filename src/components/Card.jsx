import React from 'react';
import styled, { css } from 'styled-components';
import Tag from './Tag';
import Badge from './Badge';
import LogoCompany from './LogoCompany';

const CardStyled = styled.div`
  ${(props) => props.active && css`
    border-left: 5px solid var(--darkCyan);
  `}
  width: 100%;
  height: 250px;
  background-color: #ffffff;
  box-shadow: 5px 9px 20px -10px #63babb;
  border-radius: 5px;
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 3em;
  @media (min-width: 426px) {
    margin-bottom: 2em;
  }
  @media (min-width: 769px) {
    flex-direction: row;
    padding: 1em;
    height: auto;
    justify-content: space-between;
    align-items: center;
  }
`;

const InfoJobStyled = styled.div`
  border-bottom: 1px solid var(--darkGrayingCyan);
  font-weight: lighter;
  @media (min-width: 769px) {
    border-bottom: 0;
    margin-left: 9em;
  }
`;

const ListTagsStyled = styled.div`
  padding: 1.5em 0;
  display: flex;
  flex-wrap: wrap;
`;

const NameCompany = styled.p`
  margin: 0;
  color: var(--darkCyan);
  font-weight: 700;
  display: inline-block;
  margin-right: 1.2em;
`;

const JobTitle = styled.p`
  color: var(--VeryDarkGrayingCyan);
  font-weight: 700;
  font-size: 1.2rem;
`;

const ListJobOptions = styled.ul`
  padding: 0;
  display: flex;
`;

const JobOptions = styled.li`
  :first-of-type {
    list-style: none;
    width: 75px;
  }
  width: 85px;
  color: var(--darkCyan);
`;

const Card = (props) => {
  const { active, company, path, badges, jobDescription, relativeTime, format, type, tags } = props;
  return (
    <CardStyled active={active}>
      <LogoCompany path={path} alt={company} />
      <InfoJobStyled>
        <NameCompany>{company}</NameCompany>
        {
          badges && badges.map((badge) => (
            <Badge type={badge} key={badge} />
          ))
        }
        <JobTitle>{ jobDescription }</JobTitle>
        <ListJobOptions>
          <JobOptions>{relativeTime}</JobOptions>
          <JobOptions>{format}</JobOptions>
          <JobOptions>{type}</JobOptions>
        </ListJobOptions>
      </InfoJobStyled>
      <ListTagsStyled>
        {
          tags && tags.map((tag) => (
            <Tag name={tag} key={tag} />
          ))
        }
      </ListTagsStyled>
    </CardStyled>
  );
};

export default Card;
