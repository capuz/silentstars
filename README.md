# SilentStars

> Not famous. Not abandoned. Just building.

A static site that surfaces open source projects that are **alive but invisible** — newborns, solo builders, projects that came back from the edge. Ranked by how much they deserve attention, not by star count.

**Live:** https://capuz.github.io/silentstars/?ref=githubrepo

---

## Stack

- [Astro](https://astro.build) + TypeScript (content collections)
- GitHub Actions (nightly discover → collect → build → deploy)
- GitHub Pages — zero cost, zero backend

---

## Two ways to add projects

### 1. Manual seed (always included)

Edit `data/seed.txt` and add one `owner/repo` per line:

```
# curated picks — always tracked regardless of vitality score
sindresorhus/execa
nicowillis/some-quiet-tool
```

Lines starting with `#` are ignored. Commit and push — the next nightly run picks it up.
Seed repos bypass the vitality threshold: they're always shown in the directory.

### 2. Auto-discovery (nightly)

`scripts/discover.ts` queries the GitHub Search API each night and writes candidates
to `data/discovered.json`. `scripts/collect.ts` then merges both lists (seed + discovered),
deduplicates, and drops any discovered repo whose `healthScore` falls below the threshold.

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

### 3. Community submissions (GitHub Issues)

Open an issue using the **Submit a project** template. The workflow validates the repo against the GitHub API, adds it to `data/promoted.json` with a 30-day window, and immediately runs the full collect → build → deploy → Bluesky post pipeline. No manual steps needed.

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
| `watched` | Manually curated — always shown regardless of health score |
| `archived` | Officially archived or no commits in 18+ months — hidden from directory |

---

## Deployment

GitHub Actions runs on a nightly cron (`0 3 * * *` UTC):

1. **`collect`**: queries GitHub Search API → merges seed + discovered, computes metrics → commits `data/latest.json` + content files.
2. **`deploy`**: `astro build` → GitHub Pages (also triggers on push to `main`).
3. **`post`**: posts the nightly highlight to Bluesky (`BSKY_IDENTIFIER` + `BSKY_APP_PASSWORD` secrets required).

A separate `post.yml` workflow (`workflow_dispatch` only) lets you run the Bluesky post manually with `dry_run: true` for testing.

In the repo settings, set **Pages source** to **GitHub Actions**.
