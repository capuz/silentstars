---
repo: "luxus/pi-hindsight"
name: "pi-hindsight"
description: "memory for the people of pi (with help of hindsight)"
url: "https://github.com/luxus/pi-hindsight"
homepage: "https://luxus.github.io/pi-hindsight/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["hindsight", "hindsight-memory", "llm-memory", "memory", "pi-agent", "pi-agent-extension"]
stars: 16
forks: 2
openIssues: 4
closedIssues: 158
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-04-25T15:16:43Z"
lastCommitAt: "2026-06-28T07:36:55Z"
lastReleaseAt: "2026-05-20T10:30:14Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 58
maintainers: ["luxus", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c31db9080c9d28cbb7bcd3b604d84dfbade280a9f7638340e99f2352ad582b8/luxus/pi-hindsight"
---

src="docs/assets/logos/pi-hindsight-logo-dark.webp"
    srcset="docs/assets/logos/pi-hindsight-logo-dark.webp 1x, docs/assets/logos/pi-hindsight-logo-dark@2x.webp 2x"
    width="320"
    alt="Pi Hindsight"
  />
</p>

# Pi Hindsight Extension

Persistent memory for [Pi](https://github.com/earendil-works/pi) backed by [Hindsight](https://hindsight.vectorize.io/).

**Documentation:** <https://luxus.github.io/pi-hindsight/>

Pi Hindsight recalls relevant project memory before model calls, retains structured session deltas after completed agent runs, and exposes explicit memory tools for direct retain/recall/reflect operations.

## Install

Install the published npm package:

```bash
pi install npm:@luxusai/pi-hindsight
```

You can still install from GitHub when you want the current repository source instead of the latest npm release:

```bash
pi install https://github.com/luxus/pi-hindsight
```

Package name: `@luxusai/pi-hindsight`.

For local checkout installs, see [Development](#development).

## Quick start

1. Start or choose a Hindsight server:
   - [Hindsight Cloud signup](https://ui.hindsight.vectorize.io/signup)
   - [Self-hosted Hindsight…
