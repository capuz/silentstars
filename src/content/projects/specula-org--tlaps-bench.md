---
repo: "specula-org/tlaps-bench"
name: "tlaps-bench"
description: "TLAPS Proof Benchmark"
readmeQualityOk: true
url: "https://github.com/specula-org/tlaps-bench"
homepage: "https://specula-org.github.io/tlaps-bench-website"
language: "TLA"
languages: ["TLA"]
languagePcts: [87]
stars: 13
forks: 2
openIssues: 4
closedIssues: 28
watchers: 0
contributors: 13
recentReleases: 1
createdAt: "2026-05-12T14:28:10Z"
lastCommitAt: "2026-08-19T04:07:28Z"
lastReleaseAt: "2026-07-13T09:30:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 54
maintainers: ["Qian-Cheng-nju", "munimthahmid", "Saadmrp1038"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2f37a65373e85cb3e40d20f22650af9f365a61e48f0c3f5ebf7f797c29638a1/specula-org/tlaps-bench"
---

# TLAPS Proof Benchmark

A benchmark for evaluating AI's ability to write [TLAPS](https://proofs.tlaplus.net/doc/) (TLA+ Proof System) proofs.

Benchmark results are available on the [TLAPS-Bench website](https://specula-org.github.io/tlaps-bench-website/).

## Overview

TLAPS proofs are checked mechanically by `tlapm`: a proof is either accepted or
rejected, with no partial credit and no room for a plausible-but-wrong argument.
That makes proof construction a sharp test of an AI's formal reasoning.

Each task presents a TLA+ theorem whose proof body is replaced by `PROOF OBVIOUS`;
the AI must replace it with a real proof that `tlapm` accepts. Tasks come in two
types:

- **Proof completion** (`--mode proof-completion`) — the model and proof scaffold
  (inductive invariants, lemma decomposition, and preceding lemmas marked
  `PROOF OMITTED`) are given as read-only context, and the AI fills in one
  marked target proof.
- **Proof from scratch** (`--mode proof-from-scratch`) — only the model and
  the target theorem statement remain; the AI must invent the entire proof
  structure, including any helper lemmas.

## Benchmark problems

The benchmark draws on two kinds of source. A base…
