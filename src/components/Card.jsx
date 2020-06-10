import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import Badge from './Badge';
import logoManage from '../assets/images/manage.svg';

const CardStyled = styled.div`
  width: 100%;
  height: 250px;
  background-color: #ffffff;
  box-shadow: 5px 9px 20px -10px #63babb;
  border-radius: 5px;
  border-left: 5px solid var(--darkCyan);
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  position: relative;
  div:first-of-type {
    border-bottom: 1px solid var(--darkGrayingCyan);
    font-weight: lighter;
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

const LogoCompany = styled.img`
  position: absolute;
  max-width: 50px;
  top: -25px;
`;

const Card = () => (
  <CardStyled>
    <LogoCompany src={logoManage} alt='manage' />
    <div>
      <NameCompany>Photosnap</NameCompany>
      <Badge name='new!' color='darkGrayingCyan' />
      <Badge name='featured' color='VeryDarkGrayingCyan' />
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
      <Tag name='Javascrip' />
    </div>
  </CardStyled>
);

export default Card;
