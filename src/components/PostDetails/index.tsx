import { Container } from './styled';
import { PostDate } from '../PostDate';
import Link from 'next/link';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <PostDate date={date} /> por {author} |{' '}
      <Link href={`/categories/${category}`}>{category}</Link>
    </Container>
  );
};
