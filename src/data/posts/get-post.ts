import { POST_URL } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';
import { PostData } from '../../domain/posts/post';
import { markdownToHtml } from '../../utils/markdown-to-html';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POST_URL}?slug=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);
  const content = await markdownToHtml(jsonPosts[0].content);
  const finalContent = { ...jsonPosts[0], content };

  return [finalContent];
};
