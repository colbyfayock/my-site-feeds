import RSS from 'rss';

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
  const feed = new RSS({
    title: 'Your Website',
    description: 'A cool website that everyone should check out!',
    site_url: 'https://yourwebsite.com',
    feed_url: `https://yourwebsite.com/feed.xml`,
    copyright: `${new Date().getFullYear()} Your Website`,
    language: 'en',
    pubDate: new Date(),
  });

  posts.map((post) => {
    feed.item({
      title: post.title,
      guid: `https://yourwebsite.com/${post.slug}`,
      url: `https://yourwebsite.com/${post.slug}`,
      date: post.date,
      description: post.excerpt,
      author: post.author.name,
      categories: post.categories || [],
    });
  });
  
  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}