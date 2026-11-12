const SITE_URL = "https://bishalde.vercel.app";

// Search engines ignore #section URLs, so list real URLs only.
export default function sitemap() {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/open-source`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/Bishal_Resume.pdf`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
