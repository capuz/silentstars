---
repo: "chunlaw/wing-font-generator"
name: "wing-font-generator"
description: "Generates OpenType fonts that show pronunciation annotations stacked above Chinese characters in plain text "
readmeQualityOk: true
url: "https://github.com/chunlaw/wing-font-generator"
homepage: "http://wing-font.chunlaw.io/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [50, 46]
topics: ["cantonese", "fonts", "hong-kong", "opentype", "pinyin", "automation", "font-creation", "font-design", "font-generator", "ivs"]
stars: 19
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2025-03-27T06:50:00Z"
lastCommitAt: "2026-10-18T08:16:53Z"
lastReleaseAt: "2026-10-17T19:59:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 59
maintainers: ["chunlaw"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d009e73949c1027960c8edd28640c7c6461500f37290c11ab39e447f73cf6dc/chunlaw/wing-font-generator"
fundingLinks: ["GITHUB:https://github.com/hkbus", "PATREON:https://patreon.com/HKBUS"]
---

[Wing Font](https://wing-font.chunlaw.io) generates OpenType fonts whose glyphs **carry their own romanization above them**. Type 行 and `hang4` appears above it; type 銀行 and the same character renders with `hong4` because the word-context disambiguation rides on OpenType `ccmp`. No HTML `<ruby>` markup, no separate text layers, no special apps — Word, Pages, Canva, Adobe Creative Cloud, Chrome / Firefox / Safari all just work.

The pipeline is a small Python program that adds GSUB rules to a base CJK font. The same code runs in the browser via Pyodide, so non-developers can compose their own variants without installing anything.

## Documentation

The [live site](https://wing-font.chunlaw.io) hosts the showcase, the in-browser generator, and per-platform install instructions for non-developers.

For development docs:

- **[`python/README.md`](https://github.com/chunlaw/wing-font-generator/blob/HEAD/python/README.md)** — CLI reference, GSUB pipeline architecture, mapping data sources, local test rig.
- **[`web/README.md`](https://github.com/chunlaw/wing-font-generator/blob/HEAD/web/README.md)** — React + Vite app, Pyodide worker, sync-python script, deployment notes.

## Pre-built…
