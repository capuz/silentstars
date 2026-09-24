---
repo: "Readplace/readplace.com"
name: "readplace.com"
description: "Save articles, AI research sources, and newsletter email links. Read them when you're ready. No third-party tracking. Built by the creator of js-cookie from a 10-year personal reading system."
readmeQualityOk: true
url: "https://github.com/Readplace/readplace.com"
homepage: "https://readplace.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["ai", "ai-agents", "javascript", "nodejs", "web", "read-it-later", "aws", "bookmarks", "browser-extension", "hypermedia"]
stars: 29
forks: 0
openIssues: 8
closedIssues: 176
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T05:09:08Z"
lastCommitAt: "2026-09-24T08:37:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 46
maintainers: ["FagnerMartinsBrack"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d9700c031850c3e59dce663976f3858f774ff3074afe01c0b0a6cc041befeb0/Readplace/readplace.com"
discussionCount: 0
---

# Readplace

A read-it-later app. Save articles, read them later. Built from a personal reading system refined over 10 years.

→ [readplace.com](https://readplace.com)

Built in public, with Claude as a working agent in the pipeline.

---

## How it works

### Hypermedia all the way down

One URL space serves two clients. Browsers get HTML; the browser extension gets Siren over the same routes via content negotiation. The extension only knows the entry point — every subsequent step is discovered through server-published action names (`save-article`, `search`) and link rels. URLs and HTTP methods are not part of the contract, so renaming a route is a server-internal change and the extension keeps working without a redeploy.

### SSR with the URL as state

Pages render on the server. Every interaction is a plain form submit or link navigation that works with zero client-side JavaScript; `hx-boost` adds an SPA-like feel on top without owning state. GETs are side-effect-free; mutations follow POST-Redirect-GET. There is no React, no client-side state library, and no parallel JSON API serving the same data — the URL is the state, and the server's HTML response is the truth.

### Async…
