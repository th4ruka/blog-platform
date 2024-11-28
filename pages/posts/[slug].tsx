import { fetchEntry, fetchEntries } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Post({ post }: { post: any }) {
  return (
    <div className="prose mx-auto">
      <h1>{post.fields.title}</h1>
      <p>{new Date(post.fields.date).toDateString()}</p>
      <p>{post.fields.description}</p>
      <div>
        {documentToReactComponents(post.fields.content)}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await fetchEntries();
  const paths = posts.map((post) => ({ params: { slug: post.fields.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await fetchEntry(params.slug);
  return { 
    props: { post },
    revalidate: 30, // Regenerate the page every 30 seconds if there's a request
    };
}
