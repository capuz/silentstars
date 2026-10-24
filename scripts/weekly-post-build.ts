/**
 * weekly-post-build.ts — the Monday Bluesky thread for a /weekly/ edition: a root post
 * with the edition card, one reply per non-empty section with its top projects, and a
 * closing reply pointing at the archive. Pure: post-weekly.ts does the I/O.
 */

import { type BskyAccount, byteLen, hashtagFacets } from './post-shared.ts';
import { formatWeekRange } from './weekly.ts';
import type { NumberedEdition, EditionItem } from './weekly.ts';

export const ITEMS_PER_SECTION = 3;
const MAX_GRAPHEMES = 300;

export interface Facet {
  index: { byteStart: number; byteEnd: number };
  features: Array<Record<string, string>>;
}

export interface ThreadPost {
  text: string;
  facets: Facet[];
}

export interface WeeklyThread {
  root: ThreadPost & { embed: { $type: string; external: { uri: string; title: string; description: string } } };
  replies: ThreadPost[];
}

export interface WeeklyThreadOptions {
  tags?: string[];
  // Repo → owner's Bluesky account; only Rising owners are mentioned.
  owners?: Record<string, BskyAccount>;
}

const SECTIONS = [
  { key: 'rising',    icon: '🔥', title: 'Rising',        count: 'rising' },
  { key: 'newcomers', icon: '🌱', title: 'New this week', count: 'new' },
  { key: 'revived',   icon: '⚡', title: 'Came back',     count: 'back' },
  { key: 'cooling',   icon: '🧊', title: 'Cooling off',   count: 'cooling off' },
] as const;

function graphemes(text: string): number {
  return [...new Intl.Segmenter().segment(text)].length;
}

// Like truncate(), but backs off to the last whole word and drops a dangling
// separator or connective ("…advisories; build" → "…advisories…", "… and" → "…").
function clip(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const space = cut.lastIndexOf(' ');
  return (space > max * 0.6 ? cut.slice(0, space) : cut)
    .replace(/[\s,;:·—-]+$/, '')
    .replace(/\s+(and|or|with|the|a|an|to|of|for|in|on)$/i, '') + '…';
}

function linkFacet(text: string, before: string, label: string, uri: string): Facet {
  const byteStart = byteLen(before);
  return {
    index: { byteStart, byteEnd: byteStart + byteLen(label) },
    features: [{ $type: 'app.bsky.richtext.facet#link', uri }],
  };
}

function sectionPost(
  title: string, items: EditionItem[], notes: Record<string, string>, baseUrl: string, owners: Record<string, BskyAccount>,
): ThreadPost {
  const shown = items.slice(0, ITEMS_PER_SECTION);
  const more = items.length - shown.length;

  // Shrink every note together until the post fits; names and mentions never shrink.
  const render = (noteMax: number) => {
    let text = `${title}\n`;
    const facets: Facet[] = [];
    for (const i of shown) {
      text += '\n• ';
      facets.push(linkFacet(text, text, i.name, `${baseUrl}/projects/${i.slug}/`));
      text += i.name;
      const owner = owners[i.repo];
      if (owner) {
        text += ' (';
        const byteStart = byteLen(text);
        text += `@${owner.handle}`;
        facets.push({
          index: { byteStart, byteEnd: byteLen(text) },
          features: [{ $type: 'app.bsky.richtext.facet#mention', did: owner.did }],
        });
        text += ')';
      }
      text += ` — ${clip(notes[i.repo] ?? i.reason, noteMax)}`;
    }
    if (more > 0) text += `\n\n+${more} more`;
    return { text, facets };
  };

  for (let noteMax = 240; noteMax > 20; noteMax -= 10) {
    const post = render(noteMax);
    if (graphemes(post.text) <= MAX_GRAPHEMES) return post;
  }
  return render(20);
}

export function buildWeeklyThread(
  edition: NumberedEdition, notes: Record<string, string>, baseUrl: string, opts: WeeklyThreadOptions = {},
): WeeklyThread {
  const range = formatWeekRange(edition.week);
  const pageUrl = `${baseUrl}/weekly/${edition.week}/`;
  const counts = SECTIONS
    .filter(s => edition[s.key].length > 0)
    .map(s => `${s.icon} ${edition[s.key].length} ${s.count}`)
    .join(' · ');

  const rootText = [
    `🗞️ This week on SilentStars · Issue #${edition.issue}`,
    range,
    '',
    counts,
    '',
    'What moved in small open source this week 🧵👇',
    ...(opts.tags?.length ? ['', opts.tags.join(' ')] : []),
  ].join('\n');

  const root = {
    text: rootText,
    facets: hashtagFacets(rootText) as Facet[],
    embed: {
      $type: 'app.bsky.embed.external',
      external: {
        uri: pageUrl,
        title: `This week on SilentStars · Issue #${edition.issue}`,
        description: `What moved in small open source, ${range}: ${counts}.`,
      },
    },
  };

  const replies = SECTIONS
    .filter(s => edition[s.key].length > 0)
    .map(s => sectionPost(`${s.icon} ${s.title}`, edition[s.key], notes, baseUrl, s.key === 'rising' ? opts.owners ?? {} : {}));

  const archiveLabel = `${baseUrl.replace(/^https?:\/\//, '')}/weekly/`;
  const archiveBefore = '📚 Every week so far → ';
  replies.push({
    text: archiveBefore + archiveLabel,
    facets: [linkFacet(archiveBefore + archiveLabel, archiveBefore, archiveLabel, `${baseUrl}/weekly/`)],
  });

  return { root, replies };
}
