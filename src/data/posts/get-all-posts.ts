import { POST_URL } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';
import { PostData } from '../../domain/posts/post';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POST_URL}?&${query}`;
  const posts = await fetchJson<PostData[]>(url);

  return posts;
};
