---
repo: "scottnarmstrong/MarkovProcess"
name: "MarkovProcess"
description: "Sub-Markov kernel semigroups and continuous-path Markov processes in Lean 4 / Mathlib"
readmeQualityOk: true
url: "https://github.com/scottnarmstrong/MarkovProcess"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-02T12:12:54Z"
lastCommitAt: "2026-11-03T18:39:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 62
undervaluedScore: 14
maintainers: ["scottnarmstrong"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3b3e82d054b0645633238f851df04f97cf633de9bcbc0aba745aba6642fc3ad/scottnarmstrong/MarkovProcess"
---

# MarkovProcess

A **Lean 4** library of sub-Markov transition semigroups, Feller semigroups,
and the continuous-path Markov processes they generate, built on
[`mathlib`](https://github.com/leanprover-community/mathlib4).

## What this is

This repository constructs, from a transition semigroup on a locally compact Polish state space, the
continuous-path Markov process with those transition probabilities, and proves that it is
unique and strong Markov. Everything is stated for every starting point: the process is a
measurable kernel from the state space to path space, and no statement holds only outside an
exceptional set. On that construction the library builds the process killed on leaving an open
set and the gluing of the local resolvents of an exhaustion into a minimal resolvent, the
one-point compactification of a locally compact live space and the process it carries, exit
times and exit laws, Dynkin's formula and optional stopping, and the Feynman-Kac semigroup of a
bounded potential. It contains no PDE and no model-specific assumption, and its only dependency
is Mathlib.

- **249 Lean modules plus the root module `MarkovProcess.lean`, about 45,700 lines** (`MODULES.md`…
