---
repo: "miguelrios/unc-skills"
name: "unc-skills"
description: "Skills I use to execute long-running coding agents without breaking my back."
readmeQualityOk: true
url: "https://github.com/miguelrios/unc-skills"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-07-13T20:31:50Z"
lastCommitAt: "2026-07-16T06:00:14Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 47
maintainers: ["miguelrios", "claudio-michel[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/91e33b24238514be03c830212d225b9eff9c2752508055c3a77a57006731aa28/miguelrios/unc-skills"
---

# unc-skills

Miguel's collection of portable Agent Skills for Claude Code, Codex, and pi.

| Skill | What it does | Cross-harness note |
|---|---|---|
| [`hands-free`](https://github.com/miguelrios/unc-skills/blob/HEAD/hands-free/) | Calls your phone when the coding agent needs an answer or approval. | Same Python/Vapi contract in all three harnesses. |
| [`parable`](https://github.com/miguelrios/unc-skills/blob/HEAD/parable/) | Plans implementation batches, routes work to cheaper executors, verifies, and reviews. | Claude/native subagents are used only when available; stock pi needs a configured CLI-backed executor. |
| [`cascade`](https://github.com/miguelrios/unc-skills/blob/HEAD/cascade/) | Runs large projects as bounded, evidence-gated development loops. | Falls back to a file-backed task graph when the harness has no task or wake primitives. |
| [`recall`](https://github.com/miguelrios/unc-skills/blob/HEAD/recall/) | Indexed local search over prior Claude Code and Codex sessions. | Runs from pi, but does not index pi's own transcripts yet. |
| [`recap`](https://github.com/miguelrios/unc-skills/blob/HEAD/recap/) | Reconstructs everything observable that happened in one exact…
