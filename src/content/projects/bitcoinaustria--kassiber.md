---
repo: "bitcoinaustria/kassiber"
name: "kassiber"
description: "Local-first, Bitcoin-only accounting with a Tauri + React desktop frontend, Python CLI/daemon, and RP2-backed tax reporting. Watch-only wallets, AI-guided bookkeeping review, no cloud, no middleman. AGPL-3.0."
readmeQualityOk: true
url: "https://github.com/bitcoinaustria/kassiber"
homepage: "https://kassiber.app"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [74, 23]
topics: ["ai", "bitcoin", "bookkeeping", "selfhosted", "rp2", "python", "tauri"]
stars: 8
forks: 0
openIssues: 28
closedIssues: 80
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-16T11:43:07Z"
lastCommitAt: "2026-09-18T08:27:35Z"
lastReleaseAt: "2026-05-11T05:50:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 52
maintainers: ["tobomobo"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee4d326c4f25bebc650618c15c078ede2ec3f49b723f0009feb9af6d604c7431/bitcoinaustria/kassiber"
---

# Kassiber

Local-first Bitcoin accounting for individuals, businesses, and associations.
Kassiber imports or syncs wallet transactions, supports review of transfers and
missing evidence, and produces portfolio, tax, and source-of-funds reports.
It has a desktop app and a CLI backed by the same Python core.

**Pre-alpha:** expect breaking changes and incorrect accounting or tax output.
Do not use Kassiber as the sole basis for filings or financial decisions.

## What it covers

- Watch-only Bitcoin, Lightning, and Liquid sources, plus exchange and wallet
  file imports.
- Transaction notes, attachments, transfer review, quarantine, and audit history.
- Encrypted backup and restore of a book container, from the desktop or the CLI.
- Local tax calculations through [RP2](https://github.com/bitcoinaustria/rp2),
  including an Austrian plugin and E 1kv exports.
- An optional AI assistant using local or explicitly authorized remote providers.

An opt-in [general ledger](https://github.com/bitcoinaustria/kassiber/blob/HEAD/docs/reference/general-accounting.md) is under
implementation for organizational books. It is separate from Bitcoin tax
journals and is operated through the CLI and…
