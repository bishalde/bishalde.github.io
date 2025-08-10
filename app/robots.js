export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: ['Bingbot', 'Slurp'],
        allow: '/',
        crawlDelay: 1,
      },
    ],
    sitemap: [
      'https://bishalde.vercel.app/sitemap.xml',
      'https://bishalde.github.io/sitemap.xml',
    ],
    host: 'https://bishalde.vercel.app',
  };
}
