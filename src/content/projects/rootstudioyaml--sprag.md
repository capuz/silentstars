---
repo: "rootstudioyaml/sprag"
name: "sprag"
description: "Model-delegation router for Claude Code and Codex: lookups, checks and test runs go to cheaper models; savings show in the statusline."
readmeQualityOk: true
url: "https://github.com/rootstudioyaml/sprag"
homepage: "https://sprag.io"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [77, 20]
topics: ["anthropic", "claude-code", "cli", "cost-optimization", "delegation", "developer-tools", "llm-router", "model-routing", "prompt-caching", "subagent"]
stars: 7
forks: 1
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-04-12T15:55:32Z"
lastCommitAt: "2026-11-07T13:56:30Z"
lastReleaseAt: "2026-09-15T17:17:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 62
maintainers: ["rootstudioyaml"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9958716d435c34fe04241b984058fde3c230e44303eccc3a8f3463eda9bfb92/rootstudioyaml/sprag"
discussionCount: 1
---

**The delegation layer for Claude Code and Codex. Each task goes to the model and effort that fits it: down to Haiku for a lookup, up to higher effort or a stronger model when a cheaper run would miss. Every rule is backed by replayed cases you can open.**

[English](https://github.com/rootstudioyaml/sprag/blob/main/README.md) · [한국어](https://github.com/rootstudioyaml/sprag/blob/main/README.ko.md)

[sprag.io](https://sprag.io) · [Benchmark](https://github.com/rootstudioyaml/sprag/blob/main/docs/BENCHMARK.md) · [Proof](https://sprag.io/proof/)

**Sprag Pro and Enterprise · for teams**: one set of delegation rules for the whole team. Approve a rule once and every machine follows it.<br>

Same 12 requests, two terminals: **$6.68 → $1.83 (−72.6%)** with Sprag.<br>

---

**Sprag sends each piece of work to the cheapest model and effort that does not
get it wrong.** Claude Code and Codex cannot switch models per prompt, so Sprag
does it the one way that works: rules in the main session hand work to
sub-agents pinned to a model and an effort. Lookups, status checks, build and
test runs go down to Haiku. Work that a cheaper run misses without saying so
goes up instead: a lookup spread…
