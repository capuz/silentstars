---
repo: "zhang-fengdi/DEPAF"
name: "DEPAF"
description: "Official implementation of \"Self-contrastive learning enables interference-resilient and generalizable fluorescence microscopy signal detection without interference modeling.\""
readmeQualityOk: true
url: "https://github.com/zhang-fengdi/DEPAF"
language: "MATLAB"
languages: ["MATLAB"]
languagePcts: [100]
topics: ["bioimage-analysis", "fluorescence-microscopy", "microscopy-image-processing", "self-supervised-learning", "signal-detection", "unsupervised-learning", "self-contrastive-learning"]
stars: 62
forks: 9
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 1
createdAt: "2025-04-10T15:43:07Z"
lastCommitAt: "2026-10-28T03:50:44Z"
lastReleaseAt: "2026-10-27T08:10:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 27
maintainers: ["zhang-fengdi"]
openGraphImageUrl: "https://opengraph.githubassets.com/86f40205bb6ca3be1fc6a93b64ce64e0098444fe4ea184776e560e2f21b48d58/zhang-fengdi/DEPAF"
---

# DEPAF

## Contents

- [Overview](#overview)
- [Key features](#key-features)
- [Applications](#applications)
- [Representative results](#representative-results)
- [Getting started](#getting-started)
- [License](#license)
- [Citation](#citation)

## Overview


**DE**ep **PA**ttern **F**itting (DEPAF) is a self-contrastive learning-based fluorescence microscopy signal detection framework that achieves interference robustness *without* interference modeling, while offering high generalizability across POI-representable signal classes, unsupervised training, and a compact, user-friendly design.
Fluorescence microscopy signals often exhibit reusable local structures, such as point spread functions (PSFs), periodic fluctuations, and specific frequency distributions. DEPAF represents these structures using small data segments containing “patterns of interest” (POIs), which define the signal prototypes to be detected.
Conceptually related to prior self-contrastive learning and asymmetric consistency methods, DEPAF implements an integrated signal-detection design in which a neural POI-fitting path and a POI-constrained decoding path are linked through signal-level…
