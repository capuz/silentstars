/**
 * update-bsky-profile.ts — sets the SilentStars Bluesky display name and bio,
 * and publishes + pins the "how to submit" post.
 *
 * Idempotent: if the currently pinned post already has PINNED_TEXT it is
 * reused, so re-running never publishes a duplicate. Avatar, banner and any
 * other profile fields are preserved.
 *
 * Env vars:
 *   BSKY_IDENTIFIER, BSKY_APP_PASSWORD — required
 *   DRY_RUN — optional; logs in and reads the profile, prints the diff, writes nothing
 */

import { BskyAgent, RichText, type AppBskyActorProfile, type AppBskyFeedPost } from '@atproto/api';
import { pathToFileURL } from 'node:url';

export const SUBMIT_URL = 'https://capuz.github.io/silentstars/submit';

export const DISPLAY_NAME = 'SilentStars · OSS radar';

export const DESCRIPTION = [
  'Daily pick of open-source projects that are alive but invisible. Not famous. Not abandoned. Just building.',
  '',
  'Built one? Submit it 👇',
  'capuz.github.io/silentstars/submit',
].join('\n');

export const PINNED_TEXT = [
  "📡 SilentStars finds open-source projects that are actively built but nobody's noticed yet. One pick a day, right here.",
  '',
  'Building something quiet? Submit it: a bot checks it in minutes and we post it as a 🙌 Community pick.',
  '',
  '👉 capuz.github.io/silentstars/submit',
].join('\n');

type StrongRef = { uri: string; cid: string };

export function buildProfile(
  existing: AppBskyActorProfile.Record | undefined,
  pinnedPost: StrongRef,
): AppBskyActorProfile.Record {
  const { $type: _type, ...rest } = existing ?? {} as AppBskyActorProfile.Record;
  return { ...rest, displayName: DISPLAY_NAME, description: DESCRIPTION, pinnedPost } as AppBskyActorProfile.Record;
}

export function pinnedPostRecord(createdAt: string): Omit<AppBskyFeedPost.Record, '$type'> {
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
  console.log(`─── avatar kept: ${Boolean(current.avatar)} · banner kept: ${Boolean(current.banner)}`);

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
    console.log(`✓ Published: https://bsky.app/profile/${identifier}/post/${pinned.uri.split('/').pop()}`);
  }

  await agent.upsertProfile(existing => buildProfile(existing, pinned!));
  console.log('✓ Profile updated');
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  main().catch(err => { console.error(err); process.exit(1); });
}
