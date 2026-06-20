import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const projects = await getCollection('projects');
  const visible = projects
    .filter(p => p.data.status !== 'archived')
    .sort((a, b) => new Date(b.data.lastCommitAt).getTime() - new Date(a.data.lastCommitAt).getTime());

  return rss({
    title: 'SilentStars',
    description: 'Open source projects that are alive but invisible. Not famous. Not abandoned. Just building.',
    site: new URL(import.meta.env.BASE_URL, context.site!).href,
    items: visible.map(p => {
      const base = (context.site?.href ?? '').replace(/\/$/, '');
      const path = `${import.meta.env.BASE_URL}projects/${p.slug}/`;
      return {
        title: p.data.description
          ? `${p.data.name} — ${p.data.description}`
          : p.data.name,
        description: p.data.description,
        link: `${base}${path}`,
        pubDate: new Date(p.data.lastCommitAt),
        categories: [p.data.status, ...p.data.tags],
      };
    }),
    customData: '<language>en-us</language>',
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
  });
}
