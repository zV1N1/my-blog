import { GetServerSideProps } from 'next';
import HomePage from '../../containers/Home';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { PostData } from '../../domain/posts/post';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Home({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts}></HomePage>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `_sort=id:desc&_start=0&_limit=30&category.name_contains=${ctx.query.category}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: { posts, category: ctx.query.category },
  };
};
