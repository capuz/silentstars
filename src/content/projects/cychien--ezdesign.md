---
repo: "cychien/ezdesign"
name: "ezdesign"
description: "Tweak your app's UI by annotating the live page"
readmeQualityOk: true
url: "https://github.com/cychien/ezdesign"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-09T12:39:34Z"
lastCommitAt: "2026-10-29T12:25:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["cychien"]
openGraphImageUrl: "https://opengraph.githubassets.com/e39f6b0f9353e939f82f4598d1369495f854bf23290e533718bcfb8a2d21b051/cychien/ezdesign"
---

> Point at your live app. Your agent fixes it.

ezdesign turns any locally running dev server into an annotatable review surface for human ↔
agent iteration. The user marks up the **real page** - click an element, frame a region, select
some text, leave a comment - and the feedback flows to a local coding agent (Claude Code, Codex,
anything that can run a CLI) as structured items that resolve to **exact source locations**. The
agent edits the code, HMR updates the page in place, the user reviews the next round. Beside the
app, **canvases** hold HTML designs the agent draws, for exploring ideas before (or instead of)
changing the real thing.

```
$ npx -y @cychien/ezdesign@latest http://localhost:5173/pricing --agent claude  # managed ACP agent
$ npx -y @cychien/ezdesign@latest http://localhost:5173/pricing                 # portable poll mode
$ npx -y @cychien/ezdesign@latest poll                                          # agent waits for feedback
$ npx -y @cychien/ezdesign@latest --agent claude                                # no dev server: canvases only
```

- **Zero config.** A local daemon reverse-proxies your dev server and injects the annotation
  overlay. No code changes,…
