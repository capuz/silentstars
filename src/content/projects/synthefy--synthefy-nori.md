---
repo: "Synthefy/synthefy-nori"
name: "synthefy-nori"
description: "Open-source tabular foundation model for fast, training-free regression with predictive distributions."
readmeQualityOk: true
url: "https://github.com/Synthefy/synthefy-nori"
homepage: "https://docs.synthefy.com/nori/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["deep-learning", "foundation-model", "in-context-learning", "machine-learning", "probabilistic-machine-learning", "pytorch", "regression", "scikit-learn", "synthetic-data", "tabular-data"]
stars: 76
forks: 14
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2026-05-13T16:35:55Z"
lastCommitAt: "2026-10-21T20:01:14Z"
lastReleaseAt: "2026-06-20T15:36:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 35
maintainers: ["raimishah", "PohanLi-Synthefy", "minkyu-choi07"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1237927221/05d0db90-8842-4d55-b2a9-aa778bfe10dc"
discussionCount: 1
---

# Nori

Nori is a tabular foundation model for **regression**
via in-context learning (ICL). Given a few labeled rows as context, it predicts on
new query rows in a single forward pass, with no task-specific training or fine-tuning.
The model is trained entirely on synthetic data.

This repository contains the public training, inference, evaluation, and Hugging
Face checkpoint tooling.

Four models ship, and `model=` is required — there is no default:
**`"nori-6m"`** (the base), **`"nori-1-5"`**, **`"nori-30m"`**, and **`"nori-100m"`**
(the largest).
See [Benchmarks](#benchmarks) for how to evaluate any of them on the public suites.

## Table of contents

- [Use it from your AI coding assistant](#use-it-from-your-ai-coding-assistant)
- [Install](#install)
- [Quickstart](#quickstart)
- [Authentication](#authentication-optional)
- [How it works](#how-it-works)
- [Interpretability](#interpretability)
- [Benchmarks](#benchmarks)
- [Training](#training)
- [Evaluation](#evaluation)
- [Hugging Face](#hugging-face)
- [Repository layout](#repository-layout)
- [Citation](#citation)
- [License](#license)

## Use it from your AI coding assistant

Paste this into Claude Code, Cursor, or any AI…
