# SilentStars

> Not famous. Not abandoned. Just building.

[![License](https://img.shields.io/github/license/capuz/silentstars)](LICENSE)
[![Nightly collect + deploy](https://github.com/capuz/silentstars/actions/workflows/collect.yml/badge.svg)](https://github.com/capuz/silentstars/actions/workflows/collect.yml)
[![Live site](https://img.shields.io/badge/site-live-brightgreen)](https://capuz.github.io/silentstars/)

A static site that surfaces open source projects that are **alive but invisible** — newborns, solo builders, projects that came back from the edge. Ranked by how much they deserve attention, not by star count.

**Live:** https://capuz.github.io/silentstars/?ref=githubrepo

---

## What this is

A directory of open source projects that are actively maintained but under-recognized. Every night the pipeline scores each tracked project on two axes — `healthScore` (is it alive right now?) and `undervaluedScore` (signal relative to reach) — classifies it into one of 7 vital states, and tags it with behavioral signals (`solo_builder`, `hidden_gem`, `fork_magnet`, `funded`, etc.) that drive the home page sections. One project is highlighted daily on Bluesky ([@silentstars-radar.bsky.social](https://bsky.app/profile/silentstars-radar.bsky.social)). ~280 projects are tracked as of this writing.

---

## Stack

- [Astro](https://astro.build) + TypeScript (content collections)
- GitHub Actions (nightly discover → collect → build → deploy)
- GitHub Pages — zero cost, zero backend

---

## How projects get in

### 1. Auto-discovery (nightly)

`scripts/discover.ts` queries the GitHub Search API each night and writes candidates
to `data/discovered.json`. `scripts/collect.ts` then merges all sources, deduplicates,
and drops any discovered repo whose `healthScore` falls below the threshold.

Configure discovery in `data/discovery.config.json`:

```json
{
  "starsRange": { "min": 5, "max": 500 },
  "pushedWithinDays": 90,
  "maxCandidatesPerNight": 250,
  "vitalityThreshold": 40
}
```

| Field | Description |
|---|---|
| `starsRange` | Avoids empty repos (0–4) and already-famous ones (>500) |
| `pushedWithinDays` | Only considers repos pushed to recently |
| `maxCandidatesPerNight` | Hard cap — prevents exhausting the 30 req/min rate limit |
| `vitalityThreshold` | Discovered repos with `healthScore` below this won't appear in the directory |

### 2. Manual curation — `data/promoted.json`

An array of `{ repo, until }` entries:

```json
[
  { "repo": "opn-build/OpenAlive", "until": null },
  { "repo": "carlos-menezes/caravan", "until": "2026-09-27" }
]
```

- `until: null` — permanent curation.
- `until: "<date>"` — time-boxed; the entry is pruned once it expires.

This is an **inclusion** mechanism, not a **classification** one: a promoted repo still
gets its `status` computed normally by `computeStatus()` (see [Vital states](#vital-states)).
Promotion only bypasses the `healthScore` threshold that would otherwise exclude it — it
has no relationship to the `watched` status.

### 3. Community submissions (GitHub Issues)

Open an issue using the **Submit a project** template. `process-submission.yml` validates
the repo against the GitHub API (public, not archived, fewer than 5,000 stars, at least
one commit in the last 90 days), adds it to `data/promoted.json` with a 30-day window, and
runs the full collect → build → deploy → Bluesky post pipeline. The submitter gets an
acceptance email (see [Email notifications](#email-notifications)), and Claude posts a
short take on the project as an issue comment (see below).

---

## Running locally

1. Create a GitHub personal access token (read-only, public repos scope is enough).
2. Export it:
   ```bash
   export GITHUB_TOKEN=ghp_your_token_here
   ```
3. Run the pipeline:
   ```bash
   npm run pipeline      # discover + collect in sequence
   # or step by step:
   npm run discover      # writes data/discovered.json
   npm run collect       # merges sources → data/latest.json + src/content/projects/
   ```

---

## Claude Code assists with…

A few spots in the pipeline lean on Claude Code CLI (`claude -p`) for text generation.
All of them are optional and fail gracefully without a token — nothing in the pipeline
depends on Claude Code being available.

- **The daily post's hook** — `scripts/post-pitch.ts` prefers the GitHub description or
  README first line for the "what it does" line of the Bluesky post. Only when that's too
  weak (status text, a bare pointer, too short) does it fall back to
  `scripts/claude-cli.ts` to generate one.
- **Translation** — `scripts/collect-i18n.ts` detects non-English descriptions/READMEs
  and translates them via Claude Code, caching results in `data/translations.json` keyed
  by repo and content hash so an unchanged project never costs a repeat call.
- **Submission take** — `scripts/ai-opinion.ts` posts a short qualitative opinion on a
  newly submitted repo as a GitHub issue comment.

---

## Email notifications

- `scripts/notify-owners.ts` — lets the owner of an auto-discovered project know it was
  featured (only if their GitHub profile has a public email); idempotent via
  `data/posted.json`, so a repo is never emailed twice.
- `scripts/send-email.ts` + `scripts/email/` — sends "accepted" / "already listed" emails
  to submitters via [Resend](https://resend.com).

Requires `RESEND_API_KEY` and `NOTIFY_FROM_EMAIL` secrets.

---

## Development

```bash
npm install
npm run dev       # http://localhost:4321/silentstars
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

---

## How projects are scored

### `healthScore` (0–100) — Is the project alive and maintained right now?

| Weight | Dimension | Notes |
|--------|-----------|-------|
| 35% | **Recency** | Linear decay over 90d from last commit |
| 25% | **Commit cadence** | Consistency of commit intervals |
| 20% | **Issue health** | `closedIssues ÷ totalIssues` |
| 20% | **PR health** | `mergedPRs ÷ totalPRs` |

Bands: 🟢 Healthy 80–100 · 🟡 Stable 60–79 · 🟠 Quiet 40–59 · 🔴 At Risk <40

### `undervaluedScore` (0–100) — Signal relative to reach

Repos with high signal and low reach rank highest. The directory is sorted by this.

```
signal = 0.25 × commitVelocity  (commits in 90d, 30=max)
       + 0.20 × contributorWork (uniqueAuthors × commits90d / 100)
       + 0.20 × issueResolution (closedIssues ÷ total)
       + 0.20 × forkRatio       (forks ÷ stars)
       + 0.10 × releaseCadence  (releases in 90d, 3=max)
       + ageBonus               (up to 0.3 if repo > 6 months old, linear up to 24m)
       + homepageBonus          (0.05 if repo has a homepage URL)

reach  = log10(stars + watchers + 10)
score  = round((signal / reach) × 100), capped at 100
```

---

## Vital states

| State | Meaning |
|-------|---------|
| `thriving` | Commit in the last 30 days |
| `quiet` | Some activity, no recent release |
| `at_risk` | 3–12 months with no commits + open issues/PRs |
| `newborn` | Created < 6 months ago, README + license + recent commit |
| `revived` | Was dormant > 6 months; back to active in the last 30 days |
| `watched` | Small repo with an unusually high watcher-to-star ratio (`watchers ÷ stars ≥ 2`, `watchers ≥ 5`, `stars ≤ 150`) — people are following closely before it has star traction |
| `archived` | Officially archived or no commits in 18+ months — hidden from directory |

`watched` is a computed status, not manual curation — don't confuse it with promotion via
`data/promoted.json` above, which is a separate, orthogonal mechanism (it controls
inclusion, not `status`).

---

## Automation

| Workflow | Trigger | What it does |
|---|---|---|
| `collect.yml` | Nightly cron + push to `main` | Core pipeline: collect → deploy → post → redeploy → notify-owner (see [Deployment](#deployment)) |
| `process-submission.yml` | Issue opened | Validates a community submission, adds it to `data/promoted.json`, runs the full pipeline, notifies the submitter |
| `post-manual.yml` | Manual (`workflow_dispatch`) | Re-post a specific project or the daily pick to Bluesky, with a dry-run option |
| `retry-nightly.yml` | On completion of `collect.yml` | Reruns the nightly job if GitHub never assigned it a hosted runner |

---

## Deployment

`collect.yml` ("Nightly collect + deploy") runs on a nightly cron and on push to `main`,
with five jobs in sequence:

1. **`collect`** — discover + collect, computes scores, commits `data/latest.json` +
   content files + pruned `promoted.json` + `data/translations.json`.
2. **`deploy`** — `astro build`, screenshots OG cards via Playwright
   (`scripts/og-screenshot.ts`), deploys to GitHub Pages.
3. **`post`** — posts the day's highlight to Bluesky.
4. **`redeploy`** — rebuilds and redeploys so the project's page can show the Bluesky post
   URL from step 3.
5. **`notify-owner`** — emails the featured project's owner, for organically-discovered
   picks only (submitters are already notified separately).

Use `post-manual.yml` to trigger a manual (re)post outside the nightly schedule.

In the repo settings, set **Pages source** to **GitHub Actions**.

---

## License

GPLv3 — see [LICENSE](LICENSE).
