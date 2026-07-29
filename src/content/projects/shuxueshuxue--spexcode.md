---
repo: "shuxueshuxue/Spexcode"
name: "Spexcode"
description: "SDD that actually works."
readmeQualityOk: true
url: "https://github.com/shuxueshuxue/Spexcode"
homepage: "https://spexcode.net"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [63, 30]
stars: 105
forks: 12
openIssues: 26
closedIssues: 47
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-19T16:52:26Z"
lastCommitAt: "2026-07-29T06:06:58Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 32
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c5eaf11faf5ee509fe5ca94d12ecdea98db83e3c91fc970981ac8afd88a2c7c6/shuxueshuxue/Spexcode"
---

<p>
</p>

<p>
</p>

</div>

Spec-driven development with AI agents in the loop. SpexCode keeps a versioned tree of specs inside
your git repo, links every spec to the code it governs, and runs a session manager that dispatches
coding agents into isolated worktrees. You review and merge; the tool keeps intent and
implementation from drifting apart.

<sub>▶ This repo's own spec tree, replayed from its git history — 160 spec nodes growing over three weeks. Click for the [full video](https://spexcode.net/assets/spec-tree-growth.mp4).</sub>

English | [中文](https://github.com/shuxueshuxue/Spexcode/blob/HEAD/docs/README.zh-CN.md) · Docs: [spexcode.net](https://spexcode.net) · License: MIT

Quick links: [the model](#the-model) · [quick start](#quick-start) ·
[agents](#working-with-agents) · [eval](#measuring-behavior-eval) · [config](#configuration)

## The model

A spec node is a directory under `.spec/` containing a `spec.md`: frontmatter (title, status, a
`code:` pointer to the file it governs, a `related:` list for files it references) plus a prose
body stating what that part of the system is supposed to do, right now. Nodes nest, so the tree
mirrors how you think about the project…
