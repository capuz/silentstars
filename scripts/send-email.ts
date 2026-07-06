/**
 * send-email.ts — sends a notification email via Resend
 *
 * Env vars:
 *   RESEND_API_KEY      — required
 *   NOTIFY_FROM_EMAIL   — required (verified sender in Resend, e.g. hello@silentstars.dev)
 *   TO_EMAIL            — required (recipient)
 *   EMAIL_TYPE          — required: "accepted" | "already_listed"
 *   PROJECT_NAME        — required
 *   PROJECT_SLUG        — required (e.g. shik3i--koalasync)
 *   BSKY_POST_URL       — optional (Bluesky post URL, only for "accepted")
 *   BSKY_POST_TEXT      — optional (Bluesky post text, only for "accepted")
 *   X_POST_URL          — optional (X.com post URL, only for "accepted")
 *   X_POST_TEXT         — optional (X.com post text, only for "accepted")
 *   BASE_URL            — optional (default: https://capuz.github.io/silentstars)
 *   DRY_RUN             — optional
 */

import { Resend } from 'resend';

const DRY_RUN         = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';
const BASE_URL        = (process.env.BASE_URL ?? 'https://capuz.github.io/silentstars').replace(/\/$/, '');
const EMAIL_TYPE      = (process.env.EMAIL_TYPE ?? 'accepted') as 'accepted' | 'already_listed';
const TO_EMAIL        = process.env.TO_EMAIL ?? '';
const FROM_EMAIL      = process.env.NOTIFY_FROM_EMAIL ?? '';
const PROJECT_NAME    = process.env.PROJECT_NAME ?? '';
const PROJECT_SLUG    = process.env.PROJECT_SLUG ?? '';
const BSKY_POST_URL   = process.env.BSKY_POST_URL ?? '';
const BSKY_POST_TEXT  = process.env.BSKY_POST_TEXT ?? '';
const X_POST_URL      = process.env.X_POST_URL ?? '';
const X_POST_TEXT     = process.env.X_POST_TEXT ?? '';

function cardUrl() { return `${BASE_URL}/projects/${PROJECT_SLUG}/`; }
function ogImageUrl() { return `${BASE_URL}/og/${PROJECT_SLUG}.png`; }
function esc(s: string) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

// ──────────────────────────────────────────────────────────────────────────────
// Email templates
// ──────────────────────────────────────────────────────────────────────────────

function postQuote(label: string, accentColor: string, text: string): string {
  return `
          <tr><td style="padding-bottom:20px;">
            <div style="border-left:3px solid ${accentColor};padding:14px 16px;background:#0a0f18;border-radius:0 8px 8px 0;">
              <p style="margin:0 0 8px 0;color:#7d8590;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">${label}</p>
              <p style="margin:0;color:#c9d1d9;font-size:14px;line-height:1.7;font-family:'SF Mono','Fira Code',monospace;white-space:pre-wrap;">${esc(text)}</p>
            </div>
          </td></tr>`;
}

