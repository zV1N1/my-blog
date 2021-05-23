import styled, { css } from 'styled-components';

export const Container = styled.article`
  img {
    max-width: 100%;
  }
  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
    color: ${({ theme }) => theme.colors.white};
  }
  ul,
  ol {
    margin: ${({ theme }) => theme.spacings.medium};
  }
  pre {
    ${({ theme }) => css`
      width: 100%;
      overflow-x: auto;
      background: ${theme.colors.lightGray};
      padding: ${theme.spacings.large};
      margin: ${theme.spacings.large} 0;
      line-height: 1.5;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
    `}
  }
`;
