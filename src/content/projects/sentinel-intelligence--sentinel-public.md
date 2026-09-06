---
repo: "Sentinel-Intelligence/sentinel-public"
name: "sentinel-public"
description: "Political accountability graph over federal disclosure data. We prove what we ingested and when."
readmeQualityOk: true
url: "https://github.com/Sentinel-Intelligence/sentinel-public"
homepage: "https://sentinelintel.org"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [67, 28]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-27T10:13:13Z"
lastCommitAt: "2026-09-06T08:04:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 41
maintainers: ["argus-forge"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e063e09a355780e49fa6e1eb7ebe1f44e7b83b05fc7a9f37c27dd2e58018f66/Sentinel-Intelligence/sentinel-public"
---

# The Sentinel Project

**Among the largest open graphs of congressional influence ever built.**

33M+ entities · 72.88M+ connections · 10 federal databases

---

## What is Sentinel?

Sentinel is a Neo4j knowledge graph that fuses 15+ public federal databases to map influence networks in the U.S. Congress. Every legislator, company, PAC, lobbyist, trade, donation, and committee relationship is connected in a single queryable graph.

The system scores all 1,228 current and recent legislators with the **Influence Exposure Score (IES v3.5)**.

Graph state is anchored to the XRP Ledger at intervals. As of 2026-08-28 the provenance wallet rLFteU7TV2dP2UNteJPFJE8h8sJjPjqkLV carries 311 graph-state anchors among 3677 included of 3701 wallet transactions. An anchor records a hash of graph state at a point in time. It is not a per-node or per-edge certificate. See [docs/verification.md](https://github.com/Sentinel-Intelligence/sentinel-public/blob/HEAD/docs/verification.md) for the public verification procedure.

## Data Sources

| Source | Records | Type |
|--------|---------|------|
| FEC Contributions | 719K+ donations | Campaign finance |
| House PTR / Senate eFD | 16,381 trades |…
