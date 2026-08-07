---
repo: "Parcha-ai/parcha-skills"
name: "parcha-skills"
description: "Skills I use to execute long-running coding agents without breaking my back."
readmeQualityOk: true
url: "https://github.com/Parcha-ai/parcha-skills"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 16
forks: 3
openIssues: 8
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-07-13T20:31:50Z"
lastCommitAt: "2026-08-07T05:15:52Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 37
maintainers: ["claudio-michel[bot]", "chris-cache[bot]", "miguelrios"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d6463f54df90c7b865a013ba6c769ba9a598cef9f815cbc9c1bf55a4c72d89e/Parcha-ai/parcha-skills"
---

# parcha-skills

Our collection of portable Agent Skills for Claude Code, Codex, and pi.

| Skill | What it does | Cross-harness note |
|---|---|---|
| [`hands-free`](https://github.com/Parcha-ai/parcha-skills/blob/HEAD/hands-free/) | Calls your phone when the coding agent needs an answer or approval. | Same Python/Vapi contract in all three harnesses. |
| [`parable`](https://github.com/Parcha-ai/parcha-skills/blob/HEAD/parable/) | Plans implementation batches, routes work to cheaper executors, verifies, and reviews. | Claude/native subagents are used only when available; stock pi needs a configured CLI-backed executor. |
| [`cascade`](https://github.com/Parcha-ai/parcha-skills/blob/HEAD/cascade/) | Runs large projects as bounded, evidence-gated development loops. | Falls back to a file-backed task graph when the harness has no task or wake primitives. |
| [`recall`](https://github.com/Parcha-ai/parcha-skills/blob/HEAD/recall/) | Indexed local search over prior Claude Code and Codex sessions. | Runs from pi, but does not index pi's own transcripts yet. |
| [`recap`](https://github.com/Parcha-ai/parcha-skills/blob/HEAD/recap/) | Reconstructs everything observable that happened in…
