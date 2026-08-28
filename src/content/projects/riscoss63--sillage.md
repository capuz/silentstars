---
repo: "riscoss63/sillage"
name: "sillage"
description: "Your language model forgets everything. Sillage gives it a 4 MB memory that persists across sessions, no gradients, no fine-tuning, no growing index. Beats an unbounded kNN-LM at 1/13 the storage (perplexity 31 → 17). CPU-only, fully reproducible, four preprints with Zenodo DOIs."
readmeQualityOk: true
url: "https://github.com/riscoss63/sillage"
homepage: "https://huggingface.co/spaces/riscoss/Sillage"
language: "Python"
languages: ["Python", "TeX"]
languagePcts: [72, 28]
topics: ["associative-memory", "continual-learning", "gpt2", "hebbian-learning", "hyperdimensional-computing", "knn-lm", "llm", "memory", "numpy", "qwen"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-08-24T10:10:57Z"
lastCommitAt: "2026-08-28T15:36:36Z"
lastReleaseAt: "2026-08-28T09:10:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["riscoss63"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b9bb9cfe723626c2cf3542069880d15807b2b6d8183a24c9a96a47c97eeee6a/riscoss63/sillage"
---

# Sillage

**Your language model forgets everything. Sillage gives it a memory — and a
way to keep learning — in a fixed handful of megabytes, with no gradients and
no index that grows.**

> *sillage* (n., French) — the trace left behind by something that has passed:
> a ship's wake, a scent in a room. What a model keeps of what it read.

A frozen LM reads your documents, remembers them, and predicts better next
time — **no gradients, no fine-tuning, no growing index**. One Hebbian matrix
written as the model reads, a semantic tier routed by confidence, a cold store
that consolidates by surprise, and a rank-16 adapter on the readout. Four
mechanisms, eight papers, **one command-line tool**. Everything runs on a
laptop CPU.

Two sessions, two days apart, nothing kept in context: on Tuesday the second
draft costs **half** the perplexity it would have cost on Monday (10.68 -> 5.39),
and the model completes a sentence it can only know from what it read.

**[Try it in your browser](https://huggingface.co/spaces/riscoss/Sillage)** —
no install, no account: a memory that has already read one of the papers, and
a box to feed it your own text.

---

## Quickstart (60 seconds, then a…
