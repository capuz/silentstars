---
repo: "Danialsamadi/iran-internet-monitor"
name: "iran-internet-monitor"
description: "Real-time monitoring of Iran’s internet connectivity, censorship & circumvention. Every pass is a git commit + LLM analysis + bilingual status page."
readmeQualityOk: true
url: "https://github.com/Danialsamadi/iran-internet-monitor"
homepage: "https://iran-internet-monitor.pages.dev/"
language: "HTML"
languages: ["HTML", "Go"]
languagePcts: [45, 41]
topics: ["censorship", "iran"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-14T17:30:57Z"
lastCommitAt: "2026-10-25T09:01:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/badc251a2cb924a619dce9341f744573e7d13f1f2e57933b4c2503e1fa4a2b44/Danialsamadi/iran-internet-monitor"
---

# IranNet Monitor

**Independent, open-data observatory of Iran's internet — connectivity, censorship, and circumvention — probed every 10 minutes from outside Iran, with an LLM analyst reading every pass and a bilingual (English / فارسی) live status page.**

Every pass is a git commit: the full raw history of Iran's reachability lives in this repository, open for researchers, journalists, and tooling (`jq`, notebooks, LLMs) to consume directly.

---

## Architecture

```mermaid
flowchart TD
    CRON["⏱ VPS cron · every 10 min"] --> M["bin/monitor — one pass"]

    subgraph PROBES["Concurrent probes · single vantage outside Iran"]
        SVC["40 service checks<br/>HTTP · DNS · TCP<br/>6 categories"]
        RNG["~1,070 labeled IP ranges<br/>TCP :80 · 128-worker pool<br/>≈45 s sweep"]
        RAD["Cloudflare Radar (optional)<br/>IR traffic 24 h + confirmed outages"]
    end

    M --> SVC
    M --> RNG
    M --> RAD

    RNG -.-> GUARD{"TEST-NET-1 guard:<br/>does 192.0.2.1:80 answer?"}
    GUARD -.->|"yes → vantage intercepts :80,<br/>sweep refused"| SKIP["skip ranges this pass"]

    SVC --> STORE[("data/history.jsonl<br/>data/latest.json<br/>data/raw/ · 7-day retention")]…
