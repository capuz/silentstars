---
repo: "greydragon888/real-router"
name: "real-router"
description: "A real router. Just routing, nothing else."
readmeQualityOk: true
url: "https://github.com/greydragon888/real-router"
homepage: "https://github.com/greydragon888/real-router/wiki"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["framework-agnostic", "monorepo", "react", "router", "routing", "state-machine", "typescript", "universal"]
stars: 11
forks: 2
openIssues: 80
closedIssues: 857
watchers: 0
contributors: 54
recentReleases: 0
createdAt: "2025-11-01T17:28:01Z"
lastCommitAt: "2026-08-30T09:25:04Z"
lastReleaseAt: "2026-01-24T06:12:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 67
maintainers: ["greydragon888"]
openGraphImageUrl: "https://opengraph.githubassets.com/08d2cac6da87c136a6ba46fe2c884a19494010e73186cf36d37dd2c9f5e6c407/greydragon888/real-router"
fundingLinks: ["KO_FI:https://ko-fi.com/greydragon888"]
discussionCount: 0
---

# Real-Router

</div>

  <b>Data-first router for JavaScript — the most declarative router for client applications</b>
</p>

</p>

---

Every router you know maps URLs to **components**. Real-Router maps URLs to **data**.

```
React Router:     URL  →  <Component />     (router decides what to render)
Vue Router:       URL  →  component: View   (router decides what to render)
Real-Router:      URL  →  { name, params }  (you decide what to do)
```

**The router tells you where. You decide what.**

This is not a minor API difference — it's a fundamentally different architecture.\
The router is a **lifecycle manager**, not a data layer.\
It tells you when transitions happen; what to do with that — render a page, load data, set a title, track analytics, or ignore it entirely — is your decision.

> Built from scratch with TypeScript-first design. Independent project inspired by [router5](https://github.com/router5/router5)'s declarative philosophy, not a fork.

> **Pre-1.0**: Core API and plugin interfaces are stable. Minor versions preserve backward compatibility. The high release count reflects monorepo-wide coordinated publishing — one change in core triggers version bumps across…
