---
repo: "Parcha-ai/parcha-skills"
name: "parcha-skills"
description: "Skills I use to execute long-running coding agents without breaking my back."
readmeQualityOk: true
url: "https://github.com/Parcha-ai/parcha-skills"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 60
forks: 3
openIssues: 10
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-07-13T20:31:50Z"
lastCommitAt: "2026-09-16T08:47:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 27
maintainers: ["claudio-michel[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac100017bb49aa8dfc0b8922011554967b0ba528e64fb9156c59d28e4990c44a/Parcha-ai/parcha-skills"
---

# parcha-skills

Our collection of portable Agent Skills for Claude Code, Codex, and pi.

| Skill | What it does | Cross-harness note |
|---|---|---|
| [`hands-free`](https://github.com/Parcha-ai/parcha-skills/blob/HEAD/hands-free/) | Calls your phone when the coding agent needs an answer or approval. | Same Python/Vapi contract in all three harnesses. |
| [`parable`](https://github.com/Parcha-ai/parcha-skills/blob/HEAD/parable/) | Plans implementation batches, routes work to cheaper executors, verifies, and reviews. | Claude/native subagents are used only when available; stock pi needs a configured CLI-backed executor. |
| [`cascade`](https://github.com/Parcha-ai/parcha-skills/blob/HEAD/cascade/) | Carries large projects through verifiable tasks and parallel work. | Keeps a living task graph; executes serially when parallel tools are unavailable. |
| [`recall`](https://github.com/Parcha-ai/parcha-skills/blob/HEAD/recall/) | Indexed local search over prior Claude Code and Codex sessions. | Runs from pi, but does not index pi's own transcripts yet. |
| [`recap`](https://github.com/Parcha-ai/parcha-skills/blob/HEAD/recap/) | Reconstructs everything observable that happened in one…
