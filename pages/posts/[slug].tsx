import { getPostBySlug, getAllPosts } from '../../lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

export default function Post({ post }: { post: any }) {
  return (
    <div className="prose mx-auto">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      post: {
        ...post,
        content: contentHtml,
      },
    },
  };
}
