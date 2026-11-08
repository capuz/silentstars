import {
  type Project, type BskyAccount,
  LANG_HASHTAG,
  loadCommunityTags, truncate, slugify,
  topicHashtags, byteLen, hashtagFacets,
} from './post-shared.ts';
import { whyLine } from './post-signal.ts';

const COMMUNITY_CREDIT = '🙌 Community pick';
const WEEKLY_SUBMIT_CTA = '📮 Built something quiet? Submit it →';
const MIN_FITTED_PITCH = 30;
const CARD_DESCRIPTION = 'Activity, health and history for this project.';

// One post a week asks for submissions, so the feed keeps asking without every post
// ending in a request.
export function isSubmitCtaDay(today: string): boolean {
  return new Date(`${today}T00:00:00Z`).getUTCDay() === 0;
}

export interface BuildPostOptions {
  today?: string;
  // Instant the activity line counts from. Defaults to the real clock, which is what
  // the card uses, so both say the same "updated N days ago".
  now?: Date;
  // Repo owner's Bluesky account (from their GitHub social links) → "by @handle".
  owner?: BskyAccount | null;
  // Accepted community submission; submitter is credited when they have Bluesky.
  communityPick?: boolean;
  submitter?: BskyAccount | null;
}

// "Peon: An editor" reads as a broken sentence; only articles are safe to lowercase,
// since any other first word may be a proper noun.
function lowerLeadingArticle(pitch: string): string {
  return pitch.replace(/^(A|An|The)\b/, word => word.toLowerCase());
}

// A pitch that doesn't fit stops at its last whole sentence, when that leaves enough to
// read; otherwise it gets cut with an ellipsis.
function fitPitch(pitch: string, budget: number): string {
  if (pitch.length <= budget) return pitch;
  const lastStop = pitch.slice(0, budget).search(/[.!?](?=\s)[^.!?]*$/);
  return lastStop >= MIN_FITTED_PITCH ? pitch.slice(0, lastStop + 1) : truncate(pitch, budget);
}

export function buildPost(p: Project, baseUrl: string, pitch: string, opts: BuildPostOptions = {}) {
  const lang      = p.language ?? '';
  const langTags  = (p.languages ?? (lang ? [lang] : []))
    .map(l => LANG_HASHTAG[l] ?? '')
    .filter(Boolean);
  const baseTags  = [...loadCommunityTags(), ...langTags];
  const topicTags = topicHashtags(p.topics ?? [], baseTags);
  const tags      = [...new Set([...baseTags, ...topicTags])].join(' ');
  const slug      = slugify(p.repo);
  const siteUrl   = `${baseUrl}/projects/${slug}/`;
  const submitUrl = `${baseUrl}/submit/`;

  const submitter = opts.submitter ?? null;
  const community = Boolean(opts.communityPick || submitter);
  // Self-submitted: the "submitted by" mention already pings the owner.
  const owner = opts.owner && opts.owner.did !== submitter?.did ? opts.owner : null;

  const today  = opts.today ?? new Date().toISOString().slice(0, 10);
  const cta    = isSubmitCtaDay(today) ? WEEKLY_SUBMIT_CTA : null;
  const byLine = owner ? `by @${owner.handle}` : null;
  const credit = !community ? null
    : submitter ? `${COMMUNITY_CREDIT}, submitted by @${submitter.handle}`
    : COMMUNITY_CREDIT;
  const now    = opts.now ?? (opts.today ? new Date(`${today}T12:00:00Z`) : new Date());
  const why    = whyLine(p, now);
  const details = [why, byLine, credit].filter((line): line is string => line !== null);

  const layout = (desc: string) => [
    `${p.name}: ${desc}`,
    ...(details.length ? ['', ...details] : []),
    '',
    tags,
    ...(cta ? ['', cta] : []),
  ];

  // Bluesky's hard 300-grapheme cap: work out what's left for the
  // pitch after every other line is accounted for, with a safety
  // margin for multi-byte emoji graphemes.
  const skeleton   = layout('').join('\n');
  const descBudget = Math.max(60, 300 - [...skeleton].length - 5);
  const desc       = fitPitch(lowerLeadingArticle(pitch), descBudget);

  // Text without URL — card embed handles the link
  const lines = layout(desc);
  const text  = lines.join('\n');

  const facets: any[] = [];
  const at = (offset: number, len: string) => ({ byteStart: offset, byteEnd: offset + byteLen(len) });
  const lineStart = (line: string) => {
    const i = lines.indexOf(line);
    return i === 0 ? 0 : byteLen(lines.slice(0, i).join('\n')) + 1;
  };

  // Byte-offset facet: project name → GitHub repo link
  facets.push({ index: at(0, p.name), features: [{ $type: 'app.bsky.richtext.facet#link', uri: p.url }] });

  if (byLine && owner) {
    const mention = `@${owner.handle}`;
    facets.push({
      index: at(lineStart(byLine) + byteLen('by '), mention),
      features: [{ $type: 'app.bsky.richtext.facet#mention', did: owner.did }],
    });
  }

  if (credit && submitter) {
    const mention = `@${submitter.handle}`;
    facets.push({
      index: at(lineStart(credit) + byteLen(credit) - byteLen(mention), mention),
      features: [{ $type: 'app.bsky.richtext.facet#mention', did: submitter.did }],
    });
  }

  facets.push(...hashtagFacets(text));

  if (cta) {
    facets.push({
      index: at(lineStart(cta), cta),
      features: [{ $type: 'app.bsky.richtext.facet#link', uri: submitUrl }],
    });
  }

  // External card → SilentStars project page
  const embed = {
    $type: 'app.bsky.embed.external',
    external: {
      uri: siteUrl,
      title: `${p.name} on SilentStars`,
      description: CARD_DESCRIPTION,
    },
  };

  return { text, facets, embed, siteUrl };
}
