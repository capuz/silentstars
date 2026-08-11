---
repo: "kengo006/alexandria"
name: "alexandria"
description: "A citation-integrity-first academic writing system for Claude Code and Obsidian — six roles, a verbatim-to-source quote pipeline, and the governance that keeps it honest."
readmeQualityOk: true
url: "https://github.com/kengo006/alexandria"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["academic-writing", "citation-integrity", "claude-code", "humanities", "multi-agent", "obsidian"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-07-11T05:13:55Z"
lastCommitAt: "2026-08-11T04:47:59Z"
lastReleaseAt: "2026-08-02T05:23:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 21
maintainers: ["kengo006"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fd919895ccfa540963153f7a863facc77be00f88b6465509b0e0b4b75662987/kengo006/alexandria"
---

# Alexandria

**A citation-integrity-first academic writing system for Claude Code and Obsidian.**

Large language models fabricate citations. A recent [cross-model audit](https://arxiv.org/abs/2603.03299) of ten models measured reference-fabrication rates between 11.4% and 56.8%, and most tooling attacks the problem *after* the text is written, by detecting hallucinated references. Alexandria attacks it *before*: it is a six-role writing system whose workflow makes fabrication structurally difficult. Every verbatim quote must be read back from the source PDF at a real page number, pass four verification layers, survive a blind review, and be audited line-by-line before a draft is allowed to call itself done.

Alexandria is not a library or a server. It is a set of role definitions, methods, and governance files you drop into [Claude Code](https://claude.com/claude-code), pointed at your own [Obsidian](https://obsidian.md) vault.

**Where it comes from.** I am a graduate student in Taiwan working at the intersection of political philosophy and AI ethics. Alexandria is the system that carries that research in production — every gate in it was added because something actually went…
