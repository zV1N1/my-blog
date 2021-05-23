import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.medium};
    color: ${theme.colors.gray};
    font-size: 1.2rem;
  `}
`;
