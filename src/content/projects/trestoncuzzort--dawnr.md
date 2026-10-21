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
recentReleases: 1
createdAt: "2026-08-03T01:57:54Z"
lastCommitAt: "2026-10-21T08:49:25Z"
lastReleaseAt: "2026-10-05T03:58:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["trestoncuzzort"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d4e41996aa7e5cae7b2b4e2721e7e2c2f16e20f7c494f219498e1fcb8138646/trestoncuzzort/dawnr"
---

# dawnr

dawnr combines local language models, program verification, and an assistant that works with code and documents.
It generates candidate programs, tests their behavior and specifications, checks them with proof tools, and uses
accepted results to build training data. The trained models can then propose new programs through the same checks.

The focus is better coding and reasoning through checked programs and better training data. Repository and
document tools support that work. Controlling the whole computer is outside the project's scope.

The repository contains both the system and its working record: programs, contracts, deliberately broken variants,
counterexamples, datasets, model-training code, evaluation scripts, and measured results. Its applications include
checking selected PX4 flight-software routines against compiled C++ and recording proposed fixes alongside the
inputs that expose the original failures.

## Start in a terminal

```bash
git clone https://github.com/trestoncuzzort/dawnr
cd dawnr
./install.sh
export PATH="$HOME/.local/bin:$PATH"
dawnr doctor
dawnr do "Explain this project's structure and tests" --read-only
```

Run the last command inside the…
