---
repo: "yvestine/Probe-VAD"
name: "Probe-VAD"
description: "Training-free cumulative ordinal visual anomaly scoring for video anomaly detection with VideoLLaMA3."
readmeQualityOk: true
url: "https://github.com/yvestine/Probe-VAD"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [80, 20]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-08T07:02:27Z"
lastCommitAt: "2026-09-18T08:25:33Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 17
maintainers: ["zqlin2930-cmyk", "yvestine"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6165b2d57411bb9ea35ca5b8641bbee97a8c8b379486717e2b31c7498683336/yvestine/Probe-VAD"
---

# Probe-VAD

**Ordinal Likelihood Probing for Training-Free Video Anomaly Detection**

**Official implementation of [Probe-VAD: Ordinal Likelihood Probing for Training-Free Video Anomaly Detection](https://arxiv.org/abs/2609.17211).**

Probe-VAD is a training-free video anomaly detection framework built on
VideoLLaMA3. It directly scores raw video clips through ordinal likelihood
probing, without generating captions, anomaly tags, or refinement text.

This repository provides the official implementation of Probe-VAD together
with the code, evaluation scripts, precomputed scores, and experimental
results used in the paper. Additional ablations and analysis utilities are
included under `research_code/` and `results/experiments/` for reproducibility
and further study.

## Highlights

- Direct visual scoring with no caption bottleneck.
- Continuous ordinal score from ten cumulative likelihood questions.
- One video decode and one visual encoding shared by all thresholds.
- Batched threshold inference and optional language-model prefix KV cache.
- PAVA monotonic projection with a probabilistic expectation interpretation.
- Atomic per-video checkpoints and clip-level recovery after…
