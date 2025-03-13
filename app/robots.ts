export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/'
      }
    ],
    host: baseUrl,
    sitemap: `https://www.yarus.shop/sitemap.xml`
  };
}