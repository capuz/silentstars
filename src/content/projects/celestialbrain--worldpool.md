---
repo: "CelestialBrain/worldpool"
name: "worldpool"
description: "Global proxy pool. Self-maintaining, free, open."
readmeQualityOk: true
url: "https://github.com/CelestialBrain/worldpool"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["free-proxy", "free-proxy-list", "freeproxy", "github-actions", "hijack-detection", "http-proxy", "proxies", "proxy", "proxy-checker", "proxy-list"]
stars: 12
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-03T09:47:56Z"
lastCommitAt: "2026-08-20T04:08:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4a193076d054a04a20cdbf308be2e809f11ba8cb318872a4856272ae0ec86da/CelestialBrain/worldpool"
---

# Worldpool

**Global proxy pool. Self-maintaining, free, open.**

Worldpool aggregates proxies from 120+ sources (34 direct scrapers + 14 bulk GitHub repos + 76 meta-source URLs), validates every one for liveness, anonymity, latency, hijack detection, and site-specific reachability (Google, Discord, TikTok, Instagram, X, Reddit, Watsons.com.ph), then exports curated lists and serves them via a REST API. Runs every 20 minutes on GitHub Actions using 12 parallel validation runners.

---

## Pipeline

```
SCRAPE (1 runner, ~15s)
  120+ sources → dedup → inject alive proxies from DB → blacklist dead
    │
    ├── SHARD 0  ──┐
    ├── SHARD 1    │
    ├── ...        │  12 runners validate in parallel
    └── SHARD 11 ──┘  alive + anonymity + latency + hijack + site-pass
    │
MERGE (1 runner, ~15s)
  combine shards → store to DB → export files → commit
```

**Warm runs:** ~5-10 min. **Every 20 minutes. $0 cost (public repo).**

---

## Sources (120+)

Actual counts from latest pipeline run (auto-updated):

| Source | Proxies | Update Freq |
|--------|---------|-------------|
| casa-ls/proxy-list | 50,000 (capped) | Every 5 min |
| ErcinDedeoglu/proxies | 33,607 | Hourly |
|…
