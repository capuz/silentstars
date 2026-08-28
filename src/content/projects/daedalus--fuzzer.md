---
repo: "daedalus/fuzzer"
name: "fuzzer"
description: "Information-dense, coverage-guided binary fuzzer "
readmeQualityOk: true
url: "https://github.com/daedalus/fuzzer"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["afl-fuzz", "concolic", "fuzzer", "smt", "asan", "msan", "ubsan"]
stars: 38
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-18T18:09:54Z"
lastCommitAt: "2026-08-28T12:10:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 33
maintainers: ["daedalus", "Copilot", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/edcefde0aae892913d0e5c58ddcd2bb38d5589a13428e90e0b1ee379c7bc8fbb/daedalus/fuzzer"
---

# fuzzer-tool

**Information-dense, coverage-guided binary fuzzer** with Markov generation, Monte Carlo optimization, grammar-aware mutations, and 40+ scheduling strategies — including Elo arbitration, evolutionary algorithms, and information-theoretic scoring.

> **Honest caveat**: This is the most complex fuzzer from an information-theory standpoint, and also the slowest raw-throughput. The tradeoff is speed for edge-discovery novelty. For production fuzzing at scale, AFL family fuzzers remain the best choice.

---

## Quick Start

```bash
pip install -e ".[dev]"

# Basic fuzzing — coverage-guided by default
fuzzer-tool fuzz ./target

# With a dictionary
fuzzer-tool fuzz -D dictionary.txt ./target

# In-process mode (fastest for .so targets)
fuzzer-tool fuzz libfoo.so --inprocess

# Blind mutation, no edge bitmap (crash detection still works)
fuzzer-tool fuzz ./target --no-coverage

# With Markov generation + Monte Carlo bandit
fuzzer-tool fuzz --markov --markov-gen --mc-bandit --mc-cem ./target

# Resume a previous session
fuzzer-tool fuzz ./target --resume
```

---

## Core Capabilities

### Mutation Engine
40+ mutation operators: bit/byte flips, arithmetic (1/2/4/8-byte…
