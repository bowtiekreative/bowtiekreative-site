// Sitemap endpoint — generates XML sitemap
export async function GET(context) {
  const pages = [
    { url: '/', changefreq: 'weekly', priority: '1.00' },
    { url: '/about-bow-tie-kreative', changefreq: 'monthly', priority: '0.80' },
    { url: '/growth-points', changefreq: 'weekly', priority: '0.90' },
    { url: '/results', changefreq: 'monthly', priority: '0.70' },
    { url: '/apply', changefreq: 'monthly', priority: '0.85' },
    { url: '/support/website', changefreq: 'monthly', priority: '0.65' },
    { url: '/privacy-policy', changefreq: 'monthly', priority: '0.30' },
    { url: '/terms', changefreq: 'monthly', priority: '0.30' },
    { url: '/cookie-policy', changefreq: 'monthly', priority: '0.30' },
  ];

  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(p => `  <url>
    <loc>https://bowtiekreative.com${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}