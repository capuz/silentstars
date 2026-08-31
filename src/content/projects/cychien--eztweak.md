---
repo: "cychien/eztweak"
name: "eztweak"
description: "Tweak your app's UI by annotating the live page"
readmeQualityOk: true
url: "https://github.com/cychien/eztweak"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-09T12:39:34Z"
lastCommitAt: "2026-08-31T09:58:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 37
maintainers: ["cychien"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d24e5bfb5ac0e64546aed070883a36fd0ccb65b1e6b08b7dcf32dd72b451a4d/cychien/eztweak"
---

# eztweak

> Point at your live app. Your agent fixes it.

eztweak turns any locally running dev server into an annotatable review surface for human ↔
agent iteration. The user marks up the **real page** - click an element, frame a region, select
some text, leave a comment - and the feedback flows to a local coding agent (Claude Code, Codex,
anything that can run a CLI) as structured items that resolve to **exact source locations**. The
agent edits the code, HMR updates the page in place, the user reviews the next round.

```
$ npx -y eztweak@latest http://localhost:5173/pricing --agent claude  # managed ACP agent
$ npx -y eztweak@latest http://localhost:5173/pricing                 # portable poll mode
$ npx -y eztweak@latest poll http://localhost:5173/                   # agent waits for feedback
```

- **Zero config.** A local daemon reverse-proxies your dev server and injects the annotation
  overlay. No code changes, no build plugins required, works with any framework.
- **Anchored feedback.** Annotations carry a layered anchor: `file:line` (with the optional Vite
  plugin), React component chain, `data-section`, CSS selector, text, viewport. Agents stop
  guessing which part…
