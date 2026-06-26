/**
 * process-submission.ts — validates a SilentStars project submission issue
 *
 * Reads the issue body, validates the submitted repo against GitHub API,
 * checks for duplicates, posts a comment, labels, and closes the issue.
 * Writes structured outputs to $GITHUB_OUTPUT for the workflow to act on.
 *
 * Env vars:
 *   GITHUB_TOKEN       — required
 *   ISSUE_NUMBER       — required (GitHub issue number)
 *   ISSUE_AUTHOR_LOGIN — required (GitHub login of submitter)
 *   REPO_OWNER         — required (e.g. capuz)
 *   REPO_NAME          — required (e.g. silentstars)
 *   DRY_RUN            — optional, skip GitHub API writes
 */

import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';

const ISSUE_NUMBER     = Number(process.env.ISSUE_NUMBER ?? '0');
const ISSUE_AUTHOR     = process.env.ISSUE_AUTHOR_LOGIN ?? '';
const REPO_OWNER       = process.env.REPO_OWNER ?? '';
const REPO_NAME_GH     = process.env.REPO_NAME ?? '';

type SubmissionStatus = 'accepted' | 'already_listed' | 'already_seeded' | 'rejected' | 'skipped';

interface GitHubRepo {
  full_name: string;
  name: string;
  description: string | null;
  private: boolean;
  archived: boolean;
  stargazers_count: number;
  pushed_at: string;
}

// ──────────────────────────────────────────────────────────────────────────────
// GITHUB_OUTPUT helpers
// ──────────────────────────────────────────────────────────────────────────────

function setOutput(key: string, value: string) {
  const singleLine = value.replace(/[\r\n]+/g, ' ').trim();
  const file = process.env.GITHUB_OUTPUT;
  if (file) appendFileSync(file, `${key}=${singleLine}\n`);
  console.log(`  [output] ${key}=${singleLine}`);
}

// ──────────────────────────────────────────────────────────────────────────────
// Body parsing
// ──────────────────────────────────────────────────────────────────────────────

function parseIssueBody(body: string): { repo: string; email: string } {
  const extract = (label: string): string => {
    // GitHub YAML template renders as:  ### Label\n\nvalue\n\n### Next...
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const m = body.match(new RegExp(`###\\s+${escaped}\\s*\\n+([\\s\\S]*?)(?=\\n###|$)`));
    return m ? m[1].trim() : '';
  };
  return {
    repo:  extract('GitHub repo (owner/repo)'),
    email: extract('Email de contacto (opcional)'),
  };
}

function repoToSlug(repo: string): string {
  return repo.toLowerCase().replace('/', '--');
}

// ──────────────────────────────────────────────────────────────────────────────
// Duplicate checks (reads local data files)
// ──────────────────────────────────────────────────────────────────────────────

function isInSeedTxt(repo: string): boolean {
  const p = resolve(ROOT, 'data', 'seed.txt');
  if (!existsSync(p)) return false;
  return readFileSync(p, 'utf8')
    .split('\n')
    .some(l => l.trim().toLowerCase() === repo.toLowerCase());
}

function isInPromotedJson(repo: string): boolean {
  const p = resolve(ROOT, 'data', 'promoted.json');
  if (!existsSync(p)) return false;
  const entries = JSON.parse(readFileSync(p, 'utf8')) as Array<{ repo: string; until: string | null }>;
  const now = new Date();
  return entries.some(e =>
    e.repo.toLowerCase() === repo.toLowerCase() &&
    (!e.until || new Date(e.until) > now),
  );
}

function appendToPromotedJson(repo: string) {
  const p = resolve(ROOT, 'data', 'promoted.json');
  const entries: Array<{ repo: string; until: string | null }> = existsSync(p)
    ? JSON.parse(readFileSync(p, 'utf8'))
    : [];
  const until = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  entries.push({ repo, until });
  writeFileSync(p, JSON.stringify(entries, null, 2));
}

function isInLatestJson(repo: string): boolean {
  const p = resolve(ROOT, 'data', 'latest.json');
  if (!existsSync(p)) return false;
  const { projects } = JSON.parse(readFileSync(p, 'utf8'));
  return (projects as Array<{ repo: string }>)
    .some(proj => proj.repo.toLowerCase() === repo.toLowerCase());
}

// ──────────────────────────────────────────────────────────────────────────────
// GitHub API
// ──────────────────────────────────────────────────────────────────────────────

async function ghFetch<T>(path: string, init?: RequestInit): Promise<{ ok: boolean; status: number; data: T }> {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  });
  const data = await res.json() as T;
  return { ok: res.ok, status: res.status, data };
}

