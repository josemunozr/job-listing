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
  cursor: pointer;
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 769px) {
    flex-direction: row;
    padding: 1em;
    height: auto;
    justify-content: space-between;
    align-items: center;
  }
  div:first-of-type {
    border-bottom: 1px solid var(--darkGrayingCyan);
    font-weight: lighter;
    @media (min-width: 769px) {
      border-bottom: 0;
      margin-left: 9em;
    }
  }
  div:last-of-type {
    padding: 1.5em 0;
    display: flex;
    flex-wrap: wrap;
  }
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

const Card = ({ active }) => {
  return (
    <CardStyled active={active}>
      <LogoCompany companyName='insure' alt='insure' />
      <div>
        <NameCompany>Photosnap</NameCompany>
        <Badge type='new' />
        <Badge type='feature' />
        <JobTitle>Senior Frontend Developer</JobTitle>
        <ListJobOptions>
          <JobOptions>1d ago</JobOptions>
          <JobOptions>Full Time</JobOptions>
          <JobOptions>Usa only</JobOptions>
        </ListJobOptions>
      </div>
      <div>
        <Tag name='Fullstack' />
        <Tag name='Senior' />
        <Tag name='HTML' />
        <Tag name='CSS' />
        <Tag name='Javascript' />
      </div>
    </CardStyled>
  );
};

export default Card;
