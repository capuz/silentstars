---
repo: "microtensor-io/microtensor-subnet"
name: "microtensor-subnet"
description: "Microtensor - Bittensor subnet testnet netuid 576. Frontier accuracy at a fraction of the size, gated on a verified deployment envelope."
readmeQualityOk: true
url: "https://github.com/microtensor-io/microtensor-subnet"
homepage: "https://www.microtensor.cloud"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "bittensor", "bittensor-subnet", "inference", "inference-engine", "mainnet", "slms"]
stars: 5
forks: 3
openIssues: 7
closedIssues: 38
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-08-15T12:22:38Z"
lastCommitAt: "2026-11-07T13:54:50Z"
lastReleaseAt: "2026-08-22T11:53:06Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 71
maintainers: ["BANADDA"]
openGraphImageUrl: "https://opengraph.githubassets.com/eaa3e8eb02713cb05e911780c650515d41094f70a26357bddd88889d62e194c4/microtensor-io/microtensor-subnet"
---

---

> **Abstract.** Most production language model traffic is narrow and repetitive, yet it is served by frontier models at frontier cost. Task specific small models can match frontier quality on a fixed distribution at a small fraction of the cost, but the evidence needed to trust them does not exist: public benchmarks leak into training data, and private evaluations are run by the party being evaluated. Microtensor is a Bittensor subnet that treats **evaluation as the primary artifact**. For each task, an *arena* fixes one base model, a grader and a pool of hidden items that is replaced every epoch. Miners fine tune the base and submit a complete system of model, harness, router and escalation path. They run that system on their own GPUs inside pinned images and publish a signed transcript of every call. Validators replay each transcript on CPU, re-execute sampled model calls on identical hardware with an exact token match, and score every part against the base model using one sided lower confidence bounds. The output is a specialist whose published quality is a verified measurement rather than a claim, served through one API.

## Contents

1. [The problem](#1-the-problem)
2.…
