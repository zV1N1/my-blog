import styled, { css, keyframes } from 'styled-components';
const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const Container = styled.img`
  ${({ theme }) => css`
    width: 480px;
    height: 500px;
    opacity: 0;
    margin.botton: ${theme.spacings.medium};
    animation: ${AniComponent} 2s ease-in-out both;
    box-shadow: 15px 15px 20px #fff1;
  `}
`;

const AniComponent = keyframes`
  from {
    transform: translateY(-50px)
  }
  to {
    transform: translateY(0px);
    opacity: 1
  }
`;
