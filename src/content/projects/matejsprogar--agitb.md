---
repo: "matejsprogar/agitb"
name: "agitb"
description: "Artificial General Intelligence Testbed"
readmeQualityOk: true
url: "https://github.com/matejsprogar/agitb"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["artificial-general-intelligence", "metrics"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-12-03T09:38:22Z"
lastCommitAt: "2026-10-29T10:20:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 69
maintainers: ["matejsprogar"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed2adf10ab0aefc1ee17a4dc9b949ec920cc92b2b92c3f3abb8771dedf63195f/matejsprogar/agitb"
discussionCount: 1
---

# AGITB – Artificial General Intelligence Testbed

A small, self-contained C++ benchmark that evaluates predictive models on raw binary streams, 
intended as a practical step toward artificial general intelligence. Provide your model and run AGITB.
By design, most systems will not pass.

AGITB includes 12 short, intuitive, fully automated tests.

- header-only implementation
- no dependencies
- deterministic and reproducible
- builds in seconds

Concept paper: [doc/FR4AGI.pdf](https://github.com/matejsprogar/agitb/blob/HEAD/doc/FR4AGI.pdf)

### Quick start

Compile and run the provided stub model:

```bash
g++ -std=c++23 stub.cpp -o stub
$ ./stub
```
Example output (the stub fails on test #3):
```text
Artificial General Intelligence Testbed

Running the tests...
#1 Uninformed start
#2 Determinism
#3 Trace
1/5000

Assertion failed in agitb.h:147
not A.behaves_identically(B)

rng_seed: 2140661623
```

---

## Motivation

> **The ability to pass AGITB is a necessary condition for moving beyond narrow, task-specific AI.**

While many current AI systems create the impression of intelligence, they lack grounded understanding and therefore cannot be considered genuine instances of AGI.…
