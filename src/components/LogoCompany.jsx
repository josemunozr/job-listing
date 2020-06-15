import React, { useState } from 'react';
import styled from 'styled-components';

const LogoCompanyStyled = styled.img`
  position: absolute;
  max-width: 50px;
  top: -25px;
`;

const LogoCompany = ({ companyName }) => {
  const [img, setImg] = useState();
  import(`../assets/images/${companyName}.svg`).then((img) => setImg(img.default));
  return (
    <LogoCompanyStyled src={img} alt={companyName} />
  );
};

export default LogoCompany;
