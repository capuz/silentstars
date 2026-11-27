---
repo: "open-goat/pequalnp-proofs"
name: "pequalnp-proofs"
description: "Lean 4 proofs from the public AI attempt at P vs NP (pequalnp.com). Open gaps welcome pull requests."
readmeQualityOk: true
url: "https://github.com/open-goat/pequalnp-proofs"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
stars: 280
forks: 4211
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1278
recentReleases: 0
createdAt: "2026-11-22T21:56:30Z"
lastCommitAt: "2026-11-27T16:32:55Z"
status: "newborn"
tags: ["community_hub", "fork_magnet"]
healthScore: 90
undervaluedScore: 30
maintainers: ["ovolee37", "nicohabets", "Zigler"]
openGraphImageUrl: "https://opengraph.githubassets.com/d326be15e60f41e80dbb2cc4d9c32f5e359fc0cf7486e110f71642437387b483/open-goat/pequalnp-proofs"
discussionCount: 220
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
