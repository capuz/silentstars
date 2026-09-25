---
repo: "AI-SDC/SACRO-ML"
name: "SACRO-ML"
description: "Collection of tools and resources for managing the statistical disclosure control of trained machine learning models"
readmeQualityOk: true
url: "https://github.com/AI-SDC/SACRO-ML"
homepage: "https://ai-sdc.github.io/SACRO-ML/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["attribute-inference-attack", "data-privacy", "data-protection", "inference", "machine-learning", "membership-inference-attack", "privacy", "differential-privacy", "statistical-disclosure-control"]
stars: 40
forks: 8
openIssues: 16
closedIssues: 136
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2022-07-28T10:30:56Z"
lastCommitAt: "2026-09-25T09:01:46Z"
lastReleaseAt: "2023-10-30T16:04:44Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["shamykyzer", "rpreen", "ssrhaso"]
openGraphImageUrl: "https://opengraph.githubassets.com/d71867c735c1483c7eb169bca4073a911725953c4d7e0d9465e109dd482a1e5b/AI-SDC/SACRO-ML"
discussionCount: 1
---

# SACRO-ML: Disclosure Control Tools for ML Models

An increasing body of work has shown that [machine learning](https://en.wikipedia.org/wiki/Machine_learning) (ML) models may expose confidential properties of the data on which they are trained. This has resulted in a wide range of proposed attack methods with varying assumptions that exploit the model structure and/or behaviour to infer sensitive information.

The `sacroml` package is a collection of tools and resources for managing the [statistical disclosure control](https://en.wikipedia.org/wiki/Statistical_disclosure_control) (SDC) of trained ML models. In particular, it provides:

* A **safemodel** package that extends commonly used ML models to provide *ante-hoc* SDC by assessing the theoretical risk posed by the training regime (such as hyperparameter, dataset, and architecture combinations) *before* (potentially) costly model fitting is performed. In addition, it ensures that best practice is followed with respect to privacy, e.g., using [differential privacy](https://en.wikipedia.org/wiki/Differential_privacy) optimisers where available. For large models and datasets, *ante-hoc* analysis has the potential for…
