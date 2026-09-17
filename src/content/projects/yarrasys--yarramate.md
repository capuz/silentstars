---
repo: "yarrasys/yarramate"
name: "yarramate"
description: "Give your coding agents correct architecture context: design declared once in git, mechanically checked, drift-detected, and rendered into verified briefs"
readmeQualityOk: true
url: "https://github.com/yarrasys/yarramate"
homepage: "https://yarramate.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agents", "architecture", "architecture-as-code", "cli", "developer-tools", "likec4", "open-source", "semantic-graph", "typescript", "yaml"]
stars: 12
forks: 0
openIssues: 7
closedIssues: 170
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-28T01:14:03Z"
lastCommitAt: "2026-09-17T08:51:26Z"
lastReleaseAt: "2026-07-30T03:18:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 59
maintainers: ["nabsha", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/25025128a3d3706506080383347e7faa620480777249d79e4a2f5154cd11b37d/yarrasys/yarramate"
---

# YarraMate

**[yarramate.dev](https://yarramate.dev)** ·
[Case study](https://github.com/yarrasys/yarramate/blob/HEAD/docs/CASE-STUDY-CROSS-HARNESS.md) ·
[Documentation](https://github.com/yarrasys/yarramate/blob/HEAD/docs/README.md)

Your coding agents re-derive your system's design every session — and each
one derives it a little differently. The design document that could stop
them says whatever it said the day someone last edited it.

YarraMate keeps the design as a small, checked model in git instead. Agents
and people read prose rendered from it — bounded briefs and open design
questions — write decisions back through validated batches, and the CLI
mechanically proves the model still matches the code as changes land.

There is no LLM inside and no service behind it: the engine is a
deterministic CLI, nothing leaves your repository, and git remains the only
governance — a proposed change becomes architecture when a human merges it.

> YarraMate is pre-release software. Interfaces may evolve before the first
> stable release.

## Two minutes to a model

```sh
npm install -g yarramate

yarramate init .                                 # scaffold .yarramate/, write the agent…
