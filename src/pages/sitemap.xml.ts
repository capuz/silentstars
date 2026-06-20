import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const origin = site ? site.origin : 'https://capuz.github.io';
  const root = `${origin}${base}`;

  const projects = await getCollection('projects');
  const slugs = projects.map((p) => p.slug);

  const staticRoutes = ['', 'about/', 'submit/', 'projects/', 'at-risk/', 'resurrections/'];

  const urls = [
    ...staticRoutes.map((r) => `${root}${r}`),
    ...slugs.map((s) => `${root}projects/${s}/`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
