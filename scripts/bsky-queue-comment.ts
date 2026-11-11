/**
 * bsky-queue-comment.ts — prints the "your post is queued" comment for a
 * submission (process-submission.yml's notify job, when the card is live but
 * the Bluesky post hasn't gone out). The count ahead comes from
 * data/bsky-queue.json as of now.
 *
 * Env: SUBMISSION_REPO, ISSUE_AUTHOR, PROJ_NAME, PROJ_SLUG, BASE_URL (optional)
 */
import { readQueue, position, queuedComment } from './bsky-queue.ts';

const repo = process.env.SUBMISSION_REPO ?? '';
const baseUrl = (process.env.BASE_URL ?? 'https://silentstars.dev').replace(/\/$/, '');
const at = position(readQueue(), repo);

process.stdout.write(queuedComment({
  author: process.env.ISSUE_AUTHOR ?? '',
  name: process.env.PROJ_NAME ?? repo,
  cardUrl: `${baseUrl}/projects/${process.env.PROJ_SLUG ?? ''}/`,
  ahead: Math.max(at, 0),
}));
