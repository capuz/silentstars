---
repo: "nikhgarg/EconCSLib"
name: "EconCSLib"
description: "AI-assisted Lean formalization for Economics and Computation research"
url: "https://github.com/nikhgarg/EconCSLib"
homepage: "https://gargnikhil.com/EconCSLib/"
language: "Lean"
languages: ["Lean"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-31T15:30:01Z"
lastCommitAt: "2026-06-27T00:35:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["nikhgarg"]
openGraphImageUrl: "https://opengraph.githubassets.com/aeab512c0abfed855c2c9030c07b40278441989729c9bb75e4ea32dba5ef47ba/nikhgarg/EconCSLib"
---

# EconCSLib

EconCSLib is a Lean 4 project for checking results in Economics and
Computation. The repository has two roles:

- Build a reusable library of mathematical tools for EC: probability,
  optimization, matching, auctions, online algorithms, fair division, learning,
  and related foundations.
- Keep a paper-by-paper audit trail showing which source definitions and
  theorems have been formalized, which assumptions remain, and where the proof
  deviates from an informal paper argument.

The project is meant to support both formalization work and human review. A
human reader should be able to open a completed paper folder and understand
what was proved without reading the full Lean implementation.

## How The Repository Is Organized

- `EconCSLib/` is the reusable library. Code here should be paper-independent
  and useful across more than one formalization.
- `papers/` contains one folder per source paper. These folders preserve the
  paper's notation, theorem numbering, proof DAG, validation report, and
  human-facing Lean interface.
- `docs/` contains project documentation. Some files are human-facing strategy
  and status documents; others are detailed conventions for…
