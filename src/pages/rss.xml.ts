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
    site: context.site!,
    items: visible.map(p => ({
      title: `${p.data.name} — ${p.data.status}`,
      description: p.data.description,
      link: `${import.meta.env.BASE_URL}projects/${p.slug}`,
      pubDate: new Date(p.data.lastCommitAt),
      categories: [p.data.status, ...p.data.tags],
    })),
    customData: '<language>en-us</language>',
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
  });
}
