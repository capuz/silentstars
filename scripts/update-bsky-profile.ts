/**
 * update-bsky-profile.ts — sets the SilentStars Bluesky display name and bio,
 * and publishes + pins the "how to submit" post.
 *
 * Idempotent: if the currently pinned post already has PINNED_TEXT it is
 * reused, so re-running never publishes a duplicate. The banner is uploaded from
 * public/bsky-banner.png when it changes (see generate-bsky-banner.ts). The avatar and
 * any other profile fields are preserved.
 *
 * Env vars:
 *   BSKY_IDENTIFIER, BSKY_APP_PASSWORD — required
 *   DRY_RUN — optional; logs in and reads the profile, prints the diff, writes nothing
 */

import { BskyAgent, RichText, type AppBskyActorProfile, type AppBskyFeedPost } from '@atproto/api';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

export const SUBMIT_URL = 'https://silentstars.dev/submit';

export const DISPLAY_NAME = 'SilentStars · OSS radar';

export const DESCRIPTION = [
  'Open-source projects that are alive but invisible, picked every day and sent in by the community. Not famous. Not abandoned. Just building.',
  '',
  'Built one? Submit it 👇',
  'silentstars.dev/submit',
].join('\n');

// Editing this text publishes a brand-new pinned post the next time the
// update-bsky-profile workflow runs without dry run.
export const PINNED_TEXT = [
  "📡 SilentStars finds open-source projects that are actively built but nobody's noticed yet. New ones every day, right here.",
  '',
  'Building something quiet? Submit it: a bot checks it in minutes and we post it as a 🙌 Community pick.',
  '',
  '👉 silentstars.dev/submit',
].join('\n');

type StrongRef = { uri: string; cid: string };

export function buildProfile(
  existing: AppBskyActorProfile.Record | undefined,
  pinnedPost: StrongRef,
  banner?: AppBskyActorProfile.Record['banner'],
): AppBskyActorProfile.Record {
  const { $type: _type, ...rest } = existing ?? {} as AppBskyActorProfile.Record;
  return {
    ...rest, displayName: DISPLAY_NAME, description: DESCRIPTION, pinnedPost, ...(banner ? { banner } : {}),
  } as AppBskyActorProfile.Record;
}

// Blobs are re-encoded refs, so size is the cheap way to tell a re-run from a new image.
export function bannerIsCurrent(current: AppBskyActorProfile.Record | undefined, size: number): boolean {
  return current?.banner?.size === size;
}

// Pick, not Omit: Record has an index signature, so Omit<…, '$type'> would erase text/facets to unknown.
export function pinnedPostRecord(createdAt: string): Pick<AppBskyFeedPost.Record, 'text' | 'facets' | 'langs' | 'createdAt'> {
  const rt = new RichText({ text: PINNED_TEXT });
  rt.detectFacetsWithoutResolution();
  return { text: rt.text, facets: rt.facets, langs: ['en'], createdAt };
}

async function main(): Promise<void> {
  const dryRun     = process.env.DRY_RUN === 'true';
  const identifier = (process.env.BSKY_IDENTIFIER ?? '').replace(/^@/, '');
  const password   = process.env.BSKY_APP_PASSWORD;
  if (!identifier || !password) throw new Error('BSKY_IDENTIFIER and BSKY_APP_PASSWORD env vars are required');

  const agent = new BskyAgent({ service: 'https://bsky.social' });
  await agent.login({ identifier, password });
  const did = agent.session!.did;

  const { data: profile } = await agent.com.atproto.repo.getRecord({
    repo: did, collection: 'app.bsky.actor.profile', rkey: 'self',
  });
  const current = profile.value as AppBskyActorProfile.Record;

  // Reuse the pinned post when it already carries this exact text.
  let pinned: StrongRef | null = null;
  if (current.pinnedPost) {
    const rkey = current.pinnedPost.uri.split('/').pop()!;
    try {
      const { data } = await agent.com.atproto.repo.getRecord({ repo: did, collection: 'app.bsky.feed.post', rkey });
      if ((data.value as AppBskyFeedPost.Record).text === PINNED_TEXT) pinned = current.pinnedPost;
    } catch { /* pinned post deleted — publish a new one */ }
  }

  console.log('─── displayName');
  console.log(`  before: ${current.displayName ?? ''}`);
  console.log(`  after:  ${DISPLAY_NAME}`);
  console.log('─── description');
  console.log(`  before: ${JSON.stringify(current.description ?? '')}`);
  console.log(`  after:  ${JSON.stringify(DESCRIPTION)}`);
  const bannerBuf = readFileSync(join(process.cwd(), 'public', 'bsky-banner.png'));
  const uploadBanner = !bannerIsCurrent(current, bannerBuf.length);
  console.log(`─── avatar kept: ${Boolean(current.avatar)} · new banner: ${uploadBanner} (${bannerBuf.length} bytes)`);

  const record = pinnedPostRecord(new Date().toISOString());
  if (pinned) {
    console.log(`─── pinned post already up to date: ${pinned.uri}`);
  } else {
    console.log(`─── pinned post to publish (${[...new Intl.Segmenter().segment(record.text)].length} graphemes):`);
    console.log(record.text);
    console.log(`─── facets: ${JSON.stringify(record.facets)}`);
  }

  if (dryRun) {
    console.log('Dry run — nothing written.');
    return;
  }

  if (!pinned) {
    pinned = await agent.post(record);
    console.log(`✓ Published: https://bsky.app/profile/${did}/post/${pinned.uri.split('/').pop()}`);
  }

  const banner = uploadBanner
    ? (await agent.uploadBlob(bannerBuf, { encoding: 'image/png' })).data.blob
    : undefined;
  await agent.upsertProfile(existing => buildProfile(existing, pinned!, banner));
  console.log('✓ Profile updated');
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  main().catch(err => { console.error(err); process.exit(1); });
}
