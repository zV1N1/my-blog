import styled, { css, keyframes } from 'styled-components';

const AnimaCard = keyframes`
  from {
    transform: scale(0.7);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  text-align: center;
  animation: ${AnimaCard} 2s ease-in-out;
  transition: opacity 300ms;

  &:hover {
    opacity: 0.7;
  }
`;

export const PostCardCover = styled.div`
  overflow: hidden;
  width: 280px;
  height: 250px;
  border: none;
  border-radius: 10px;
  img {
    width: 280px;
    height: 250px;
    border: none;
    border-radius: 10px;
    transition: opacity 300ms, transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};

    a {
      color: whitesmoke;
    }
  `}
`;
