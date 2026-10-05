---
repo: "styles01/sparkrun-recipes"
name: "sparkrun-recipes"
description: "Custom inference recipes for NVIDIA DGX Spark — Qwen 122B DFlash hybrid"
readmeQualityOk: true
url: "https://github.com/styles01/sparkrun-recipes"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [61, 38]
stars: 82
forks: 7
openIssues: 4
closedIssues: 1
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2026-07-24T23:16:52Z"
lastCommitAt: "2026-10-05T10:47:14Z"
status: "thriving"
tags: ["funded"]
healthScore: 73
undervaluedScore: 25
maintainers: ["styles01"]
openGraphImageUrl: "https://opengraph.githubassets.com/75b6aec647cbfb35b8b5a4ffb1393e773c3adc949679646d8ee9f3fa10a2fca7/styles01/sparkrun-recipes"
fundingLinks: ["CUSTOM:https://buymeacoffee.com/aitamedia"]
---

# SparkRun Recipes

**Source-pinned inference recipes for the NVIDIA DGX Spark.**

Production lanes, native Spark Arena recipes, benchmark evidence, and runbooks for getting serious long-context models onto one GB10 without pretending a social-media tok/s screenshot is a deployment.

[Best by model](#current-best-recipes-by-model) · [Flavors](#the-flavors) · [Start Here](#start-here) · [Arena](#native-spark-arena-benchmarking) · [Recipe Catalog](#recipe-catalog) · [Benchmarks](#benchmark-interpretation) · [Contributing](#contributing)

> [!IMPORTANT]
> A DGX Spark has one unified 121 GB memory pool. These recipes are **exclusive lanes**: run one serious model or video workload at a time. Every production claim here belongs to a specific model revision, runtime, quantization, context, and workload. Read the linked runbook before switching anything.

---

## Current best recipes by model

The one recipe to run per model on this box today, per the paired runbook. "Best" is only
claimed where runbook + recipe history supports it; everything else is listed neutrally as
available. Alternates and staged lanes stay under [The flavors](#the-flavors) and the
[recipe…
