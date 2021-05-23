import styled, { css } from 'styled-components';

export const Container = styled.img`
  ${({ theme }) => css`
    width: 480px;
    height: 500px;
    display: flex;
    margin-left: 180px;
    margin.botton: ${theme.spacings.medium};
  `}
`;
