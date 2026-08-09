---
repo: "fractalyze/zorch"
name: "zorch"
description: "JAX-native building blocks for Modern SNARKs (∑ IOP). Proving-scheme- and Implementation-agnostic; fusion-first."
readmeQualityOk: true
url: "https://github.com/fractalyze/zorch"
homepage: "https://fractalyze.github.io/zorch/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["compiler", "cryptography", "gpu", "python", "zero-knowledge", "zk", "zk-proofs", "zk-snarks"]
stars: 11
forks: 0
openIssues: 39
closedIssues: 127
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-06-02T04:23:34Z"
lastCommitAt: "2026-08-09T04:47:33Z"
lastReleaseAt: "2026-07-05T07:35:33Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 57
maintainers: ["fractalyze-dev", "batzor", "chokobole"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d048dc28e31200f4660609cebc0b28dd8e91192038724f11462ec43ce061698/fractalyze/zorch"
---

# zorch

> **SNARK = Σ IOP Round**

FRX-native building blocks for proof systems. `zorch` sits between **FRX** —
Fractalyze's fork of [JAX](https://github.com/jax-ml/jax) — and the proof systems
that consume it: FRX provides tracing and codegen, lowered through **Fractalyze
XLA**, its fork of stock [XLA](https://github.com/openxla/xla) that adds native
field and elliptic-curve types. `zorch` provides the reusable pieces a proof
system is assembled from.

The banner is a mnemonic for where the work is, not a definition: repeated IOP
rounds are the core interactive computation, and a non-interactive argument adds
its relation, a Fiat–Shamir transform, and commitment machinery around them.
Folding and other families reuse the same pieces without fitting the equation
literally. So zorch's two units are the **round** — one step of a repeated
recurrence — and the **stage** — one claim reduction with paired prover and
verifier roles.

## Installation

**Python 3.11 on Linux x86_64, or macOS on Apple Silicon.** (`frxlib` ships a
cp311 wheel for those two platforms only — not 3.12/3.13, not Intel Macs.)

Install as `pyzorch`, import as `zorch` — the `zorch` name on PyPI belongs to an…
