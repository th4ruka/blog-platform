import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export default function Home({ posts }: { posts: any[] }) {
  return (
    <div className="prose mx-auto">
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              {post.title} 
            </Link>
            : {post.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}
