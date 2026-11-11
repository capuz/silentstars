/**
 * bsky-queue-drain.ts — posts the community picks waiting in data/bsky-queue.json
 *
 * Takes the oldest entries that fit under today's cap (bsky-queue.ts), posts
 * each one as a 🙌 Community pick, records it in posted.json and drops it from
 * the queue. Then it closes the loop on the submission issue: the bot's comment
 * gets the post link, `bsky-queued` becomes `accepted`, the issue closes and
 * the submitter gets the acceptance email. An entry whose project isn't in
 * latest.json yet, or whose card isn't deployed, stays queued for the next run.
 *
 * Runs from bsky-queue.yml (a few times a day) and from collect.yml right after
 * a submission is deployed. In that second case SKIP_NOTIFY_REPO names the
 * submission whose issue process-submission.yml's notify job will handle itself.
 *
 * Env vars:
 *   GITHUB_TOKEN, REPO_OWNER, REPO_NAME  — required to update issues
 *   BSKY_IDENTIFIER, BSKY_APP_PASSWORD   — required unless DRY_RUN
 *   RESEND_API_KEY, NOTIFY_FROM_EMAIL    — optional, acceptance email
 *   SKIP_NOTIFY_REPO                     — optional, see above
 *   BASE_URL                             — optional (default https://silentstars.dev)
 *   DRY_RUN                              — optional, preview only: no post, no writes
 */

import { appendFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  type LatestData, loadPosted, savePosted, recordPost, slugify, resolveGithubPublicEmail,
} from './post-shared.ts';
import { publishProject } from './post-publish.ts';
import { readQueue, writeQueue, dequeue, takeDue, postedComment, type QueueEntry } from './bsky-queue.ts';
import { parseIssueBody } from './issue-body.ts';
import { acceptedHtml } from './email/templates.ts';
import { sendEmail } from './email/sender.ts';

const DRY_RUN  = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';
const BASE_URL = (process.env.BASE_URL ?? 'https://silentstars.dev').replace(/\/$/, '');
const TOKEN    = process.env.GITHUB_TOKEN ?? '';
const same = (a: string, b: string) => a.toLowerCase() === b.toLowerCase();

async function gh(path: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`https://api.github.com/repos/${process.env.REPO_OWNER}/${process.env.REPO_NAME}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
  });
}

async function closeIssue(entry: QueueEntry, name: string, bskyUrl: string) {
  const slug = slugify(entry.repo);
  const body = postedComment({ author: entry.submitter, name, cardUrl: `${BASE_URL}/projects/${slug}/`, bskyUrl });
  const comment = entry.ackCommentId
    ? await gh(`/issues/comments/${entry.ackCommentId}`, { method: 'PATCH', body: JSON.stringify({ body }) })
    : await gh(`/issues/${entry.issue}/comments`, { method: 'POST', body: JSON.stringify({ body }) });
  if (!comment.ok) console.warn(`  ⚠ #${entry.issue}: comment failed (${comment.status})`);
  await gh(`/issues/${entry.issue}/labels/bsky-queued`, { method: 'DELETE' });
  await gh(`/issues/${entry.issue}/labels`, { method: 'POST', body: JSON.stringify({ labels: ['accepted'] }) });
  const closed = await gh(`/issues/${entry.issue}`, {
    method: 'PATCH', body: JSON.stringify({ state: 'closed', state_reason: 'completed' }),
  });
  if (!closed.ok) console.warn(`  ⚠ #${entry.issue}: close failed (${closed.status})`);

  // The email isn't kept in the public queue file: it comes from the issue, as
  // in process-submission.ts (template field first, then the public GitHub email).
  const apiKey = process.env.RESEND_API_KEY;
  const from   = process.env.NOTIFY_FROM_EMAIL;
  if (!apiKey || !from) return;
  const issue = await gh(`/issues/${entry.issue}`);
  const templateEmail = issue.ok ? parseIssueBody(((await issue.json()) as { body?: string }).body ?? '').email : '';
  const to = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(templateEmail)
    ? templateEmail
    : await resolveGithubPublicEmail(entry.submitter, TOKEN);
  if (!to) return;
  await sendEmail({
    apiKey, from, to,
    subject: `${name} is now on SilentStars ⭐`,
    html: acceptedHtml({ projectName: name, projectSlug: slug, baseUrl: BASE_URL, bskyPostUrl: bskyUrl }),
  });
  console.log(`  ✉ acceptance email sent for #${entry.issue}`);
}

async function main() {
  const data: LatestData = JSON.parse(readFileSync(join(process.cwd(), 'data', 'latest.json'), 'utf8'));
  let queue  = readQueue();
  let posted = loadPosted();
  const due  = takeDue(queue, posted, new Date());
  console.log(`📬 ${queue.length} queued · ${due.length} due today${DRY_RUN ? ' (dry run)' : ''}`);

  let changed = false;
  for (const entry of due) {
    const project = data.projects.find(p => same(p.repo, entry.repo));
    if (!project) { console.log(`  … ${entry.repo}: not in latest.json yet, stays queued`); continue; }
    console.log(`\n▶ ${entry.repo} (issue #${entry.issue}, queued since ${entry.since})`);
    let bskyUrl: string | null;
    try {
      bskyUrl = await publishProject(project, {
        baseUrl: BASE_URL, dryRun: DRY_RUN, submitterLogin: entry.submitter, githubToken: TOKEN || undefined,
      });
    } catch (err) {
      console.warn(`  ⚠ ${entry.repo}: not posted, stays queued — ${(err as Error).message}`);
      continue;
    }
    if (!bskyUrl) continue; // dry run

    // Saved after every post: a failure further down must not lose it or repost it.
    posted = recordPost(project.repo, 'bsky', bskyUrl, posted, { communityPick: true });
    queue  = dequeue(queue, entry.repo);
    savePosted(posted);
    writeQueue(queue);
    changed = true;
    console.log(`BSKY_POST_URL=${bskyUrl}`);

    if (process.env.SKIP_NOTIFY_REPO && same(process.env.SKIP_NOTIFY_REPO, entry.repo)) continue;
    try {
      await closeIssue(entry, project.name, bskyUrl);
    } catch (err) {
      console.warn(`  ⚠ #${entry.issue}: follow-up failed — ${(err as Error).message}`);
    }
  }

  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\n`);
}

main().catch(err => { console.error(err); process.exit(1); });
