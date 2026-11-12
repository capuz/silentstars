/**
 * weekly-email-build.ts — the Monday email for a /weekly/ edition: the edition card,
 * a main link to the star trails on /weekly/, the top projects of each non-empty
 * section with their notes, and a secondary link to the edition page.
 * Pure: send-weekly-email.ts does the I/O.
 */

import { ITEMS_PER_SECTION, SECTIONS } from './weekly-post-build.ts';
import { formatWeekRange } from './weekly.ts';
import type { NumberedEdition, EditionItem } from './weekly.ts';

export interface WeeklyEmail {
  subject: string;
  html: string;
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const FONT = "system-ui,-apple-system,'Segoe UI',Helvetica,sans-serif";

function section(title: string, items: EditionItem[], notes: Record<string, string>, baseUrl: string): string {
  const shown = items.slice(0, ITEMS_PER_SECTION);
  const more = items.length - shown.length;
  const rows = shown.map(i => `
          <tr><td style="padding:0 0 12px;">
            <a href="${esc(`${baseUrl}/projects/${i.slug}/`)}" style="color:#e6edf3;font-size:15px;font-weight:600;text-decoration:none;">${esc(i.name)}</a>
            <span style="color:#6e7681;font-size:12px;font-family:monospace;"> ${esc(i.repo)}</span>
            <p style="margin:4px 0 0;color:#8b949e;font-size:14px;line-height:1.6;">${esc(notes[i.repo] ?? i.reason)}</p>
          </td></tr>`).join('');
  return `
          <tr><td style="padding:20px 0 12px;border-top:1px solid #21262d;">
            <h2 style="margin:0;color:#e6edf3;font-size:17px;font-weight:600;font-family:${FONT};">${esc(title)}</h2>
          </td></tr>${rows}${more > 0 ? `
          <tr><td style="padding:0 0 12px;color:#6e7681;font-size:13px;">+${more} more</td></tr>` : ''}`;
}

export function buildWeeklyEmail(edition: NumberedEdition, notes: Record<string, string>, baseUrl: string): WeeklyEmail {
  const range = formatWeekRange(edition.week);
  const subject = `SilentStars · Edition #${edition.issue} · ${range}`;
  const trailsUrl = `${baseUrl}/weekly/`;
  const pageUrl = `${baseUrl}/weekly/${edition.week}/`;
  const present = SECTIONS.filter(s => edition[s.key].length > 0);
  const counts = present.map(s => `${s.icon} ${edition[s.key].length} ${s.count}`).join(' · ');

  // A content block, not a whole document: Buttondown wraps it in its own template.
  const html = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#0d1117" style="font-family:${FONT};border-radius:12px;">
    <tr>
      <td align="center" style="padding:40px 20px 56px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <tr><td style="padding-bottom:20px;">
            <span style="color:#7d8590;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;font-family:monospace;">SilentStars · Edition #${edition.issue}</span>
          </td></tr>

          <tr><td style="padding-bottom:24px;">
            <a href="${esc(trailsUrl)}" style="display:block;text-decoration:none;">
              <img src="${esc(`${baseUrl}/og/weekly/${edition.week}.png`)}" alt="SilentStars · Edition #${edition.issue} · ${esc(range)}" width="560"
                   style="width:100%;max-width:560px;border-radius:12px;display:block;border:1px solid #21262d;">
            </a>
          </td></tr>

          <tr><td style="padding-bottom:10px;">
            <h1 style="margin:0;color:#e6edf3;font-size:22px;font-weight:600;line-height:1.3;">What moved in small open source, ${esc(range)}</h1>
          </td></tr>
          <tr><td style="padding-bottom:22px;color:#8b949e;font-size:15px;line-height:1.7;">${esc(counts)}</td></tr>

          <tr><td style="padding-bottom:28px;">
            <a href="${esc(trailsUrl)}" style="display:inline-block;background:#ffe4aa;color:#070b18;padding:12px 24px;border-radius:999px;text-decoration:none;font-size:15px;font-weight:700;">Watch the star trails →</a>
          </td></tr>
${present.map(s => section(`${s.icon} ${s.title}`, edition[s.key], notes, baseUrl)).join('')}

          <tr><td style="padding:18px 0 28px;border-top:1px solid #21262d;">
            <a href="${esc(pageUrl)}" style="color:#ffe4aa;font-size:14px;text-decoration:underline;">Read the full edition →</a>
          </td></tr>

          <tr><td style="color:#484f58;font-size:12px;line-height:1.6;">
            Numbers come from GitHub. The notes are written by Claude from each project's commits and releases.
          </td></tr>

        </table>
      </td>
    </tr>
  </table>`;

  return { subject, html };
}
