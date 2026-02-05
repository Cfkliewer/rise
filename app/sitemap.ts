import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.822athletics.com',
      lastModified: new Date(),
    },
  ]
}
