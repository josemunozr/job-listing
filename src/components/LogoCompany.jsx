import React, { useState } from 'react';
import styled from 'styled-components';

const LogoCompanyStyled = styled.img`
  position: absolute;
  max-width: 50px;
  top: -25px;
  @media (min-width: 769px) {
    max-width: initial;
    top: initial;
    bottom: 30px;
    left: 2em;
  }
`;

const LogoCompany = ({ path, alt }) => {
  const [img, setImg] = useState();
  import(`../${path}`).then((img) => setImg(img.default));
  return (
    <LogoCompanyStyled src={img} alt={alt} />
  );
};

export default LogoCompany;
