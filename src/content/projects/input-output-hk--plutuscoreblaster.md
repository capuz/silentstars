---
repo: "input-output-hk/PlutusCoreBlaster"
name: "PlutusCoreBlaster"
description: "Plutus Core, CEK Machine in Lean 4, tailored for Blaster usage"
readmeQualityOk: true
url: "https://github.com/input-output-hk/PlutusCoreBlaster"
language: "Lean"
languages: ["Lean"]
languagePcts: [97]
stars: 14
forks: 7
openIssues: 6
closedIssues: 4
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-04-07T09:37:42Z"
lastCommitAt: "2026-10-30T11:02:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 33
maintainers: ["mpetruska", "RSoulatIOHK", "etiennejf"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa254564243328532231788dc04fb434e77633131a1dd48d2288c18870f0fba6/input-output-hk/PlutusCoreBlaster"
---

# PlutusCoreBlaster

PlutusCoreBlaster is a Lean 4 formalization of [Untyped Plutus Core (UPLC)](https://plutus.cardano.intersectmbo.org/resources/plutus-core-spec.pdf), the smart contract execution language of Cardano. It provides UPLC syntax, decoders, a CEK evaluator, builtin functions, tests, and tools for preparing programs for proofs. The project is working toward conformance with the Haskell reference implementation; see [Conformance testing](#conformance-testing) for the current scope.

## Contents

- [Installation and building](#installation-and-building)
- [Using the library](#using-the-library)
- [Libraries and modules](#libraries-and-modules)
- [Preparing a UPLC program](#preparing-a-uplc-program)
- [Testing](#testing)
- [Conformance testing](#conformance-testing)
- [Benchmarks](#benchmarks)
- [Current scope](#current-scope)
- [Contributing](#contributing)

## Installation and building

Install z3 version 4.15.2.
Install Lean 4 through [elan](https://github.com/leanprover/elan). The version selected by this repository is recorded in [`lean-toolchain`](https://github.com/input-output-hk/PlutusCoreBlaster/blob/HEAD/lean-toolchain) (currently 4.24.0). Lake fetches the…
