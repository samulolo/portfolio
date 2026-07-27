export type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export const posts: Post[] = [];

export function findPostById(post_id: string): Post | undefined {
  return posts.find((p) => p.id === post_id);
}
