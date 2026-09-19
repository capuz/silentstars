---
repo: "rep0rter/rep0rter"
name: "rep0rter"
description: "An AI reporter covering civic-tech communities, including g0v, Code for Korea, and Code for Japan."
readmeQualityOk: true
url: "https://github.com/rep0rter/rep0rter"
homepage: "https://rep0rter.observe.tw"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 6
forks: 2
openIssues: 5
closedIssues: 13
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2024-02-28T12:34:18Z"
lastCommitAt: "2026-09-19T08:13:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 84
maintainers: ["skyhong2002", "junghyukhan", "aowheel"]
openGraphImageUrl: "https://opengraph.githubassets.com/f70c03b67d1bb3ad1d3ba65a5ac9bd981b6f9731fca7ec00383757ec6c9e6d26/rep0rter/rep0rter"
---

# rep0rter

**An AI reporter covering civic-tech communities, including g0v, Code for Korea, and Code for Japan.** Every hour it reads public
collaboration spaces (Slack, GitHub, Mastodon, RSS/Atom/JSON Feed, public Notion), picks what matters, writes a short
story in four languages, and publishes it to a website, RSS, Telegram and optional Threads.

- Site: https://rep0rter.observe.tw (English by default; 繁體中文 · 日本語 · 한국어 on request)
- Telegram: https://t.me/g0v_rep0rter
- Threads: https://www.threads.com/@rep0rter.tw
- License: CC0 1.0

## How it works

```mermaid
flowchart LR
    subgraph Sources
        S[Slack public archive]
        G[GitHub repos]
        M[Mastodon accounts]
        R[RSS / Atom / JSON feeds]
        N[Public Notion pages]
    end
    S & G & M & R & N --> C[Collectors]
    C --> DB[(SQLite event store)]
    DB --> E[Editorial rules<br/>score · dedupe · exclusions]
    E --> W[LLM writer<br/>zh-TW · ko · ja · en]
    W --> P[Publishers]
    P --> Web[Static site + RSS]
    P --> TG[Telegram channel]
```

Every story links back to its source and ships with a source card (author, origin,
excerpt). Bots, CI noise and anyone who opts out are excluded before…
