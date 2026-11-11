---
repo: "zerodrift/leanetrm"
name: "leanetrm"
description: "Open Source Commodity Trading Risk Management"
readmeQualityOk: true
url: "https://github.com/zerodrift/leanetrm"
homepage: "https://leanetrm.com"
language: "C#"
languages: ["C#", "Python"]
languagePcts: [33, 20]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-17T19:35:14Z"
lastCommitAt: "2026-11-11T10:21:25Z"
lastReleaseAt: "2026-10-19T13:14:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 58
maintainers: ["zerodrift"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd89975f5a4175913e2420477f522918d5179b86598bc59f8211f213c8e3d867/zerodrift/leanetrm"
discussionCount: 0
---

# LeanETRM

**An open source ETRM for commodity trading, built for traders, risk managers and AI agents.**

LeanETRM books trades, builds curves and calculates P&L and risk on a standard,
unmodified PostgreSQL database. Exact quantity and cash arithmetic, explicit
numerical policies and retained source lineage make calculations auditable;
corrections never overwrite history. It is aimed at shops that need trade capture
and risk with explicit inputs and a retained calculation history.

> **Status:** a foundation, not a finished product. Try it as a disposable local
> preview on synthetic data. Nothing here is production-qualified.

For a worked PPA example, follow the [PPA tester guide](https://github.com/zerodrift/leanetrm/blob/HEAD/docs/experimental-ppa-testing.md)
for synthetic booking, graphical break-even pricing and settlement previews.

## What works today

- **Trade capture:** futures, listed American options on futures, financial gas and
  power swaps, factor swaps and PPAs,
  with exact party references and retained history. New trade opens each product's
  booking workflow; supported amendments retain immutable revisions
- **Physical gas:** fixed-quantity delivery with…
