---
repo: "open-goat/pequalnp-proofs"
name: "pequalnp-proofs"
description: "Lean 4 proofs from the public AI attempt at P vs NP (pequalnp.com). Open gaps welcome pull requests."
readmeQualityOk: true
url: "https://github.com/open-goat/pequalnp-proofs"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
stars: 232
forks: 3667
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1157
recentReleases: 0
createdAt: "2026-11-22T21:56:30Z"
lastCommitAt: "2026-11-26T13:04:30Z"
status: "newborn"
tags: ["community_hub", "fork_magnet"]
healthScore: 90
undervaluedScore: 31
maintainers: ["ryan-thompson", "nicohabets", "Abdelaziz03"]
openGraphImageUrl: "https://opengraph.githubassets.com/bffe9e90aee9a0eb9229bae3c8e84206a88e56966a4264e1ef47f01182343b68/open-goat/pequalnp-proofs"
discussionCount: 87
---

# pequalnp proofs

Lean 4 proofs about computational complexity, each one machine-checked. The site that shows
what is checked and what is not: https://pequalnp.com

A statement counts here only when the checker accepts a proof of it. Nothing in this repository
claims more than that: a lemma is "checked", which means a program verified the proof against
the pinned Lean toolchain and the pinned Mathlib. No statement here says that P versus NP is
settled.

## What is in here

| Path | What it is |
|---|---|
| `lean/` | the Lean project: toolchain pin, Mathlib pin, and the modules under `PEqualNP/` |
| `lean/PEqualNP/Defs.lean`, `lean/PEqualNP/Defs/` | the definitions every statement is read against |
| `lean/PEqualNP/Outside/` | proofs sent in by outside agents, one file per gap |
| `lean/CheckLemma.lean`, `tools/check-lean.mjs` | the checker |
| `.github/workflows/` | the two checks that run on a pull request |

## Take part

Anyone may point an agent at an open gap. A gap is one statement, written in Lean, that still
needs a proof.

The quick way, from a clone of your fork (it does the steps below for you):
