/**
 * post-pitch.ts — the "what it does" line of the daily Bluesky post.
 *
 * GitHub descriptions are often status text ("Work in progress dungeon romp") or a
 * pointer ("Mirror of https://…"), which makes a poor hook. buildPitch() keeps the
 * description when it describes the project and otherwise leads with the first prose
 * sentence of the README, so the post says what the project does, not where it's at.
 */

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const CONTENT_DIR = join(process.cwd(), 'src', 'content', 'projects');

// Below this, a README sentence is a tagline fragment ("Fast and tiny.") that needs the next one.
const MIN_SENTENCE_CHARS = 40;

// Says where the project is at, or where it lives, instead of what it does.
const STATUS_RE = /\b(work[- ]in[- ]progress|wip|under (construction|development)|early (stage|development)|in development|not (yet )?ready|mirror of)\b/i;
const STATUS_PREFIX_RE = /^\s*(a\s+)?(work[- ]in[- ]progress|wip)\b\s*[:\-–—]?\s*/i;

// The project page markdown is what collect.ts already cleaned (noise stripped,
// translated to English when needed), so its body beats re-fetching the README.
export function readmeExcerpt(slug: string, maxChars = 1500, dir = CONTENT_DIR): string {
  const path = join(dir, `${slug}.md`);
  if (!existsSync(path)) return '';
  const body = readFileSync(path, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '').trim();
  return body.slice(0, maxChars).trimEnd();
}

function isDescriptive(text: string): boolean {
  return text.length > 0 && !STATUS_RE.test(text) && !/^https?:\/\//i.test(text);
}

function cleanMarkdown(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[`*~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// First README paragraph that reads as prose: headings, tables, lists, quotes,
// code fences, badges and HTML are skipped.
function readmeLead(readme: string): string {
  const prose = readme
    .replace(/```[\s\S]*?```/g, '')
    .split('\n')
    .filter(line => !/^\s*(#|\||>|[-*+]\s|\d+\.\s)/.test(line))
    .join('\n');

  for (const paragraph of prose.split(/\n\s*\n/)) {
    const [first = '', second] = cleanMarkdown(paragraph).split(/(?<=[.!?])\s+/);
    const lead = first.length < MIN_SENTENCE_CHARS && second ? `${first} ${second}` : first;
    if (lead.length >= MIN_SENTENCE_CHARS && isDescriptive(lead)) return lead;
  }
  return '';
}

export function buildPitch({ description, readme }: { description: string; readme: string }): string {
  const desc = description.trim();
  if (isDescriptive(desc)) return desc;

  const lead = readmeLead(readme);
  if (lead) return lead;

  const stripped = desc.replace(STATUS_PREFIX_RE, '').trim();
  if (stripped !== desc && isDescriptive(stripped)) return stripped[0]!.toUpperCase() + stripped.slice(1);

  return desc;
}
