import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '', // Ensure these variables are in your .env.local
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export async function fetchEntries() {
  const entries = await client.getEntries({ content_type: 'blogPost' });
  return entries.items;
}

export async function fetchEntry(slug: string) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
  });
  return entries.items[0];
}
