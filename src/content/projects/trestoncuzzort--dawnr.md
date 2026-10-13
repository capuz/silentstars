---
repo: "trestoncuzzort/dawnr"
name: "dawnr"
description: "tuptech.org"
readmeQualityOk: true
url: "https://github.com/trestoncuzzort/dawnr"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["dafny", "formal-verification", "frama-c", "fstar", "lean4", "program-synthesis", "rocq", "spark-ada", "verus", "code-generation"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 29
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-08-03T01:57:54Z"
lastCommitAt: "2026-10-13T10:57:58Z"
lastReleaseAt: "2026-10-05T03:58:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 62
maintainers: ["trestoncuzzort"]
openGraphImageUrl: "https://opengraph.githubassets.com/77334c4cff9d003bf1869e46b20dd864d28933dbebcaad7d1dd40999aa7c6c8c/trestoncuzzort/dawnr"
---

# dawnr

dawnr combines local language models, program verification, and an assistant that works with code and documents.
It generates candidate programs, tests their behavior and specifications, checks them with proof tools, and uses
accepted results to build training data. The trained models can then propose new programs through the same checks.

The repository contains both the system and its working record: programs, contracts, deliberately broken variants,
counterexamples, datasets, model-training code, evaluation scripts, and measured results. Its applications include
checking selected PX4 flight-software routines against compiled C++ and recording proposed fixes alongside the
inputs that expose the original failures.

## What is implemented

| Part | What it does | Implementation |
|---|---|---|
| Program verification | Parses and checks `t` programs, translates them into proof-system inputs, and tests each verifier against a deliberately broken variant. | [`t/`](https://github.com/trestoncuzzort/dawnr/blob/HEAD/t/README.md), [`t/run_par.py`](https://github.com/trestoncuzzort/dawnr/blob/HEAD/t/run_par.py) |
| Specification checks | Checks contracts against examples and…
