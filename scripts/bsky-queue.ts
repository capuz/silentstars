/**
 * bsky-queue.ts — accepted submissions waiting for their Bluesky post
 *
 * An accepted submission goes live on the site right away, but its Bluesky
 * post goes through data/bsky-queue.json: at most DAILY_COMMUNITY_CAP
 * community picks go out per UTC day, oldest first. On a quiet day the queue
 * is empty and the post goes out within minutes, as before. On a busy day (or
 * when a deploy times out) the rest wait, and bsky-queue.yml drains the queue
 * a few times a day: it posts, edits the issue comment with the link, emails
 * the submitter and closes the issue. Same idea as standby.ts: a queue in the
 * repo, drained by a scheduled workflow, with nothing left for a human to do.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { PostedEntry } from './post-shared.ts';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const QUEUE_PATH = resolve(ROOT, 'data', 'bsky-queue.json');
export const DAILY_COMMUNITY_CAP = 3;

export interface QueueEntry {
  repo: string;
  issue: number;
  /** GitHub login of whoever opened the submission issue (credited in the post). */
  submitter: string;
  since: string;
  /** The bot's acknowledgement comment, edited in place once the post is out. */
  ackCommentId?: number;
}

const same = (a: string, b: string) => a.toLowerCase() === b.toLowerCase();
const day = (d: Date) => d.toISOString().slice(0, 10);

export function readQueue(path = QUEUE_PATH): QueueEntry[] {
  if (!existsSync(path)) return [];
  return JSON.parse(readFileSync(path, 'utf8')) as QueueEntry[];
}

export function writeQueue(entries: QueueEntry[], path = QUEUE_PATH) {
  writeFileSync(path, JSON.stringify(entries, null, 2) + '\n');
}

/** Adds a repo to the end of the line; a repo already queued keeps its place. */
export function enqueue(
  entries: QueueEntry[], repo: string, issue: number, submitter: string, now: Date, ackCommentId?: number,
): QueueEntry[] {
  const fresh: QueueEntry = { repo, issue, submitter, since: day(now), ...(ackCommentId != null ? { ackCommentId } : {}) };
  const i = entries.findIndex(e => same(e.repo, repo));
  if (i === -1) return [...entries, fresh];
  return entries.map((e, k) => k === i ? { ...fresh, repo: e.repo, since: e.since } : e);
}

export function dequeue(entries: QueueEntry[], repo: string): QueueEntry[] {
  return entries.filter(e => !same(e.repo, repo));
}

/** 0-based place in line, or -1 when the repo isn't queued. */
export function position(entries: QueueEntry[], repo: string): number {
  return entries.findIndex(e => same(e.repo, repo));
}

export function communityPostsToday(posted: PostedEntry[], now: Date): number {
  const today = day(now);
  return posted.filter(p => p.communityPick && p.platforms.bsky?.postedAt.slice(0, 10) === today).length;
}

/** Oldest entries that still fit under today's cap, skipping repos already posted. */
export function takeDue(
  entries: QueueEntry[], posted: PostedEntry[], now: Date, cap = DAILY_COMMUNITY_CAP,
): QueueEntry[] {
  const room = Math.max(cap - communityPostsToday(posted, now), 0);
  const alreadyPosted = (repo: string) => posted.some(p => same(p.repo, repo) && p.platforms.bsky);
  return entries.filter(e => !alreadyPosted(e.repo)).slice(0, room);
}

interface CommentParts { author: string; name: string; cardUrl: string }

export function queuedComment({ author, name, cardUrl, ahead }: CommentParts & { ahead: number }): string {
  const line = ahead === 0 ? `it's next in line`
    : `there ${ahead === 1 ? 'is' : 'are'} **${ahead}** ahead of it`;
  return `Hey @${author}! ✅\n\n**${name}** has been accepted and your card is now live on SilentStars!\n\n🃏 [View your card](${cardUrl})\n\nIts 🦋 Bluesky post is **queued**: up to ${DAILY_COMMUNITY_CAP} community picks go out per day, oldest first, and ${line}. When it posts, this comment gets the link, you get the email, and the issue closes on its own. No need to do anything else. ⭐`;
}

export function postedComment({ author, name, cardUrl, bskyUrl }: CommentParts & { bskyUrl: string }): string {
  return `Hey @${author}! ✅\n\n**${name}** has been accepted — and it's now live on SilentStars!\n\n🃏 [View your card](${cardUrl})\n🦋 [Post on Bluesky](${bskyUrl})\n\nThanks for the awesome submission! ⭐`;
}
