---
repo: "risingwavelabs/risingwave-docs"
name: "risingwave-docs"
description: "The official RisingWave documentation repository"
readmeQualityOk: true
url: "https://github.com/risingwavelabs/risingwave-docs"
homepage: "https://docs.risingwave.com"
language: "MDX"
languages: ["MDX"]
languagePcts: [100]
stars: 6
forks: 19
openIssues: 161
closedIssues: 488
watchers: 7
contributors: 56
recentReleases: 0
createdAt: "2024-10-21T02:01:43Z"
lastCommitAt: "2026-10-27T03:57:15Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 91
undervaluedScore: 84
maintainers: ["rw-jarvis-bot[bot]", "wjf3121", "cyliu0"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/875864923/75401980-9a68-47bb-b0d8-4c7874e52b4c"
postedAt: "2026-10-21T08:55:48.443Z"
---

# Note

This repository contains the latest RisingWave documentation. [The old repository](https://github.com/risingwavelabs/risingwave-docs-legacy) now hosts the archived documentation up to v2.0 of RisingWave.

# Documentation structure

Below are the main topic groups. Some groups are elevated to be tabs shown on the top of a documentation page.

- get-started
- demos
- sql
- ingestion
- processing
- delivery
- deploy
- operate
- python-sdk
- client-libraries
- performance
- troubleshoot
- integrations
- faq
- reference
- cloud
- changelog

### Development

The Mintlify CLI package was renamed from `mintlify` to [`mint`](https://www.npmjs.com/package/mint). Either works, but `mint` is the current recommended form for local development.

Note: some repository automation and CI checks may still use the legacy `mintlify` command name (for example, broken-links checks), so you may see either form in this repo.
Run the dev server from the repo root (where `docs.json` lives) — no global install needed:

```
npx mint@latest dev
```

Pass `--port <N>` if the default port is in use, e.g. `npx mint@latest dev --port 3333`.

If you prefer a global install:

```
npm i -g mint
mint dev
```…
