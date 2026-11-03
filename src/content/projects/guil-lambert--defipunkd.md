---
repo: "guil-lambert/defipunkd"
name: "defipunkd"
description: "Community-curated risk registry for DeFi"
readmeQualityOk: true
url: "https://github.com/guil-lambert/defipunkd"
homepage: "https://defipunkd.com"
language: "TypeScript"
languages: ["TypeScript", "Astro"]
languagePcts: [64, 24]
stars: 6
forks: 10
openIssues: 65
closedIssues: 5
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-22T22:38:05Z"
lastCommitAt: "2026-11-03T19:05:39Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 77
undervaluedScore: 59
maintainers: ["guil-lambert"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1218457632/311b1cb9-8bbc-4347-85c6-3d19bf3a5d7d"
---

# DeFiPunkd

Live, evidence-based transparency registry for DeFi protocols. An L2BEAT-for-DeFi in spirit.

DeFiPunkd is **not** a centralized risk-rating system. It is a protocol registry and evidence intake layer: every protocol from DeFiLlama gets a page with raw fields and missingness visible, and per-dimension grades are filled in over time by the DEFI@home pipeline (LLM submissions → quorum → optional human signoff). Tiers gate publication; a tier is a data-readiness signal, not an editorial endorsement.

Audience: DeFi power users, researchers, and auditors who want dense evidence on proxies, multisigs, timelocks, upgradeability, and autonomy — without marketing polish. See [`spec.md`](https://github.com/guil-lambert/defipunkd/blob/HEAD/spec.md) for the full product framing and phase plan.

## Not quite a "*beat"

Unlike L2BEAT, WalletBeat, and the other "beat" projects, **DeFiPunkd is not human-curated**. It is tool-assisted first, with an optional human curation layer that is deliberately minimal and not strictly required. There are thousands of DeFi protocols — hand-curating each one does not scale. The registry starts from DeFiLlama, layers deterministic signals…
