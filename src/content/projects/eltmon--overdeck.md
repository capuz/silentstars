---
repo: "eltmon/overdeck"
name: "overdeck"
description: "Multi-agent orchestration for AI coding assistants"
readmeQualityOk: true
url: "https://github.com/eltmon/overdeck"
homepage: "https://overdeck.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 34
forks: 1
openIssues: 874
closedIssues: 2350
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-18T16:57:08Z"
lastCommitAt: "2026-11-01T10:44:56Z"
lastReleaseAt: "2026-01-22T21:36:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 49
maintainers: ["eltmon"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c91fa58b9d1e96cd359840a226d77594cc8e3ded8298ab7ab39220251cf7c17/eltmon/overdeck"
---

**The IDE for the agent era**

IDEs were built for humans who type code. Overdeck is built for humans who **direct** it — not with prompts, with **loops**. One agent or twenty, hands-on or hands-off: spawn agents on real issues, watch every diff land live, steer mid-task, and let a built-in specialist pipeline review, test, and merge the work — while you decide exactly how much of the loop runs without you.

## Quick Start

```bash
npx @overdeck/core
```

No install step required. `npx @overdeck/core` starts Command Deck and opens the dashboard in your browser. Use `overdeck` or `pan` after `npm install -g @overdeck/core`. The packaged desktop app is published separately as `@overdeck/desktop`.

**Requires Node.js 22.16+** (or 24+) — the floor for the bundled `node:sqlite` driver. If your shell's default Node is older, Overdeck automatically relaunches under an installed compatible Node (Homebrew `node@22`, nvm, fnm, volta, or asdf) — no manual switching needed. If none is found, it prints the exact install command for your setup.

Dashboard runs at https://overdeck.localhost (or http://localhost:3011 if you skip HTTPS setup).

See the [full…
