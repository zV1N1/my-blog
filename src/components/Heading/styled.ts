import styled, { css, keyframes } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.superLarge};
    margin: ${theme.spacings.large} 0;
    text-align: center;
    color: ${theme.colors.white};
    opacity: 0;
    animation: ${AniComponent} 2s ease-in-out both;
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