async function fetchRepo(repo: string): Promise<GitHubRepo | null> {
  const { ok, status, data } = await ghFetch<GitHubRepo>(`/repos/${repo}`);
  if (status === 404) return null;
  if (!ok) throw new Error(`GitHub API /repos/${repo}: ${status}`);
  return data;
}

async function fetchUserEmail(login: string): Promise<string> {
  const { ok, data } = await ghFetch<{ email?: string | null }>(`/users/${login}`);
  if (!ok) return '';
  return data.email ?? '';
}

async function fetchIssueBody(owner: string, repo: string, number: number): Promise<string> {
  const { ok, data } = await ghFetch<{ body?: string | null }>(
    `/repos/${owner}/${repo}/issues/${number}`,
  );
  if (!ok) throw new Error(`Could not fetch issue #${number}`);
  return data.body ?? '';
}

async function commentIssue(body: string) {
  if (DRY_RUN) { console.log(`[DRY RUN] comment: ${body.slice(0, 80)}...`); return; }
  await ghFetch(`/repos/${REPO_OWNER}/${REPO_NAME_GH}/issues/${ISSUE_NUMBER}/comments`, {
    method: 'POST',
    body: JSON.stringify({ body }),
  });
}

async function labelIssue(labels: string[]) {
  if (DRY_RUN) { console.log(`[DRY RUN] label: ${labels.join(', ')}`); return; }
  await ghFetch(`/repos/${REPO_OWNER}/${REPO_NAME_GH}/issues/${ISSUE_NUMBER}/labels`, {
    method: 'POST',
    body: JSON.stringify({ labels }),
  });
}

async function closeIssue(reason: 'completed' | 'not_planned') {
  if (DRY_RUN) { console.log(`[DRY RUN] close: ${reason}`); return; }
  await ghFetch(`/repos/${REPO_OWNER}/${REPO_NAME_GH}/issues/${ISSUE_NUMBER}`, {
    method: 'PATCH',
    body: JSON.stringify({ state: 'closed', state_reason: reason }),
  });
}

// ──────────────────────────────────────────────────────────────────────────────
// Outcome helpers
// ──────────────────────────────────────────────────────────────────────────────

async function handleSkipped() {
  setOutput('status', 'skipped');
  console.log('Not a submission template — skipping.');
}

async function handleRejected(repo: string, slug: string, projectName: string, reason: string) {
  setOutput('status', 'rejected');
  setOutput('repo', repo);
  setOutput('slug', slug);
  setOutput('project_name', projectName);
  setOutput('reason', reason);
  setOutput('submitter_email', '');

  await commentIssue(
    `Hey @${ISSUE_AUTHOR}! 👋\n\nThanks for the submission. Unfortunately, **${projectName}** doesn't meet the current criteria:\n\n> ${reason}\n\nFor reference, SilentStars accepts projects that:\n- Are public and not archived\n- Have fewer than **5,000 stars** — we focus on undervalued projects the algorithm hasn't noticed yet\n- Have had at least one commit in the **last 90 days**\n\nFeel free to resubmit if the situation changes!`,
  );
  await labelIssue(['rejected']);
  await closeIssue('not_planned');
}

async function handleAlreadySeeded(repo: string, slug: string) {
  setOutput('status', 'already_seeded');
  setOutput('repo', repo);
  setOutput('slug', slug);
  setOutput('project_name', repo.split('/')[1] ?? repo);
  setOutput('reason', '');
  setOutput('submitter_email', '');

  await commentIssue(
    `Hey @${ISSUE_AUTHOR}! 👋\n\n\`${repo}\` has already been submitted and will appear in SilentStars after the next nightly collection cycle. Hang tight! ⭐`,
  );
  await labelIssue(['already-listed']);
  await closeIssue('completed');
}

async function handleAlreadyListed(
  repo: string,
  slug: string,
  projectName: string,
  submitterEmail: string,
  baseUrl: string,
) {
  setOutput('status', 'already_listed');
  setOutput('repo', repo);
  setOutput('slug', slug);
  setOutput('project_name', projectName);
  setOutput('reason', '');
  setOutput('submitter_email', submitterEmail);

  const cardUrl = `${baseUrl}/projects/${slug}/`;
  await commentIssue(
    `Hey @${ISSUE_AUTHOR}! 👋\n\n**${projectName}** is already on SilentStars! Check out its live card:\n\n🔗 ${cardUrl}\n\nThanks for the submission — we'll send a notification if we have your email.`,
  );
  await labelIssue(['already-listed']);
  await closeIssue('completed');
}

