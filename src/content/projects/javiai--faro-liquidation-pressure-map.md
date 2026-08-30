---
repo: "javiAI/faro-liquidation-pressure-map"
name: "faro-liquidation-pressure-map"
description: "Liquidation Pressure Map & Cascade Fragility Index for BTC on Hyperliquid — Faro Head of Data challenge PoC"
readmeQualityOk: true
url: "https://github.com/javiAI/faro-liquidation-pressure-map"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-08T10:55:03Z"
lastCommitAt: "2026-08-30T09:24:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a6d00adf9ed34e3f315919238c42ac87e41cfd8192326632944c762468fc9893/javiAI/faro-liquidation-pressure-map"
---

# Liquidation Pressure Map & Cascade Fragility Index — BTC on Hyperliquid

> Proof-of-concept for the **Faro · Head of Data** challenge.
> A *forward-looking* liquidation-risk metric: where the **currently-open** BTC
> leverage on Hyperliquid would be force-liquidated, and how fragile that makes the
> structure right now.

**Live demo:** https://javiai.github.io/faro-liquidation-pressure-map/
**Single-page deliverable:** the memo (4 sections + appendices) **and** the live,
auto-updating charts in one self-contained file — served at the link above, and committed
as [`docs/index.html`](https://github.com/javiAI/faro-liquidation-pressure-map/blob/HEAD/docs/index.html) (what GitHub Pages serves). Running the pipeline
locally also writes a working copy to `site/index.html`.

---

## The one-line idea

Faro already shows **Liquidation Volume** — liquidations that *already executed*
(backward-looking flow). This metric is the other half on the time axis: the **latent**
liquidation risk from positions that are *still open*, placed **at the prices where they
would trigger**. From the map we derive:

- **Cascade Fragility Index (CFI, 0–100)** — proximity-weighted concentration of…
