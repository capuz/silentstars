---
repo: "yohey-w/codd-dev"
name: "codd-dev"
description: "CoDD: Coherence-Driven Development — Claude Code plugin for cross-artifact change impact analysis"
readmeQualityOk: true
url: "https://github.com/yohey-w/codd-dev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 113
forks: 9
openIssues: 5
closedIssues: 29
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-14T21:39:22Z"
lastCommitAt: "2026-11-23T12:21:51Z"
lastReleaseAt: "2026-05-04T09:51:17Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 87
undervaluedScore: 21
maintainers: ["yohey-w"]
openGraphImageUrl: "https://opengraph.githubassets.com/92a7d5ef734c150d2e7f17a746b5e908a65d5f8729015a8afed8102f3066ae9a/yohey-w/codd-dev"
fundingLinks: ["GITHUB:https://github.com/yohey-w", "CUSTOM:https://zenn.dev/shio_shoppaize"]
---

---

## What is CoDD?

Picture a normal day on a real codebase:

- You change one function — and three other places that quietly depended on it break, because nobody remembered they were connected.
- The test suite goes green — but it never actually ran the code you just changed.
- The design doc still describes how the feature worked last month.

On a large project — or on code an AI wrote for you — this kind of drift is everywhere, and *"is everything still consistent?"* becomes impossible to answer by hand.

**CoDD turns that question into something a machine can answer.**

It builds a **map of how everything in your project connects** — which requirement is implemented by which code, which code is covered by which test, which config value switches which behavior. Once CoDD has that map, it can do three things for you:

1. **Build** — turn your requirements into design, code, and tests.
2. **Trace** — when you change anything, show everything the change affects, so nothing breaks silently.
3. **Verify** — run the real build and tests through a check that **refuses to report a fake pass**.
