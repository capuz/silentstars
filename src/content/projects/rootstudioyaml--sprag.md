---
repo: "rootstudioyaml/sprag"
name: "sprag"
description: "Model-delegation router for Claude Code and Codex: lookups, checks and test runs go to cheaper models; savings show in the statusline."
readmeQualityOk: true
url: "https://github.com/rootstudioyaml/sprag"
homepage: "https://sprag.io"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [77, 21]
topics: ["anthropic", "claude-code", "cli", "cost-optimization", "delegation", "developer-tools", "llm-router", "model-routing", "prompt-caching", "subagent"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-04-12T15:55:32Z"
lastCommitAt: "2026-11-04T02:56:48Z"
lastReleaseAt: "2026-09-15T17:17:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 62
maintainers: ["rootstudioyaml"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fac968df73be1127ba9255e9a586c9b7c229ecffe62a3df1303aa0eb5ca4195/rootstudioyaml/sprag"
discussionCount: 1
---

**A model-delegation router for Claude Code and Codex: lookups, checks and test runs go to cheaper models, and the savings show up in your statusline.**

[English](https://github.com/rootstudioyaml/sprag/blob/main/README.md) · [한국어](https://github.com/rootstudioyaml/sprag/blob/main/README.ko.md)

[sprag.io](https://sprag.io) · [Benchmark](https://github.com/rootstudioyaml/sprag/blob/main/docs/BENCHMARK.md)

**Sprag Pro · for teams**: your whole team's AI spend and savings, on one screen.<br>

Same 12 requests, two terminals: **$6.68 → $1.83 (−72.6%)** with Sprag.<br>

---

**Sprag routes each piece of work to the cheapest model that has never got it
wrong.** Claude Code and Codex cannot switch models per prompt, so Sprag does it
the one way that works: rules in the main session hand lookups, status checks,
build and test runs and batch edits to sub-agents pinned to a cheaper model. The
rules come from your own session logs, you approve each one, and every delegated
run writes its price difference to a ledger. `npm i -g sprag-cli` sets it all
up; nothing to configure per project.

Two more things ride along. Documents reach the context as compact Markdown (a
540k-token deck becomes…
