---
repo: "eltmon/overdeck"
name: "overdeck"
description: "Multi-agent orchestration for AI coding assistants"
readmeQualityOk: true
url: "https://github.com/eltmon/overdeck"
homepage: "https://overdeck.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 28
forks: 0
openIssues: 812
closedIssues: 2116
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-18T16:57:08Z"
lastCommitAt: "2026-09-25T09:04:29Z"
lastReleaseAt: "2026-01-22T21:36:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 47
maintainers: ["eltmon"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2963bfe653a9c82dcbe7ce55b23887efcc196de30602b90d5179315bf255bff/eltmon/overdeck"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="logo/overdeck-dark.svg">
</picture>

**The IDE for the agent era**

</div>

IDEs were built for humans who type code. Overdeck is built for humans who **direct** it — not with prompts, with **loops**. One agent or twenty, hands-on or hands-off: spawn agents on real issues, watch every diff land live, steer mid-task, and let a built-in specialist pipeline review, test, and merge the work — while you decide exactly how much of the loop runs without you.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/screenshot-board-dark.png">
</picture>

</div>

## Quick Start

```bash
npx @overdeck/core
```

No install step required. `npx @overdeck/core` starts Command Deck and opens the dashboard in your browser. Use `overdeck` or `pan` after `npm install -g @overdeck/core`. The packaged desktop app is published separately as `@overdeck/desktop`.

**Requires Node.js 22.16+** (or 24+) — the floor for the bundled `node:sqlite` driver. If your shell's default Node is older, Overdeck automatically relaunches under an installed compatible Node (Homebrew `node@22`, nvm, fnm, volta, or asdf) — no manual switching…
