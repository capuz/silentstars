---
repo: "freed-project/freed"
name: "freed"
description: "Take back your feed. Open source, local-first social media aggregator."
readmeQualityOk: true
url: "https://github.com/freed-project/freed"
homepage: "https://freed.wtf"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [51, 29]
stars: 8
forks: 1
openIssues: 60
closedIssues: 10
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-27T04:38:53Z"
lastCommitAt: "2026-08-12T05:15:24Z"
lastReleaseAt: "2026-03-04T00:57:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 46
maintainers: ["AubreyF"]
openGraphImageUrl: "https://opengraph.githubassets.com/134046db6541a4f4e2ad758a2f4d43852e31d2ffc7b7318d459cf808412638af/freed-project/freed"
---

# FREEDme

> **Their algorithms optimize for profit. Optimize yours for life.**

Capture your social/rss/newsletter feeds locally. Tune the ranking algo yourself. Sync across devices. No cloud dependency, no tracking, no algorithmic manipulation.

[Freed.wtf](https://freed.wtf)

---

## Branch Flow

- `dev` is the default integration branch
- `main` is the production promotion branch
- Production web surfaces live at `freed.wtf` and `app.freed.wtf`
- Dev web surfaces live at `dev.freed.wtf` and `dev-app.freed.wtf`

---

## Features

- 🌊 **Unified feed** — X, RSS, YouTube, newsletters, podcasts in one timeline
- ⚖️ **Your ranking** — Weight by recency, author, topic, custom semantics. Not engagement
- 🔒 **Local-first** — All data on your device, we can't see it
- 🔄 **Cross-device sync** — Your devices stay in step directly, with your own cloud storage as backup
- 📌 **Save for later** — Capture any URL with reader view
- ⚓ **Ulysses mode** — Block platform feeds, stay intentional
- 📍 **Friend map** — See where your people are posting from

---

## Architecture

```
  Capture Layers              Sync                    Clients
 ─────────────────      ─────────────────…
