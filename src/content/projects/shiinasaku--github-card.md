---
repo: "ShiinaSaku/Github-Card"
name: "Github-Card"
description: "A simple yet powerful GitHub profile card generator written with Elysiajs and bun "
readmeQualityOk: true
url: "https://github.com/ShiinaSaku/Github-Card"
homepage: "https://card.shiina.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["bun", "dynamic", "elysiajs", "github-profile", "nodejs", "readme-generator", "readme-profile", "severless", "github-card", "github-card-generator"]
stars: 38
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-02-01T17:00:28Z"
lastCommitAt: "2026-11-09T00:53:25Z"
lastReleaseAt: "2026-11-06T09:34:41Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 50
maintainers: ["renovate[bot]", "ShiinaSaku", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1147383840/74e376e1-d270-4944-ad2d-01091da99e0a"
fundingLinks: ["GITHUB:https://github.com/ShiinaSaku"]
discussionCount: 1
---

### Beautiful, blazing-fast GitHub profile cards

Live SVG cards for your README — stars, commits, languages, all auto-updating. One line, zero config, edge-cached.

---

### ✨ What's new in 4.2

> System-font only · no shipped `.woff2` · crisper text (`geometricPrecision`, tabular numbers) · new 24 px icons (MingCute / Huge / Tabler) · airy stat stack with 7 px gaps, no boxes · default `affiliations=owner` — org stars excluded unless `?affiliations=affiliated` · fully typed `github.ts` & `github-client`, cache v9.

---

## Quickstart

Paste into your profile README — replace `shiinasaku` with your username:

```md
[](https://github.com/shiinasaku)
```

That's it. No sign-up, no build — the card refreshes automatically as cached data expires.

Requires Bun 1.4.4 or newer. The API uses Elysia 2 RC with pinned framework and plugin versions.

```bash
bun install
cp .env.example .env   # add GITHUB_TOKEN
bun dev                # http://localhost:3000
```

| Command             | Action               |
| ------------------- | -------------------- |
| `bun test`          | Run tests            |
| `bun run typecheck` | Native `bun check`   |
| `bun run fmt`       | Bun native formatter…
