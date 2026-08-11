import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const baseUrl = process.env.VITE_PUBLIC_SITE_URL || "https://content-brief-engine.vercel.app";
const normalizedBaseUrl = baseUrl.replace(/\/$/, "");
const publicDir = resolve("public");

mkdirSync(publicDir, { recursive: true });

writeFileSync(
  resolve(publicDir, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${normalizedBaseUrl}/sitemap.xml\n`,
  "utf8"
);

writeFileSync(
  resolve(publicDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${normalizedBaseUrl}/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
  "utf8"
);

console.log(`Generated SEO files for ${normalizedBaseUrl}`);
