---
repo: "benogoulart/Cortex"
name: "Cortex"
description: "The brain behind your coding agent."
readmeQualityOk: true
url: "https://github.com/benogoulart/Cortex"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-08-19T01:28:12Z"
lastCommitAt: "2026-08-20T04:07:43Z"
lastReleaseAt: "2026-08-20T04:08:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 39
maintainers: ["benogoulart"]
openGraphImageUrl: "https://opengraph.githubassets.com/10f1a2f1eb8e7a1b622cee9e3bb36e507dddd35132e72a5a6c277320c4a43698/benogoulart/Cortex"
---

<br>

**Developer intelligence for your codebase.**
Scans, indexes and understands your project — so coding agents like OpenCode get the right context every time.

</p>

</div>

---

cortex indexes your codebase into a structured knowledge graph — files, symbols, dependencies, architecture — and exposes it through a CLI that coding agents can query. Instead of re-explaining your project to every agent session, you `cortex init` once and the context is always there.

## Preview

```
❯ cortex init

  Scanning C:\my-project...

  cortex initialized

  Files:      142
  Lines:      18.400
  TypeScript: 98
  JavaScript: 12
  JSON:       32

  Index saved to .cortex/index.json
```

```
❯ cortex analyze

  PROJECT ANALYSIS
  ────────────────────────────────────────

  Name:       my-project
  Analyzed:   18/08/2026, 22:00:00
  Version:    0.4.0

  STATS
  ────────────────────────────────────────
  Files:      142
  Lines:      18.400
  TypeScript: 98
  JavaScript: 12
  JSON:       32

  ARCHITECTURE
  ────────────────────────────────────────
  src                  89 ██████████████
  tests                24 █████
  config               12 ███
  scripts               8 ██
  docs…
