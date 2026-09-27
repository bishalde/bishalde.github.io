export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: "https://bishalde.vercel.app/sitemap.xml",
    host: "https://bishalde.vercel.app",
  };
}
