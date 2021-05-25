import styled, { css, keyframes } from 'styled-components';

const CatRun = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(100px);
  }
`;

export const Cat = styled.img`
  position: fixed;
  bottom: 0;
  left: -120;
  width: 3%;
  animation: ${CatRun} 5s ease-in-out both;
`;

export const CatNotFound = styled.img`
  margin-top: 10px;
  width: 10%;
`;