function acceptedHtml(): string {
  const bskyCta = BSKY_POST_URL
    ? `<a href="${BSKY_POST_URL}" style="display:inline-block;background:#0085ff;color:#ffffff;padding:11px 22px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;margin:0 10px 10px 0;">See the post on Bluesky →</a>`
    : '';
  const xCta = X_POST_URL
    ? `<a href="${X_POST_URL}" style="display:inline-block;background:#000000;color:#ffffff;padding:11px 22px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;border:1px solid #30363d;margin:0 10px 10px 0;">See the post on X →</a>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${PROJECT_NAME} is on SilentStars</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:system-ui,-apple-system,'Segoe UI',Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#0d1117">
    <tr>
      <td align="center" style="padding:48px 20px 64px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <tr><td style="padding-bottom:32px;">
            <span style="color:#7d8590;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;font-family:monospace;">SilentStars</span>
          </td></tr>

          <tr><td style="padding-bottom:28px;">
            <a href="${cardUrl()}" style="display:block;text-decoration:none;">
              <img src="${ogImageUrl()}"
                   alt="${PROJECT_NAME}"
                   width="560"
                   style="width:100%;max-width:560px;border-radius:12px;display:block;border:1px solid #21262d;">
            </a>
          </td></tr>

          <tr><td style="padding-bottom:14px;">
            <h1 style="margin:0;color:#e6edf3;font-size:22px;font-weight:600;line-height:1.3;font-family:system-ui,-apple-system,sans-serif;">
              ${PROJECT_NAME} is now on SilentStars ⭐
            </h1>
          </td></tr>

          <tr><td style="padding-bottom:24px;">
            <p style="margin:0;color:#8b949e;font-size:15px;line-height:1.7;">
              Your project has been accepted into the SilentStars directory —
              a curated index of undervalued open source projects that deserve more visibility.
              It will be refreshed nightly and featured in our daily posts.
            </p>
          </td></tr>

          ${BSKY_POST_TEXT ? postQuote('Posted on Bluesky', '#1185fe', BSKY_POST_TEXT) : ''}
          ${X_POST_TEXT ? postQuote('Posted on X', '#71767b', X_POST_TEXT) : ''}

          <tr><td style="padding-top:12px;padding-bottom:30px;">
            <a href="${cardUrl()}" style="display:inline-block;background:#238636;color:#ffffff;padding:11px 22px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;margin:0 10px 10px 0;">View your card →</a>${bskyCta}${xCta}
          </td></tr>

          <tr><td style="border-top:1px solid #21262d;padding-top:24px;">
            <p style="margin:0;color:#484f58;font-size:12px;line-height:1.6;">
              This email was sent because a submission for <strong style="color:#6e7681;">${PROJECT_NAME}</strong>
              was accepted on SilentStars. Metrics are refreshed every night via GitHub Actions.
            </p>
          </td></tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function alreadyListedHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${PROJECT_NAME} is already on SilentStars</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:system-ui,-apple-system,'Segoe UI',Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#0d1117">
    <tr>
      <td align="center" style="padding:48px 20px 64px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <tr><td style="padding-bottom:32px;">
            <span style="color:#7d8590;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;font-family:monospace;">SilentStars</span>
          </td></tr>

          <tr><td style="padding-bottom:28px;">
            <a href="${cardUrl()}" style="display:block;text-decoration:none;">
              <img src="${ogImageUrl()}"
                   alt="${PROJECT_NAME}"
                   width="560"
                   style="width:100%;max-width:560px;border-radius:12px;display:block;border:1px solid #21262d;">
            </a>
          </td></tr>

          <tr><td style="padding-bottom:14px;">
            <h1 style="margin:0;color:#e6edf3;font-size:22px;font-weight:600;line-height:1.3;font-family:system-ui,-apple-system,sans-serif;">
              ${PROJECT_NAME} is already on SilentStars ✓
            </h1>
          </td></tr>

          <tr><td style="padding-bottom:30px;">
            <p style="margin:0;color:#8b949e;font-size:15px;line-height:1.7;">
              Thanks for the submission! <strong style="color:#c9d1d9;">${PROJECT_NAME}</strong> is
              already listed in the SilentStars directory with live metrics,
              a vitality score, and a daily post rotation. See it below.
            </p>
          </td></tr>

          <tr><td style="padding-bottom:40px;">
            <a href="${cardUrl()}" style="display:inline-block;background:#238636;color:#ffffff;padding:11px 22px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;">See your card →</a>
          </td></tr>

          <tr><td style="border-top:1px solid #21262d;padding-top:24px;">
            <p style="margin:0;color:#484f58;font-size:12px;line-height:1.6;">
              This email was sent because a submission for <strong style="color:#6e7681;">${PROJECT_NAME}</strong>
              was received on SilentStars. It was already in the directory.
            </p>
          </td></tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ──────────────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────────────

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
    accepted:       `${PROJECT_NAME} is now on SilentStars ⭐`,
    already_listed: `${PROJECT_NAME} is already on SilentStars ✓`,
  };

  const html = EMAIL_TYPE === 'already_listed' ? alreadyListedHtml() : acceptedHtml();
  const subject = subjects[EMAIL_TYPE] ?? subjects.accepted;

  console.log(`Sending "${EMAIL_TYPE}" email to ${TO_EMAIL}`);
  console.log(`Subject: ${subject}`);
  if (BSKY_POST_URL) console.log(`Bluesky post: ${BSKY_POST_URL}`);
  if (X_POST_URL) console.log(`X post: ${X_POST_URL}`);

  if (DRY_RUN) {
    if (process.env.EMAIL_PREVIEW_PATH) {
      const { writeFileSync } = await import('node:fs');
      writeFileSync(process.env.EMAIL_PREVIEW_PATH, html);
      console.log(`[DRY RUN] Preview written to ${process.env.EMAIL_PREVIEW_PATH}`);
    }
    console.log('[DRY RUN] Not sending.');
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({ from: FROM_EMAIL, to: TO_EMAIL, subject, html });

  if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
  console.log('✓ Email sent.');
}

main().catch(err => { console.error(err); process.exit(1); });
