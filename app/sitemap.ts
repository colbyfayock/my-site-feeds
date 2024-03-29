import { MetadataRoute } from 'next';

const posts = [
  {
    slug: 'post-1',
    lastModified: '2024-02-29T13:15:09.000Z',
  },
  {
    slug: 'post-2',
    lastModified: '2024-02-22T14:04:04.000Z'
  }
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap>  {
  const links: Array<{ url: string, lastModified: Date | string }> = [
    {
      url: 'https://yourwebsite.com', // Replace with your homepage
      lastModified: new Date(),
    },
  ]

  posts.forEach(post => {
    links.push({
      url: `https://yourwebsite.com/${post.slug}`,
      lastModified: post.lastModified
    });
  })

  return links;
}