import { Container } from './styled';
import { PostDate } from '../PostDate';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <PostDate date={date} /> por {author} | {category}
    </Container>
  );
};
