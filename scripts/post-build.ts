import {
  type Project, type BskyAccount,
  LANG_HASHTAG,
  loadCommunityTags, truncate, slugify,
  pickOpener, pickCta, topicHashtags,
} from './post-shared.ts';

const COMMUNITY_OPENER = '🙌 Community pick';
const COMMUNITY_CTA    = '📮 Submit yours →';
const WEEKLY_SUBMIT_CTA = '📮 Built something quiet? Submit it →';

function byteLen(str: string): number {
  return new TextEncoder().encode(str).length;
}

function hashtagFacets(text: string) {
  const encoder = new TextEncoder();
  const result  = [];
  const regex   = /#([a-zA-Z][a-zA-Z0-9]*)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const byteStart = encoder.encode(text.slice(0, match.index)).length;
    const byteEnd   = byteStart + encoder.encode(match[0]).length;
    result.push({
      index: { byteStart, byteEnd },
      features: [{ $type: 'app.bsky.richtext.facet#tag', tag: match[1] }],
    });
  }
  return result;
}

// Once a week the rotating CTA becomes a call for submissions, so the feed
// asks for projects without adding extra posts.
export function isSubmitCtaDay(today: string): boolean {
  return new Date(`${today}T00:00:00Z`).getUTCDay() === 0;
}

export interface BuildPostOptions {
  today?: string;
  // Repo owner's Bluesky account (from their GitHub social links) → "by @handle".
  owner?: BskyAccount | null;
  // Accepted community submission; submitter is credited when they have Bluesky.
  communityPick?: boolean;
  submitter?: BskyAccount | null;
}

export function buildPost(p: Project, baseUrl: string, pitch: string, opts: BuildPostOptions = {}) {
  const lang      = p.language ?? '';
  const langTags  = (p.languages ?? (lang ? [lang] : []))
    .map(l => LANG_HASHTAG[l] ?? '')
    .filter(Boolean);
  const topicTags = topicHashtags(p.topics ?? [], langTags);
  const tags      = [...loadCommunityTags(), ...langTags, ...topicTags].join(' ');
  const slug      = slugify(p.repo);
  const siteUrl   = `${baseUrl}/projects/${slug}/`;
  const submitUrl = `${baseUrl}/submit/`;

  const submitter = opts.submitter ?? null;
  const community = Boolean(opts.communityPick || submitter);
  // Self-submitted: the "submitted by" mention already pings the owner.
  const owner = opts.owner && opts.owner.did !== submitter?.did ? opts.owner : null;

  // Opener/CTA rotate by date (not by project — only one post goes out per
  // day), decorrelated from the project pick in main() via distinct seeds.
  const today  = opts.today ?? new Date().toISOString().slice(0, 10);
  const opener = community
    ? (submitter ? `${COMMUNITY_OPENER} — submitted by @${submitter.handle}` : COMMUNITY_OPENER)
    : pickOpener(`${today}-opener`);
  const cta = community ? COMMUNITY_CTA
    : isSubmitCtaDay(today) ? WEEKLY_SUBMIT_CTA
    : pickCta(`${today}-cta`);
  const ctaIsSubmit = cta === COMMUNITY_CTA || cta === WEEKLY_SUBMIT_CTA;
  const byLine = owner ? `by @${owner.handle}` : null;

  const layout = (desc: string) => [
    opener,
    '',
    `${p.name} — ${desc}`,
    ...(byLine ? [byLine] : []),
    '',
    tags,
    '',
    cta,
  ];

  // Bluesky's hard 300-grapheme cap: work out what's left for the
  // pitch after every other line is accounted for, with a safety
  // margin for multi-byte emoji graphemes.
  const skeleton   = layout('').join('\n');
  const descBudget = Math.max(60, 300 - [...skeleton].length - 5);
  const desc       = truncate(pitch, descBudget);

  // Text without URL — card embed handles the link
  const text = layout(desc).join('\n');

  const facets: any[] = [];
  const at = (offset: number, len: string) => ({ byteStart: offset, byteEnd: offset + byteLen(len) });

  if (submitter) {
    const mention = `@${submitter.handle}`;
    facets.push({
      index: at(byteLen(opener) - byteLen(mention), mention),
      features: [{ $type: 'app.bsky.richtext.facet#mention', did: submitter.did }],
    });
  }

  // Byte-offset facet: project name → GitHub repo link
  const nameStart = byteLen(`${opener}\n\n`);
  facets.push({ index: at(nameStart, p.name), features: [{ $type: 'app.bsky.richtext.facet#link', uri: p.url }] });

  if (byLine && owner) {
    const mention = `@${owner.handle}`;
    const lineStart = byteLen(`${opener}\n\n${p.name} — ${desc}\n`);
    facets.push({
      index: at(lineStart + byteLen('by '), mention),
      features: [{ $type: 'app.bsky.richtext.facet#mention', did: owner.did }],
    });
  }

  facets.push(...hashtagFacets(text));

  if (ctaIsSubmit) {
    facets.push({
      index: at(byteLen(text) - byteLen(cta), cta),
      features: [{ $type: 'app.bsky.richtext.facet#link', uri: submitUrl }],
    });
  }

  // External card → SilentStars project page
  const embed = {
    $type: 'app.bsky.embed.external',
    external: {
      uri: siteUrl,
      title: `${p.name} · SilentStars`,
      description: pitch,
    },
  };

  return { text, facets, embed, siteUrl };
}
