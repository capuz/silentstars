---
repo: "Manzanita-Research/frontier-lab-tycoon"
name: "frontier-lab-tycoon"
description: "A browser tycoon game about running a frontier AI lab. Build the future. Ask forgiveness later."
readmeQualityOk: true
url: "https://github.com/Manzanita-Research/frontier-lab-tycoon"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-29T16:29:53Z"
lastCommitAt: "2026-10-03T22:04:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["jem-computer"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd503661f3b2f112a4a86787fd346c332db62815f037e8466b7a92a5428943b7/Manzanita-Research/frontier-lab-tycoon"
---

# Frontier Lab Tycoon

A browser tycoon game about running a frontier AI lab. Build compute, keep your researchers (and your agents) happy, ship models, outrun the rivals, and try to stay ahead of the protesters, the regulators and your own sandbox.

Built with React, react-three-fiber and a deterministic TypeScript simulation. See [docs/DESIGN.md](https://github.com/Manzanita-Research/frontier-lab-tycoon/blob/HEAD/docs/DESIGN.md) for the design and [AGENTS.md](https://github.com/Manzanita-Research/frontier-lab-tycoon/blob/HEAD/AGENTS.md) for how to work on it.

**[Play Frontier Lab Tycoon](https://flt-prod.manzanita.workers.dev)** — a public link, with no sign-in needed.

GitHub deploys checked merges to `main` to Cloudflare Workers static assets through Alchemy. Same-repository PRs get a preview link in a bot comment; closing the PR removes the preview. Deployment setup and pinned infrastructure dependencies live in [infra/README.md](https://github.com/Manzanita-Research/frontier-lab-tycoon/blob/HEAD/infra/README.md).

```sh
pnpm install
pnpm dev
```

## Playing

| | |
|---|---|
| Build | Pick a tool at the bottom (or keys `1`-`6`), click to place, `Esc` to put it away. Path and…
