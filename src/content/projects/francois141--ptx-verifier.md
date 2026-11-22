---
repo: "francois141/ptx_verifier"
name: "ptx_verifier"
description: "Volta analyzes NVIDIA PTX, AMD assembly, and AWS Trainium NKI kernels with symbolic execution, race detection, equivalence checking, and Lean proof extraction."
readmeQualityOk: true
url: "https://github.com/francois141/ptx_verifier"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 20
forks: 4
openIssues: 16
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-09-29T21:28:34Z"
lastCommitAt: "2026-11-22T02:04:53Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 33
maintainers: ["francois141", "merrittttt"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcd63e8269efc4699fee06a94292f84f097c619dad64ea2ce73d88c212e3f5fd/francois141/ptx_verifier"
---

Analyze accelerator kernels automatically. Choose the Fast Canonical Solver or the Powerful Lean Solver.

---

> **Warning**
>
> **Under active development.** We are actively building Volta, and not everything is ready yet. Features, instruction support, and solver workflows may change.

## Quick start

### Install

Rust and [uv](https://docs.astral.sh/uv/) are all the examples below need. The rest is only for [proving in Lean](#prove-sigmoid-in-lean): Lean, a Mathlib project in `~/mathlib-project` (`lake exe cache get` downloads Mathlib's prebuilt files, a few GB, instead of building it for hours) and Claude Code.
