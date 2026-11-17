---
repo: "smart-byte/leani"
name: "leani"
description: "Lean Ethereum indexing node with minimal storage and hardware requirements. No archive node, no API key."
readmeQualityOk: true
url: "https://github.com/smart-byte/leani"
homepage: "https://leani.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-07T11:01:24Z"
lastCommitAt: "2026-11-17T14:33:02Z"
lastReleaseAt: "2026-10-28T17:15:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["materkel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82001e2453adbeba5868ecd59ccf4edebc1e693c6dc9c62f20ddf841abadf7fd/smart-byte/leani"
---

Ethereum data without the RPC bill. Leani is an indexing node you run next
to your app: it backfills history from public datasets, follows Ethereum and
its rollups live, labels every block with how final it is, and serves the
data your app needs over JSON-RPC, HTTP, and a TypeScript SDK. No API key, no
archive node.

Status: release candidate (`v0.2.0-rc.2`). Read the
[known limitations](https://github.com/smart-byte/leani/blob/HEAD/docs/operations/preview-limitations.md) before deploying.

[blobs.money](https://blobs.money) and [ticker.leani.dev](https://ticker.leani.dev)
run on it in production.

## Install

```bash
brew install smart-byte/tap/leani
```

Or take a checksummed archive from
[GitHub releases](https://github.com/smart-byte/leani/releases), run the
container image `ghcr.io/smart-byte/leani:v0.2.0-rc.2`, or
[build from source](https://leani.dev/docs/getting-started/install/).

Using a coding agent? `npx skills add smart-byte/leani -g` installs the Leani
skill for Codex, Claude Code, Cursor, and others.

## Follow the chain

No configuration file:

```bash
leani subscribe blocks
```

On first use you approve a finalized checkpoint, the trusted starting point
Leani…
