---
repo: "eltmon/overdeck"
name: "overdeck"
description: "Multi-agent orchestration for AI coding assistants"
readmeQualityOk: true
url: "https://github.com/eltmon/overdeck"
homepage: "https://overdeck.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 11
forks: 0
openIssues: 653
closedIssues: 1491
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-18T16:57:08Z"
lastCommitAt: "2026-07-20T06:33:30Z"
lastReleaseAt: "2026-01-22T21:36:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 49
maintainers: ["eltmon"]
openGraphImageUrl: "https://opengraph.githubassets.com/4041f3106b4868e900db566a937ad56b7fcbbec383fe13f0a8a05e038aa3cda9/eltmon/overdeck"
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
