# SilentStars

> Not famous. Not abandoned. Just building.

A static site that surfaces open source projects that are **alive but invisible** — newborns, solo builders, projects that came back from the edge. Ranked by how much they deserve attention, not by star count.

**Live:** https://capuz.github.io/silentstars

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
deduplicates, and drops any discovered repo whose vitality score falls below the threshold.

Configure discovery in `data/discovery.config.json`:

```json
{
  "starsRange": { "min": 5, "max": 500 },
  "pushedWithinDays": 90,
  "languages": ["TypeScript", "Python", "Go", "Rust", "JavaScript", "Zig", "Elixir"],
  "maxCandidatesPerNight": 200,
  "vitalityThreshold": 40
}
```

| Field | Description |
|---|---|
| `starsRange` | Avoids empty repos (0–4) and already-famous ones (>500) |
| `pushedWithinDays` | Only considers repos pushed to recently |
| `languages` | Iterates by language to work around the 1 000-result/query API limit |
| `maxCandidatesPerNight` | Hard cap — prevents exhausting the 30 req/min rate limit |
| `vitalityThreshold` | Discovered repos scoring below this won't appear in the directory |

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

## How vitality is scored (0–100)

| Weight | Dimension | Notes |
|--------|-----------|-------|
| 45% | **Recent activity** | Commits in last 180d, weighted by exponential decay (7d→1.0, 30d→0.7, 90d→0.3, 180d→0.1) |
| 25% | **Resolution ratio** | (closed issues + merged PRs) ÷ total issues & PRs |
| 20% | **Documentation** | README (+5), LICENSE (+5), CONTRIBUTING.md (+10) |
| 10% | **Commit regularity** | Consistent cadence scores higher than burst activity |

Bands: 🟢 Healthy 80-100 · 🟡 Stable 60-79 · 🟠 Quiet 40-59 · 🔴 At Risk <40

**Attention Gap** = `vitalityScore ÷ log₁₀(stars + 10)` — the higher, the more undervalued. The directory is sorted by this, not by stars.

---

## Vital states

| State | Meaning |
|-------|---------|
| `thriving` | Commit in the last 30 days |
| `quiet` | Some activity, no recent release |
| `at_risk` | 3–12 months with no commits + open issues/PRs |
| `newborn` | Created < 6 months ago, README + license + recent commit |
| `revived` | Was dormant > 6 months; back to active in the last 30 days |
| `archived` | Officially archived or no commits in 18+ months — hidden from directory |

---

## Deployment

GitHub Actions runs on a nightly cron (`0 3 * * *` UTC):

1. **`discover`**: queries GitHub Search API → `data/discovered.json`
2. **`collect`**: merges seed + discovered, computes metrics → `data/latest.json` + content files, commits
3. **`deploy`**: `astro build` → GitHub Pages

In the repo settings, set **Pages source** to **GitHub Actions**.
