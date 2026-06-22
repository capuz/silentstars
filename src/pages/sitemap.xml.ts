import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const origin = site ? site.origin : 'https://capuz.github.io';
  const root = `${origin}${base}`;

  const projects = await getCollection('projects');
  const today = new Date().toISOString().slice(0, 10);

  const staticRoutes = ['', 'about/', 'submit/', 'projects/', 'at-risk/', 'resurrections/'];

  const entries = [
    ...staticRoutes.map((r) => ({ url: `${root}${r}`, lastmod: today })),
    ...projects.map((p) => ({
      url: `${root}projects/${p.slug}/`,
      lastmod: p.data.lastCommitAt.slice(0, 10),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(({ url, lastmod }) => `  <url><loc>${url}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
