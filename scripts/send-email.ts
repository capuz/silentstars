/**
 * send-email.ts — sends a notification email via Resend
 *
 * Thin entrypoint: reads env vars, picks a template (./email/templates.ts)
 * and delivers through the provider layer (./email/sender.ts).
 *
 * Env vars:
 *   RESEND_API_KEY      — required
 *   NOTIFY_FROM_EMAIL   — required (verified sender in Resend, e.g. hello@silentstars.dev)
 *   TO_EMAIL            — required (recipient)
 *   EMAIL_TYPE          — required: "accepted" | "already_listed"
 *   PROJECT_NAME        — required
 *   PROJECT_SLUG        — required (e.g. shik3i--koalasync)
 *   BSKY_POST_URL       — optional (Bluesky post URL, only for "accepted")
 *   BASE_URL            — optional (default: https://capuz.github.io/silentstars)
 *   DRY_RUN             — optional
 */

import { type EmailData, acceptedHtml, alreadyListedHtml } from './email/templates.ts';
import { sendEmail } from './email/sender.ts';

const DRY_RUN    = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';
const EMAIL_TYPE = (process.env.EMAIL_TYPE ?? 'accepted') as 'accepted' | 'already_listed';
const TO_EMAIL   = process.env.TO_EMAIL ?? '';
const FROM_EMAIL = process.env.NOTIFY_FROM_EMAIL ?? '';

const data: EmailData = {
  projectName:  process.env.PROJECT_NAME ?? '',
  projectSlug:  process.env.PROJECT_SLUG ?? '',
  baseUrl:      (process.env.BASE_URL ?? 'https://capuz.github.io/silentstars').replace(/\/$/, ''),
  bskyPostUrl:  process.env.BSKY_POST_URL ?? '',
};

async function main() {
  if (!TO_EMAIL) {
    console.log('No TO_EMAIL — skipping email send.');
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    console.log('No RESEND_API_KEY — skipping email send.');
    return;
  }

  if (!FROM_EMAIL) {
    console.log('No NOTIFY_FROM_EMAIL — skipping email send.');
    return;
  }

  const subjects: Record<string, string> = {
    accepted:       `${data.projectName} is now on SilentStars ⭐`,
    already_listed: `${data.projectName} is already on SilentStars ✓`,
  };

  const html = EMAIL_TYPE === 'already_listed' ? alreadyListedHtml(data) : acceptedHtml(data);
  const subject = subjects[EMAIL_TYPE] ?? subjects.accepted;

  console.log(`Sending "${EMAIL_TYPE}" email to ${TO_EMAIL}`);
  console.log(`Subject: ${subject}`);
  if (data.bskyPostUrl) console.log(`Bluesky post: ${data.bskyPostUrl}`);

  if (DRY_RUN) {
    if (process.env.EMAIL_PREVIEW_PATH) {
      const { writeFileSync } = await import('node:fs');
      writeFileSync(process.env.EMAIL_PREVIEW_PATH, html);
      console.log(`[DRY RUN] Preview written to ${process.env.EMAIL_PREVIEW_PATH}`);
    }
    console.log('[DRY RUN] Not sending.');
    return;
  }

  await sendEmail({
    apiKey: process.env.RESEND_API_KEY,
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject,
    html,
  });
  console.log('✓ Email sent.');
}

main().catch(err => { console.error(err); process.exit(1); });
