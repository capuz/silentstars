/**
 * email/templates.ts — pure HTML templates for notification emails.
 *
 * Templates receive all data as arguments and never read process.env.
 */

export interface EmailData {
  projectName: string;
  projectSlug: string;
  baseUrl: string;
  bskyPostUrl: string;
  xPostUrl: string;
}

function cardUrl(d: EmailData) { return `${d.baseUrl}/projects/${d.projectSlug}/`; }
function ogImageUrl(d: EmailData) { return `${d.baseUrl}/og/${d.projectSlug}.png`; }

export function acceptedHtml(d: EmailData): string {
  const bskyCta = d.bskyPostUrl
    ? `<a href="${d.bskyPostUrl}" style="display:inline-block;background:#0085ff;color:#ffffff;padding:11px 22px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;margin:0 10px 10px 0;">See the post on Bluesky →</a>`
    : '';
  const xCta = d.xPostUrl
    ? `<a href="${d.xPostUrl}" style="display:inline-block;background:#000000;color:#ffffff;padding:11px 22px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;border:1px solid #30363d;margin:0 10px 10px 0;">See the post on X →</a>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${d.projectName} is on SilentStars</title>
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
            <a href="${cardUrl(d)}" style="display:block;text-decoration:none;">
              <img src="${ogImageUrl(d)}"
                   alt="${d.projectName}"
                   width="560"
                   style="width:100%;max-width:560px;border-radius:12px;display:block;border:1px solid #21262d;">
            </a>
          </td></tr>

          <tr><td style="padding-bottom:14px;">
            <h1 style="margin:0;color:#e6edf3;font-size:22px;font-weight:600;line-height:1.3;font-family:system-ui,-apple-system,sans-serif;">
              ${d.projectName} is now on SilentStars ⭐
            </h1>
          </td></tr>

          <tr><td style="padding-bottom:24px;">
            <p style="margin:0;color:#8b949e;font-size:15px;line-height:1.7;">
              Your project has been accepted into the SilentStars directory —
              a curated index of undervalued open source projects that deserve more visibility.
              It will be refreshed nightly and featured in our daily posts.
            </p>
          </td></tr>

          <tr><td style="padding-top:12px;padding-bottom:30px;">
            <a href="${cardUrl(d)}" style="display:inline-block;background:#238636;color:#ffffff;padding:11px 22px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;margin:0 10px 10px 0;">View your card →</a>${bskyCta}${xCta}
          </td></tr>

          <tr><td style="border-top:1px solid #21262d;padding-top:24px;">
            <p style="margin:0;color:#484f58;font-size:12px;line-height:1.6;">
              This email was sent because a submission for <strong style="color:#6e7681;">${d.projectName}</strong>
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

export function featuredHtml(d: EmailData): string {
  const bskyCta = d.bskyPostUrl
    ? `<a href="${d.bskyPostUrl}" style="display:inline-block;background:#0085ff;color:#ffffff;padding:11px 22px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;margin:0 10px 10px 0;">See the post on Bluesky →</a>`
    : '';
  const xCta = d.xPostUrl
    ? `<a href="${d.xPostUrl}" style="display:inline-block;background:#000000;color:#ffffff;padding:11px 22px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;border:1px solid #30363d;margin:0 10px 10px 0;">See the post on X →</a>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${d.projectName} was featured on SilentStars</title>
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
            <a href="${cardUrl(d)}" style="display:block;text-decoration:none;">
              <img src="${ogImageUrl(d)}"
                   alt="${d.projectName}"
                   width="560"
                   style="width:100%;max-width:560px;border-radius:12px;display:block;border:1px solid #21262d;">
            </a>
          </td></tr>

          <tr><td style="padding-bottom:14px;">
            <h1 style="margin:0;color:#e6edf3;font-size:22px;font-weight:600;line-height:1.3;font-family:system-ui,-apple-system,sans-serif;">
              ${d.projectName} was featured on SilentStars ⭐
            </h1>
          </td></tr>

          <tr><td style="padding-bottom:24px;">
            <p style="margin:0;color:#8b949e;font-size:15px;line-height:1.7;">
              We came across <strong style="color:#c9d1d9;">${d.projectName}</strong> and thought it deserved more
              visibility, so we added it to SilentStars — a curated directory of undervalued open source projects —
              and featured it in today's daily post. No action needed on your end; just wanted you to know.
            </p>
          </td></tr>

          <tr><td style="padding-top:12px;padding-bottom:30px;">
            <a href="${cardUrl(d)}" style="display:inline-block;background:#238636;color:#ffffff;padding:11px 22px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;margin:0 10px 10px 0;">View your card →</a>${bskyCta}${xCta}
          </td></tr>

          <tr><td style="border-top:1px solid #21262d;padding-top:24px;">
            <p style="margin:0;color:#484f58;font-size:12px;line-height:1.6;">
              This email was sent because <strong style="color:#6e7681;">${d.projectName}</strong> was featured on
              SilentStars. We found your public GitHub email and wanted to let you know — feel free to ignore this
              if it's not relevant to you.
            </p>
          </td></tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function alreadyListedHtml(d: EmailData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${d.projectName} is already on SilentStars</title>
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
            <a href="${cardUrl(d)}" style="display:block;text-decoration:none;">
              <img src="${ogImageUrl(d)}"
                   alt="${d.projectName}"
                   width="560"
                   style="width:100%;max-width:560px;border-radius:12px;display:block;border:1px solid #21262d;">
            </a>
          </td></tr>

          <tr><td style="padding-bottom:14px;">
            <h1 style="margin:0;color:#e6edf3;font-size:22px;font-weight:600;line-height:1.3;font-family:system-ui,-apple-system,sans-serif;">
              ${d.projectName} is already on SilentStars ✓
            </h1>
          </td></tr>

          <tr><td style="padding-bottom:30px;">
            <p style="margin:0;color:#8b949e;font-size:15px;line-height:1.7;">
              Thanks for the submission! <strong style="color:#c9d1d9;">${d.projectName}</strong> is
              already listed in the SilentStars directory with live metrics,
              a vitality score, and a daily post rotation. See it below.
            </p>
          </td></tr>

          <tr><td style="padding-bottom:40px;">
            <a href="${cardUrl(d)}" style="display:inline-block;background:#238636;color:#ffffff;padding:11px 22px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;">See your card →</a>
          </td></tr>

          <tr><td style="border-top:1px solid #21262d;padding-top:24px;">
            <p style="margin:0;color:#484f58;font-size:12px;line-height:1.6;">
              This email was sent because a submission for <strong style="color:#6e7681;">${d.projectName}</strong>
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
