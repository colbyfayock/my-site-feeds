const posts = [
  {
    title: 'Post 1',
    slug: 'post-1',
    date: '2024-02-29T13:15:09.000Z',
    excerpt: 'All about Post 1',
    lastModified: '2024-02-29T13:15:09.000Z',
    author: {
      name: 'Your Name'
    },
    categories: ['awesome', 'interesting']
  },
  {
    title: 'Post 2',
    slug: 'post-2',
    date: '2024-02-29T13:15:09.000Z',
    excerpt: 'All about Post 2',
    lastModified: '2024-02-22T14:04:04.000Z',
    author: {
      name: 'Your Name'
    },
    categories: ['awesome', 'interesting']
  }
];

export async function GET() {
  return new Response(
    JSON.stringify(posts),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }
  );
}