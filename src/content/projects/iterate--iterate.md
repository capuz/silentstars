---
repo: "iterate/iterate"
name: "iterate"
description: "The most hackable AI agent"
readmeQualityOk: true
url: "https://github.com/iterate/iterate"
homepage: "https://iterate.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 203
forks: 20
openIssues: 4
closedIssues: 2
watchers: 1
contributors: 17
recentReleases: 0
createdAt: "2025-09-15T10:34:27Z"
lastCommitAt: "2026-09-16T08:47:53Z"
lastReleaseAt: "2025-12-04T17:09:21Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 36
maintainers: ["jonastemplestein", "mmkal"]
openGraphImageUrl: "https://opengraph.githubassets.com/416648884f0c06e8eb0006c467a56512f5f1575e3e4ab6a430e7be04da56a8de/iterate/iterate"
---

# iterate

Monorepo for Iterate's Cloudflare Workers platform. **`apps/os`** is the main app — the product dashboard at `os.iterate.com`.

Agent instructions: [AGENTS.md](https://github.com/iterate/iterate/blob/HEAD/AGENTS.md). Engineering requirements: [no deviant system behaviour](https://github.com/iterate/iterate/blob/HEAD/docs/engineering-invariants.md).

## Environments

- The root `envs.ts` is the typed map of every deployed environment
  (hostnames, worker names, accounts, resource IDs); Doppler supplies only
  secrets, one config per env (`prd`, `preview_N`; `dev`/`dev_<you>` are
  fully local and never deploy).
- Each app deploys with its own small scripts: `pnpm run deploy --env <name>`
  (build → wrangler deploy with atomic secrets → smoke), `ensure-resources`,
  `erase-data`. Workers are never deleted.
- Details: [DevOps: Cloudflare And Doppler](https://github.com/iterate/iterate/blob/HEAD/docs/devops-cloudflare-doppler.md).

## Talking to OS

Run these from `apps/os`. Plain `pnpm cli ...` uses your local Doppler setup
for `apps/os`. Wrap in `doppler run --config <config> -- ...` to target a
specific environment; the config supplies URLs and secrets. More on this…
