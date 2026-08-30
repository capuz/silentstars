---
repo: "ljodea/ggsvelte"
name: "ggsvelte"
description: "A fast agent-native implementation of the layered grammar of graphics, inspired by ggplot2."
readmeQualityOk: true
url: "https://github.com/ljodea/ggsvelte"
homepage: "https://ggsvelte.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["canvas", "charts", "data-visualization", "ggplot2", "grammar-of-graphics", "svelte", "svg", "typescript"]
stars: 15
forks: 0
openIssues: 8
closedIssues: 349
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-07-12T00:35:49Z"
lastCommitAt: "2026-08-30T00:44:51Z"
lastReleaseAt: "2026-07-18T22:52:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 57
maintainers: ["ljodea", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68a14d77ff71298a19a278d2b81777ea96f7a384e3f758cc78b4c9ac792dbb3e/ljodea/ggsvelte"
discussionCount: 3
---

# ggsvelte

ggsvelte is a fast agent-native implementation of the layered grammar of
graphics, inspired by ggplot2.

[Documentation](https://ggsvelte.sh/) · [Examples](https://ggsvelte.sh/examples) ·
[Getting started](https://ggsvelte.sh/guide/getting-started)

## Install

```sh
bun add @ggsvelte/svelte
# or: npm install @ggsvelte/svelte
```

Requires Node.js 22+ and Svelte 5.33.1+. CI covers npm, pnpm, and Bun on Ubuntu
and Windows.

## Agents

- Skill: [`@ggsvelte/skill`](https://github.com/ljodea/ggsvelte/blob/HEAD/packages/skill) — install from npm, then copy
  `node_modules/@ggsvelte/skill` into your agent's skills dir as `ggsvelte/`
  (dependabot surfaces version bumps for bundled copies). In-tree source:
  [`packages/skill/SKILL.md`](https://github.com/ljodea/ggsvelte/blob/HEAD/packages/skill/SKILL.md)
- Schema: [`schema/v0.json`](https://ggsvelte.sh/schema/v0.json)
- Corpus: [`llms.txt`](https://ggsvelte.sh/llms.txt) ·
  [`llms-full.txt`](https://ggsvelte.sh/llms-full.txt)
- `validate()` errors are `{ code, path, message, fix }` with a
  machine-applicable `fix.example`

## Packages

| Package                               | Surface…
