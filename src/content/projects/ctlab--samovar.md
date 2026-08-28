---
repo: "ctlab/samovar"
name: "samovar"
description: "Benchmark & ensemble metagenome taxonomic profiling"
readmeQualityOk: true
url: "https://github.com/ctlab/samovar"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["metagenomics"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2024-01-11T13:02:31Z"
lastCommitAt: "2026-08-28T14:36:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 75
maintainers: ["dsmutin", "Konstantaza"]
openGraphImageUrl: "https://opengraph.githubassets.com/09c5fbc32d5a384804c23484ac28af3a535ea33a5eae0b07caff400cd460b739/ctlab/samovar"
---

# SAMOVAR <img src="data/img/logos/logo_stable.png" align="right" width="150" alt="SAMOVAR logo">
### Metagenomic ensemble taxonomic annotation, cross-validation, and ML re-profiling

In metagenomics, we often do not know which tool to use (or, which is much worse - know because they are SOTA). SAMOVAR team try to solve this problem with the automated benchmark based on the real inputed data to include in the model selection process information about the real community properties

Metagenomic classifiers disagree. SAMOVAR treats **multiple annotators as an ensemble**: it runs them on the same reads, cross-validates calls, regenerates in-silico communities from those calls, and trains a supervised **re-profiler** (SAMOVAR) that combines the tools.

What does the tool do? It gets the metagenome input & taxonomy profiling tools and SAMOVAR that (regenerate artficial metagenomes, evaluate & combine the tools).

We strongly recommend to understand SAMOVAR main concepts before the installation & usage, because the workflow is large & depends on a lot of other different tools

## Installation

Python 3.10+; **conda is recommended**.

```bash
git clone https://github.com/ctlab/samovar
cd…
