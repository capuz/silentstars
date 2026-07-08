---
repo: "Readplace/readplace.com"
name: "readplace.com"
description: "Readplace - Read the Web not the Slop. Save articles, read them later. No 3rd party tracking/analytics. Built by the creator of js-cookie for the purpose of sharing their AI integrated learning system used in the last 10 years."
readmeQualityOk: true
url: "https://github.com/Readplace/readplace.com"
homepage: "https://readplace.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["ai", "ai-agents", "careers", "community", "curriculum", "education", "javascript", "learn-to-code", "learning", "math"]
stars: 22
forks: 0
openIssues: 0
closedIssues: 108
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T05:09:08Z"
lastCommitAt: "2026-07-08T05:40:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 47
maintainers: ["FagnerMartinsBrack"]
openGraphImageUrl: "https://opengraph.githubassets.com/55fe132dc330cbd938da879a083bea652e673524f077aa1520d9ef193c1efdf1/Readplace/readplace.com"
---

# Readplace

A read-it-later app. Save articles, read them later. Built from a personal reading system I've been running for 10 years.

→ [readplace.com](https://readplace.com)

Solo-built, with Claude as a working agent in the pipeline.

---

## How it works

### Hypermedia all the way down

One URL space serves two clients. Browsers get HTML; the browser extension gets Siren over the same routes via content negotiation. The extension only knows the entry point — every subsequent step is discovered through server-published action names (`save-article`, `search`, `delete`) and link rels. URLs and HTTP methods are not part of the contract, so renaming a route is a server-internal change and the extension keeps working without a redeploy.

### SSR with the URL as state

Pages render on the server. Every interaction is a plain form submit or link navigation that works with zero client-side JavaScript; `hx-boost` adds an SPA-like feel on top without owning state. GETs are side-effect-free; mutations follow POST-Redirect-GET. There is no React, no client-side state library, and no parallel JSON API serving the same data — the URL is the state, and the server's HTML response is the…
