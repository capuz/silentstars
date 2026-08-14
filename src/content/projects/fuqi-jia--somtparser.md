---
repo: "fuqi-jia/SOMTParser"
name: "SOMTParser"
description: "A C++ SMT/OMT Parser Library"
readmeQualityOk: true
url: "https://github.com/fuqi-jia/SOMTParser"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 24
forks: 4
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-03-25T12:26:38Z"
lastCommitAt: "2026-08-14T05:14:20Z"
lastReleaseAt: "2026-03-14T12:37:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 64
maintainers: ["fuqi-jia", "Ailuras"]
openGraphImageUrl: "https://opengraph.githubassets.com/f46ac2c03a0155b3991a3bd85d6a6a944df0ddda66016eb1b46935bc2fb14197/fuqi-jia/SOMTParser"
---

# SOMTParser

**SOMTParser** is a solver-independent C++17 front-end library for SMT-LIB and OMT (Optimization Modulo Theories). It parses input into a **typed DAG-based intermediate representation (IR)** and provides modular front-end functionality—parsing, type checking, traversals, rewriting, and formula-level processing—around this IR, separating reusable front-end logic from backend reasoning and reducing the effort to build new solvers and SMT-based tools.

## Design Overview

- **Frontend**: Command and term parsing, type checking, OMT-oriented input, and API-level expression construction feeding the same IR pipeline.
- **IR core**: A unified typed DAG representation with structure sharing and canonicalization via `NodeManager`; equal subterms are stored once.
- **Passes**: IR-based traversal (each node visited at most once) and rewriting (bottom-up, with fixpoint mode), plus a kind-based dispatch mechanism for extensions.
- **Utilities**: Formula conversion (NNF, CNF, DNF, including CDCL(T)-style Boolean abstraction), model parsing, and evaluation under full or partial models.

## Key Features

- **SMT-LIB2 support**: Compliant with the SMT-LIB2 specification; multiple…
