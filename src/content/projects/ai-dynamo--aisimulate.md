---
repo: "ai-dynamo/aisimulate"
name: "aisimulate"
description: "AISimulate predicts LLM serving behavior and searches for strong deployment configurations offline, without bringing up a GPU serving cluster"
readmeQualityOk: true
url: "https://github.com/ai-dynamo/aisimulate"
homepage: "https://ai-dynamo.org/aisimulate/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [68, 29]
stars: 106
forks: 47
openIssues: 28
closedIssues: 8
watchers: 1
contributors: 43
recentReleases: 3
createdAt: "2026-08-11T00:17:42Z"
lastCommitAt: "2026-10-26T18:06:43Z"
lastReleaseAt: "2026-10-21T23:51:49Z"
status: "thriving"
tags: []
healthScore: 81
undervaluedScore: 35
maintainers: ["simone-chen", "jthomson04", "Harrilee"]
openGraphImageUrl: "https://opengraph.githubassets.com/d951ab9af159361d3261d69be210618f5a705f16b7386734ff16d2c3e4f407e2/ai-dynamo/aisimulate"
---

# AISimulate

AISimulate predicts LLM serving behavior and searches for strong deployment
configurations offline, without bringing up a GPU serving cluster.

[Documentation](https://github.com/ai-dynamo/aisimulate/blob/HEAD/docs/README.md) ·
[Website](https://ai-dynamo.org/aisimulate/) ·
[E2E Accuracy Overview](https://ai-dynamo.org/aisimulate/e2e-accuracy/) ·
[FPM Accuracy Overview](https://ai-dynamo.org/aisimulate/fpm-accuracy/) ·
[FPM Dataset](https://huggingface.co/datasets/nvidia/aisimulate-fpm-dataset) ·
[FPE Support Matrix](https://ai-dynamo.org/aisimulate/fpe-support-matrix/) ·
[Legacy AIC Support Matrix](https://ai-dynamo.org/aisimulate/support-matrix/)

AISimulate is the successor to the
[AIConfigurator (AIC)](https://github.com/ai-dynamo/aiconfigurator)
repository. It brings the complete AIC application and estimator into one
standalone home with Dynamo-independent Replay and Sweeper capabilities.
See the [migration guide](https://github.com/ai-dynamo/aisimulate/blob/HEAD/docs/aic-backward-compatibility/migration.md) for command and API mappings.

The performance-modeling methodology is described in
[AIConfigurator: Lightning-Fast Configuration Optimization for…
