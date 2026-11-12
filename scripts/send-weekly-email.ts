/**
 * send-weekly-email.ts — emails the latest closed /weekly/ edition through Buttondown
 * (see weekly-email-build.ts).
 *
 * Two modes:
 *   preview  creates the email as a Buttondown draft and sends that draft only to
 *            PREVIEW_TO (send-draft). Subscribers get nothing.
 *   send     sends it to the whole list. Idempotent: data/sent-weekly-email.json records
 *            each sent edition, and an already sent edition is a no-op.
 *
 * Buttondown's default status is about_to_send, which mails everyone at once, so every
 * request here states its status explicitly.
 *
 * Usage: tsx scripts/send-weekly-email.ts [--dry-run]
 * Env:   MODE (preview | send, default preview), PREVIEW_TO (preview), BUTTONDOWN_API_KEY
 *        (unless dry run), BASE_URL, DRY_RUN
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { listEditions } from './weekly.ts';
import type { History } from './weekly.ts';
import type { NotesCache } from './weekly-notes.ts';
import { buildWeeklyEmail } from './weekly-email-build.ts';

const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';
const MODE = process.env.MODE ?? 'preview';
const API = 'https://api.buttondown.com/v1';
const DATA = join(process.cwd(), 'data');
const SENT_PATH = join(DATA, 'sent-weekly-email.json');

type SentWeekly = Record<string, { id: string; sentAt: string }>;

const readJson = <T>(path: string, fallback: T): T =>
  existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) as T : fallback;

async function buttondown<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: { Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`Buttondown ${path}: ${res.status} ${text.slice(0, 300)}`);
  return (text ? JSON.parse(text) : {}) as T;
}

async function main(): Promise<void> {
  if (MODE !== 'preview' && MODE !== 'send') throw new Error(`MODE must be preview or send, got "${MODE}"`);
  const previewTo = (process.env.PREVIEW_TO ?? '').trim();
  if (MODE === 'preview' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(previewTo)) throw new Error('preview needs PREVIEW_TO set to an email address');

  const history = readJson<History>(join(DATA, 'history.json'), {});
  const notes = readJson<NotesCache>(join(DATA, 'weekly-notes.json'), {});
  const sent = readJson<SentWeekly>(SENT_PATH, {});

  const edition = listEditions(history, new Date()).at(-1);
  if (!edition) throw new Error('No closed weekly edition in data/history.json');
  if (MODE === 'send' && sent[edition.week]) {
    console.log(`Edition ${edition.week} already emailed (${sent[edition.week]!.id}) — nothing to do.`);
    return;
  }

  const baseUrl = (process.env.BASE_URL ?? 'https://silentstars.dev').replace(/\/$/, '');
  const editionNotes = notes[edition.week] ?? {};
  if (Object.keys(editionNotes).length === 0) console.warn(`⚠ No Claude notes for ${edition.week}: using template lines`);
  const { subject, html } = buildWeeklyEmail(edition, editionNotes, baseUrl);

  console.log(`─── weekly email (${MODE}): ${edition.week} · edition #${edition.issue} ───`);
  console.log(`subject: ${subject}`);
  console.log(`links:   ${[...new Set(html.match(/href="[^"]+"/g) ?? [])].length} unique, main → ${baseUrl}/weekly/`);
  console.log(`html:    ${html.length} chars`);

  if (DRY_RUN) {
    console.log(html);
    console.log('Dry run — nothing sent.');
    return;
  }
  if (!process.env.BUTTONDOWN_API_KEY) throw new Error('BUTTONDOWN_API_KEY is required');

  // The editor-mode comment makes Buttondown treat the body as HTML, not Markdown.
  const body = `<!-- buttondown-editor-mode: fancy -->\n${html}`;
  const status = MODE === 'send' ? 'about_to_send' : 'draft';
  const email = await buttondown<{ id: string }>('/emails', {
    subject, body, status, image: `${baseUrl}/og/weekly/${edition.week}.png`,
    description: `What moved under the radar this week. Edition #${edition.issue}.`,
  });
  console.log(`✓ Buttondown email ${email.id} created as ${status}`);

  if (MODE === 'preview') {
    await buttondown(`/emails/${email.id}/send-draft`, { recipients: [previewTo] });
    console.log('✓ Draft sent to the preview address only. It stays as a draft in Buttondown.');
    return;
  }

  sent[edition.week] = { id: email.id, sentAt: new Date().toISOString() };
  writeFileSync(SENT_PATH, JSON.stringify(sent, null, 2) + '\n');
  console.log(`✓ Sent to the list and recorded in ${SENT_PATH}`);
}

main().catch(err => { console.error(err); process.exit(1); });
