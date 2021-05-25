import Link from 'next/link';
import { AnimationCat } from '../AnimaCat';
import { Container, Button } from './styled';

export const Page404 = () => {
  return (
    <Container>
      <h1>404!</h1>
      <h2>Oops! Page Not Found!</h2>
      <AnimationCat mode="sit" page="404" />
      <Link href="/">
        <Button>Go back</Button>
      </Link>
    </Container>
  );
};
