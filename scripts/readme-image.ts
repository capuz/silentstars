/**
 * readme-image.ts — picks the picture for a project's social card.
 *
 * The owner's GitHub social preview comes first: they chose it for sharing. Few repos
 * have one, so the fallback is the first README image that looks like the product: not
 * a badge, logo or avatar, and big and wide enough to fill the card. Results live in
 * data/card-images.json, so a README is only probed once a month. An entry with
 * `override: true` is a manual decision (`url: null` means "no image") and is kept.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import sharp from 'sharp';

export interface CardImageEntry {
  url: string | null;
  checkedAt: string;
  override?: boolean;
}

export type CardImageCache = Record<string, CardImageEntry>;
export type ImageSize = { width: number; height: number };
export type ImageProbe = (url: string) => Promise<ImageSize | null>;

const MAX_CANDIDATES = 5;
const MIN_WIDTH = 640;
const MIN_RATIO = 1.25;
const MAX_RATIO = 3;
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;

const IMAGE_RE = /!\[[^\]]*\]\(\s*<?([^)\s>]+)|<img\b[^>]*?\bsrc=["']([^"']+)["']/gi;
const NOT_A_PRODUCT_IMAGE_RE = /shields\.io|badge|travis-ci|codecov|circleci|actions\/workflows|star-history|contrib\.rocks|buymeacoffee|ko-fi|sponsor|avatars\d*\.githubusercontent|simpleicons|\.(svg|gif)(\?|#|$)|(^|[/_.-])(logo|icon|favicon|avatar)s?([/_.-]|$)/i;

export function isCustomGithubImage(url: string | undefined): url is string {
  return Boolean(url?.includes('repository-images.githubusercontent.com'));
}

function toAbsolute(src: string, repoUrl: string): string {
  if (/^https?:\/\//i.test(src)) return src;
  return `${repoUrl}/raw/HEAD/${src.replace(/^\.?\/+/, '')}`;
}

export function readmeImageCandidates(markdown: string, repoUrl: string): string[] {
  const found = new Set<string>();
  for (const match of markdown.matchAll(IMAGE_RE)) {
    const src = (match[1] ?? match[2] ?? '').trim();
    if (!src || src.startsWith('data:') || NOT_A_PRODUCT_IMAGE_RE.test(src)) continue;
    found.add(toAbsolute(src, repoUrl));
    if (found.size === MAX_CANDIDATES) break;
  }
  return [...found];
}

function fitsCard({ width, height }: ImageSize): boolean {
  const ratio = width / height;
  return width >= MIN_WIDTH && ratio >= MIN_RATIO && ratio <= MAX_RATIO;
}

function isStale(entry: CardImageEntry, now: Date): boolean {
  return now.getTime() - new Date(entry.checkedAt).getTime() >= CACHE_TTL_MS;
}

export interface ResolveInput {
  repo: string;
  repoUrl: string;
  openGraphImageUrl?: string;
  readme: string;
  cache: CardImageCache;
  now: Date;
  probe: ImageProbe;
}

export async function resolveCardImage(input: ResolveInput): Promise<CardImageEntry> {
  const { repo, repoUrl, openGraphImageUrl, readme, cache, now, probe } = input;
  const cached = cache[repo.toLowerCase()];
  if (cached?.override) return cached;

  const checkedAt = now.toISOString();
  if (isCustomGithubImage(openGraphImageUrl)) return { url: openGraphImageUrl, checkedAt };
  if (cached && !isStale(cached, now)) return cached;

  for (const url of readmeImageCandidates(readme, repoUrl)) {
    const size = await probe(url);
    if (size && fitsCard(size)) return { url, checkedAt };
  }
  return { url: null, checkedAt };
}

export type RefreshItem = Pick<ResolveInput, 'repo' | 'repoUrl' | 'openGraphImageUrl' | 'readme'>;

const REFRESH_CONCURRENCY = 6;

// The budget keeps the first nights short: without it, every repo would probe its README
// at once. Repos left out are picked up on a later night, and show a card without an image
// until then. Only entries that need the network count against it.
export async function refreshCardImages(
  items: RefreshItem[],
  cache: CardImageCache,
  now: Date,
  probe: ImageProbe,
  budget: number,
): Promise<CardImageCache> {
  const next: CardImageCache = { ...cache };
  const needsProbe = (item: RefreshItem) => {
    const cached = cache[item.repo.toLowerCase()];
    return !cached?.override
      && !isCustomGithubImage(item.openGraphImageUrl)
      && (!cached || isStale(cached, now));
  };

  const queue = [...items];
  let left = budget;
  const worker = async () => {
    for (let item = queue.shift(); item; item = queue.shift()) {
      if (needsProbe(item)) {
        if (left <= 0) continue;
        left--;
      }
      next[item.repo.toLowerCase()] = await resolveCardImage({ ...item, cache, now, probe });
    }
  };
  await Promise.all(Array.from({ length: REFRESH_CONCURRENCY }, worker));
  return next;
}

// Image headers sit at the start of the file: reading this much is enough for sharp to
// report the size, and avoids downloading a whole screenshot per candidate.
const PROBE_BYTES = 512 * 1024;
const PROBE_TIMEOUT_MS = 8000;

export const probeImage: ImageProbe = async (url) => {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(PROBE_TIMEOUT_MS) });
    if (!res.ok || !res.body) return null;
    const chunks: Uint8Array[] = [];
    let total = 0;
    const reader = res.body.getReader();
    while (total < PROBE_BYTES) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      total += value.length;
    }
    await reader.cancel().catch(() => {});
    const { width, height } = await sharp(Buffer.concat(chunks)).metadata();
    return width && height ? { width, height } : null;
  } catch {
    return null;
  }
};

export function loadCardImages(path: string): CardImageCache {
  return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : {};
}

export function saveCardImages(path: string, cache: CardImageCache): void {
  const sorted = Object.fromEntries(Object.entries(cache).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync(path, `${JSON.stringify(sorted, null, 2)}\n`);
}

// Banners carry their own text and composition, so cropping them to the card cuts words
// off. Screenshots lose nothing by showing only their top part.
export function coverFit(url: string): 'contain' | 'cover' {
  return isCustomGithubImage(url) || /banner|hero|promo|social|preview/i.test(url) ? 'contain' : 'cover';
}

// `cardImageUrl` is what a card shows: the cached decision, or the owner's GitHub
// image for a repo that hasn't been resolved yet.
export function cardImageUrl(repo: string, openGraphImageUrl: string | undefined, cache: CardImageCache): string | null {
  const entry = cache[repo.toLowerCase()];
  if (entry) return entry.url;
  return isCustomGithubImage(openGraphImageUrl) ? openGraphImageUrl : null;
}
