---
repo: "oooscoos/Benzi"
name: "Benzi"
description: "Benzi is a coding AI agent + harness grounded in a live code map."
readmeQualityOk: true
url: "https://github.com/oooscoos/Benzi"
homepage: "https://benzi.fly.dev/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [67, 33]
topics: ["agentic-ai", "ai", "ai-agent", "ai-tools", "artificial-intelligence", "code-intelligence", "compiler", "developer-tools", "devtools", "framework"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-29T18:09:09Z"
lastCommitAt: "2026-08-21T04:11:40Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 47
maintainers: ["JDMBenzi", "oooscoos"]
openGraphImageUrl: "https://opengraph.githubassets.com/b682be9ff46039a3a4919c30eb52380f77709bd3226ffebb6ade0430f0c96721/oooscoos/Benzi"
---

</p>

<h1 align="center">Benzi</h1>

</p>

  <br>
  <sub>Select a symbol in the graph → ask about it → Benzi queries the map and answers.</sub>
</p>

---

## What is Benzi

Most AI coding agents dump a repository into a context window and hope the model finds what matters. Benzi works differently: before answering anything, a real compiler — built on tree-sitter — parses every file in the project and resolves it into a precise, queryable map. Every symbol, every call edge, every reference, every class in its inheritance chain. One pass, done.

The agent then navigates that map with structured tools — not grep, not embeddings. Where a function is defined, who calls it, what feeds its parameters, and where its return value ends up are each one O(1) lookup, every time.

## SWE-bench Verified

The full SWE-bench Verified set — 500 real GitHub issues from twelve Python repositories — run end to end on **DeepSeek v4-flash**, one attempt per instance, graded by the official `swebench.harness.run_evaluation` inside its own per-instance Docker images, with network access to GitHub and PyPI blocked inside every container.

| | |
|---|---|
| **Resolved** | **390 / 500 — 78.0%** |
| Total…
