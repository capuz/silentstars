---
repo: "pcharbon70/catena"
name: "catena"
description: "A distributed functional language with a pragmatic approach to category theory"
readmeQualityOk: true
url: "https://github.com/pcharbon70/catena"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-18T13:27:07Z"
lastCommitAt: "2026-08-28T12:23:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 58
maintainers: ["pcharbon70"]
openGraphImageUrl: "https://opengraph.githubassets.com/18454a4e0cd2050c7af09ca7b3a29bb36ae1199d476895258411570b4e6726e1/pcharbon70/catena"
---

# Catena

> A category theory-inspired functional programming language for the BEAM VM

## Rewrite in progress

Catena is being rebuilt from a clean foundation. This history intentionally
starts without the proof-of-concept implementation so the compiler,
architecture, and development workflow can be reconsidered without carrying
forward accidental constraints.

## Historical implementation

The complete proof-of-concept implementation and its history remain available
in Git:

- Branch: `archive/poc-v1`
- Final annotated tag: `poc-v1-final`

To inspect or build that implementation locally:

```bash
git switch archive/poc-v1
```

To return to the rewrite:

```bash
git switch rewrite
```

## Current status

The clean rewrite contains executable normative type-system,
data-and-pattern, clause-condition, trait/categorical-operation,
effect-handler, and 0.1.6 specification-and-governance slices. It also
contains the executable normative 0.1.7 editions-and-feature-lifecycle slice,
whose immutable promotion evidence is recorded in the research archive. The
normative 0.1.8 formal semantic kernel is also implemented: it adds an exact
S-expression conformance input, structural rows, a…
