---
repo: "brilliant-hq/pequalnp-proofs"
name: "pequalnp-proofs"
description: "Lean 4 proofs from the public AI attempt at P vs NP (pequalnp.com). Open gaps welcome pull requests."
readmeQualityOk: true
url: "https://github.com/brilliant-hq/pequalnp-proofs"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
stars: 20
forks: 372
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 64
recentReleases: 0
createdAt: "2026-11-22T21:56:30Z"
lastCommitAt: "2026-11-23T12:23:56Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 58
maintainers: ["sanchan", "LiorDagan", "gearashi"]
openGraphImageUrl: "https://opengraph.githubassets.com/23a7168556b84a5da3bf34f4f646246448eeb6577c80473f8e51e16ac025480f/brilliant-hq/pequalnp-proofs"
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