async function handleAccepted(
  repo: string,
  slug: string,
  projectName: string,
  submitterEmail: string,
) {
  setOutput('status', 'accepted');
  setOutput('repo', repo);
  setOutput('slug', slug);
  setOutput('project_name', projectName);
  setOutput('reason', '');
  setOutput('submitter_email', submitterEmail);

  // Write to promoted.json with 30-day expiry (workflow will git commit this)
  if (!DRY_RUN) appendToPromotedJson(repo);

  // Initial acknowledgement — final comment with card + post links comes from the notify job
  await commentIssue(
    `Hey @${ISSUE_AUTHOR}! ✅\n\n**${projectName}** looks great and has been accepted!\n\nWe're building your card and preparing the Bluesky post right now — this usually takes a few minutes. We'll update this issue with the links when everything is live. Thanks for the awesome submission! ⭐`,
  );
  await labelIssue(['submission']);
  // Issue stays OPEN — the notify job closes it after the pipeline finishes
}

// ──────────────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────────────

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is required');
  if (!ISSUE_NUMBER) throw new Error('ISSUE_NUMBER is required');
  if (!REPO_OWNER || !REPO_NAME_GH) throw new Error('REPO_OWNER and REPO_NAME are required');

  const baseUrl = (process.env.BASE_URL ?? 'https://capuz.github.io/silentstars').replace(/\/$/, '');

  // Fetch issue body from API (more reliable than env var for multiline content)
  const issueBody = await fetchIssueBody(REPO_OWNER, REPO_NAME_GH, ISSUE_NUMBER);

  // Guard: only process submission template issues
  if (!issueBody.includes('### GitHub repo (owner/repo)')) {
    return handleSkipped();
  }

  const { repo: rawRepo, email: templateEmail } = parseIssueBody(issueBody);

  // Normalize: accept full GitHub URLs (https://github.com/owner/repo) or bare owner/repo
  const normalizeRepo = (raw: string): string | null => {
    const trimmed = raw.trim().replace(/\/$/, '');
    // Full URL: https://github.com/owner/repo or github.com/owner/repo
    const urlMatch = trimmed.match(/(?:https?:\/\/)?github\.com\/([^/\s]+\/[^/\s]+)/i);
    if (urlMatch) return urlMatch[1];
    // Bare owner/repo
    if (/^[\w.-]+\/[\w.-]+$/.test(trimmed)) return trimmed;
    return null;
  };

  const repo = normalizeRepo(rawRepo ?? '');
  if (!repo) {
    return handleRejected(
      rawRepo || '(empty)',
      '',
      rawRepo || '(empty)',
      'Invalid repo format. Expected `owner/repo` or a full GitHub URL (e.g. `https://github.com/torvalds/linux`).',
    );
  }
  const slug = repoToSlug(repo);

  // Duplicate checks (cheap, no API call)
  if (isInLatestJson(repo)) {
    const email = templateEmail || await fetchUserEmail(ISSUE_AUTHOR);
    return handleAlreadyListed(repo, slug, repo.split('/')[1] ?? repo, email, baseUrl);
  }

  if (isInSeedTxt(repo) || isInPromotedJson(repo)) {
    return handleAlreadySeeded(repo, slug);
  }

  // Validate via GitHub API
  const ghRepo = await fetchRepo(repo);

  if (!ghRepo) {
    return handleRejected(repo, slug, repo.split('/')[1] ?? repo,
      `Repository \`${repo}\` not found on GitHub. Please check the name and make sure it's public.`,
    );
  }

  if (ghRepo.private) {
    return handleRejected(repo, slug, ghRepo.name,
      'The repository is private. SilentStars only tracks public repositories.',
    );
  }

  if (ghRepo.archived) {
    return handleRejected(repo, slug, ghRepo.name,
      'The repository is archived. SilentStars tracks actively maintained projects.',
    );
  }

  if (ghRepo.stargazers_count >= 5000) {
    return handleRejected(repo, slug, ghRepo.name,
      `The repository has ${ghRepo.stargazers_count.toLocaleString()} stars. SilentStars focuses on projects under 5,000 stars — the ones the algorithm hasn't noticed yet.`,
    );
  }

  const daysSinceLastPush = (Date.now() - new Date(ghRepo.pushed_at).getTime()) / 86_400_000;
  if (daysSinceLastPush > 90) {
    return handleRejected(repo, slug, ghRepo.name,
      `The last commit was ${Math.round(daysSinceLastPush)} days ago. SilentStars requires at least one commit in the last 90 days.`,
    );
  }

  // All checks passed
  const email = templateEmail || await fetchUserEmail(ISSUE_AUTHOR);
  return handleAccepted(repo, slug, ghRepo.name, email);
}

main().catch(err => { console.error(err); process.exit(1); });
