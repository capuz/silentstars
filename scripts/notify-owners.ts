/**
 * notify-owners.ts — one-off outreach: email repo owners whose project was
 * auto-discovered and featured, letting them know (unlike the submission
 * flow, these owners never asked to be listed and have no captured email).
 *
 * Only sends to owners with a public GitHub email — no other lookup is
 * attempted, and repos without one are skipped, not retried.
 *
 * Idempotent: a successful send is recorded in data/posted.json under
 * platforms.ownerEmail, so re-running the script never emails the same
 * repo twice.
 *
 * Usage: npx tsx scripts/notify-owners.ts
 * Env:
 *   RESEND_API_KEY      — required
 *   NOTIFY_FROM_EMAIL   — required
 *   NOTIFY_BCC          — optional (e.g. fcapuz@gmail.com)
 *   GITHUB_TOKEN        — required (to resolve owners' public email)
 *   SLUGS               — optional, comma-separated project slugs to target
 *                          instead of the 5 most recently posted
 *   LIMIT               — optional, default 5 (ignored if SLUGS is set)
 *   BASE_URL            — optional (default: https://capuz.github.io/silentstars)
 *   DRY_RUN             — optional
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { type EmailData, featuredHtml } from './email/templates.ts';
import { sendEmail } from './email/sender.ts';
import { type PostedEntry, type LatestData, loadPosted, savePosted, recordPost, resolveGithubPublicEmail } from './post-shared.ts';

const DRY_RUN   = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';
const FROM      = process.env.NOTIFY_FROM_EMAIL ?? '';
const BCC       = process.env.NOTIFY_BCC ?? '';
const TOKEN     = process.env.GITHUB_TOKEN ?? '';
const BASE_URL  = (process.env.BASE_URL ?? 'https://capuz.github.io/silentstars').replace(/\/$/, '');
const LIMIT     = Number(process.env.LIMIT ?? '5');

async function main() {
  if (!process.env.RESEND_API_KEY) { console.log('No RESEND_API_KEY — aborting.'); return; }
  if (!FROM) { console.log('No NOTIFY_FROM_EMAIL — aborting.'); return; }
  if (!TOKEN) { console.log('No GITHUB_TOKEN — aborting.'); return; }

  const posted = loadPosted();
  const latest: LatestData = JSON.parse(
    readFileSync(join(process.cwd(), 'data', 'latest.json'), 'utf8'),
  );

  const slugsArg = (process.env.SLUGS ?? '').split(',').map((s: string) => s.trim()).filter(Boolean);
  const targets: PostedEntry[] = slugsArg.length > 0
    ? slugsArg
        .map((slug: string) => posted.find((e: PostedEntry) => e.slug === slug))
        .filter((e: PostedEntry | undefined): e is PostedEntry => !!e)
    : posted.slice(-LIMIT);

  let sent = 0, skippedNoEmail = 0, skippedAlready = 0;
  let workingPosted = posted;

  for (const entry of targets) {
    if (entry.platforms.ownerEmail) {
      console.log(`SKIP ${entry.repo}: already notified (${entry.platforms.ownerEmail.url})`);
      skippedAlready++;
      continue;
    }

    const owner = entry.repo.split('/')[0];
    const email = await resolveGithubPublicEmail(owner, TOKEN);
    if (!email) {
      console.log(`SKIP ${entry.repo}: no public email for owner "${owner}"`);
      skippedNoEmail++;
      continue;
    }

    const project = latest.projects.find(p => p.repo.toLowerCase() === entry.repo.toLowerCase());
    const projectName = project?.name ?? entry.repo.split('/')[1];

    const data: EmailData = {
      projectName,
      projectSlug: entry.slug,
      baseUrl: BASE_URL,
      bskyPostUrl: entry.platforms.bsky?.url ?? '',
      xPostUrl: entry.platforms.x?.url ?? '',
    };

    const subject = `${projectName} was featured on SilentStars ⭐`;
    const html = featuredHtml(data);

    console.log(`${DRY_RUN ? '[DRY RUN] ' : ''}Notifying ${owner} <${email}> about ${entry.repo}`);
    console.log(`Subject: ${subject}`);

    if (DRY_RUN) { sent++; continue; }

    await sendEmail({
      apiKey: process.env.RESEND_API_KEY!,
      from: FROM,
      to: email,
      subject,
      html,
      bcc: BCC || undefined,
    });
    console.log(`✓ Sent to ${email}`);

    workingPosted = recordPost(entry.repo, 'ownerEmail', email, workingPosted);
    sent++;
  }

  if (!DRY_RUN && sent > 0) savePosted(workingPosted);

  console.log(`\nDone. sent=${sent} skipped_no_email=${skippedNoEmail} skipped_already_notified=${skippedAlready}`);
}

main().catch(err => { console.error(err); process.exit(1); });
