---
repo: "PnVDiscord/PnVRocqLib"
name: "PnVRocqLib"
description: "📝 A Rocq library written by members of PnV Discord Server"
readmeQualityOk: true
url: "https://github.com/PnVDiscord/PnVRocqLib"
language: "Rocq Prover"
languages: ["Rocq Prover"]
languagePcts: [100]
topics: ["completeness", "first-order-logic", "propositional-logic", "soundness", "rocq-library", "coq-formalization", "coq-library"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-08-21T07:14:33Z"
lastCommitAt: "2026-09-02T08:05:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 60
maintainers: ["KiJeong-Lim"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a9eb559b60ff989e7d9edb8d56fb15497a149bac9f4edf00549f09f2fcb295f/PnVDiscord/PnVRocqLib"
---

# PnVRocqLib

A Rocq library written by members of [PnV Discord Server](https://github.com/PnVDiscord).

- Currently, this library is standalone.

## 1. How to build

```bash
git clone https://github.com/PnVDiscord/PnVRocqLib.git
cd PnVRocqLib

eval `opam env`
rocq makefile -f _CoqProject -o CoqMakefile
eval "$(opam env)" && make -f CoqMakefile -j
```

### `rocq -v`

```
The Rocq Prover, version 9.2.0
compiled with OCaml 5.2.1
```

## 2. Contents

Our main results are as follows:

- [x] The weak completeness of propositional logic. (`Corollary weak_completeness` in [`PropositionalLogic.v`](https://github.com/PnVDiscord/PnVRocqLib/blob/HEAD/theories/Logic/PropositionalLogic.v))

- [x] The soundness, completeness, and compactness theorems of propositional logic. (`Theorem the_propositional_soundness_theorem`, `Theorem the_propositional_completeness_theorem`, and `Corollary the_propositional_compactness_theorem` in [`ClassicalPropositionalLogic.v`](https://github.com/PnVDiscord/PnVRocqLib/blob/HEAD/theories/Logic/ClassicalPropositionalLogic.v))

- [x] The Kleene fixed-point theorem. (`Theorem lfp_returns_the_least_fixed_point` in…
