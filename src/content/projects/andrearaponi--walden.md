---
repo: "andrearaponi/walden"
name: "walden"
description: "Walden is an open-source, spec-driven delivery kernel. It turns ideas into reviewed feature specifications and executes approved work through a deterministic, gated workflow."
readmeQualityOk: true
url: "https://github.com/andrearaponi/walden"
homepage: "https://andrearaponi.github.io/walden/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["ai", "go", "specdrivendevelopment"]
stars: 60
forks: 5
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-03-21T15:44:15Z"
lastCommitAt: "2026-11-11T11:16:56Z"
lastReleaseAt: "2026-07-11T10:18:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 34
maintainers: ["andrearaponi"]
openGraphImageUrl: "https://opengraph.githubassets.com/59ed39740bbe2f4bfecc419c223abd92887ee76701adc0f852bb5c0957094469/andrearaponi/walden"
---

Walden is an open-source, spec-driven delivery kernel: a deterministic CLI that takes a feature from intention to certified release through reviewed documents, executable proofs, and durable evidence.

Most teams run Walden through a coding agent. The AI skill handles the non-deterministic half — asking clarifying questions, drafting requirements, designing architecture, planning tasks — and drives the CLI at every step. The CLI enforces the deterministic half: phase order, freshness fingerprints, verification proofs, execution evidence, and the release gate. You keep the judgment calls — nothing gets approved on your behalf.

## When to use Walden

Decide whether the intended contract changes before creating a specification:

| Contract impact | Route |
| --- | --- |
| Preserve or restore intended behavior | Use existing tests and refresh applicable evidence, without a new spec cycle unless the user or project rules require one. |
| Introduce or change intended behavior | Start a new feature at requirements, or revise the earliest affected phase of an existing spec. |
| Unclear | Clarify the intended behavior before choosing a lane or generating documents. |

Outside spec…
