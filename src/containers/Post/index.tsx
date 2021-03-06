import Head from 'next/head';
import { Comments } from '../../components/Comments';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import { PostContainer } from '../../components/PostContainer';
import { PostCover } from '../../components/PostCover';
import { PostDetails } from '../../components/PostDetails';
import { SITE_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { removeHtml } from '../../utils/remove-html';
import { AnimationCat } from '../../components/AnimaCat';
import { useState } from 'react';
import { setTimeout } from 'timers';
import { Container } from './styles';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  const [cat, setCat] = useState(false);
  setTimeout(() => setCat(true), 1000 * 30);

  return (
    <>
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(post.content).slice(0, 150)}
        />
      </Head>
      <Header />
      {cat && <AnimationCat mode="run" />}
      <MainContainer>
        <Container>
          <Heading>{post.title}</Heading>
          <PostCover coverUrl={post.cover.url} alt={post.title} />
          <PostDetails
            author={post.author.name}
            category={post.category.name}
            date={post.created_at}
          ></PostDetails>
          <PostContainer content={post.content}></PostContainer>
          </Container>
          <Comments title={post.title} slug={post.slug} />
      </MainContainer>
      <Footer />
    </>
  );
};
