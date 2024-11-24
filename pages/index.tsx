import { fetchEntries } from '../lib/contentful';
import Link from 'next/link';

export default function Home({ posts }: { posts: any[] }) {
  return (
    <div className="prose mx-auto">
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <Link href={`/posts/${post.fields.slug}`}>
              {post.fields.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await fetchEntries();
  return { props: { posts } };
}
