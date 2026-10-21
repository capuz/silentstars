---
repo: "smishra677/DAFT"
name: "DAFT"
description: "Discordant attachment frequency tool "
readmeQualityOk: true
url: "https://github.com/smishra677/DAFT"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["coalescence", "introgression", "introgression-tests", "multispecies-coalescent", "phylogenetic-networks", "phylogenetics", "phylogenomics"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 10
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-12-15T20:25:56Z"
lastCommitAt: "2026-10-21T17:31:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 43
maintainers: ["smishra677", "hahnlab-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/641ebab1f7bc4e17c755630f7657741f552c3b2e7ffa4b1439e6d42217dc71e6/smishra677/DAFT"
discussionCount: 0
---

# DAFT  Version 1.0  User Guide

DAFT, the **Discordant Attachment Frequency Tool**, is a Python package for detecting and characterizing introgression from a rooted species tree and a collection of gene trees.

This guide shows how to install DAFT, prepare input files, run the main analyses, and interpret the output.

---

## What DAFT Does

DAFT has two main components:

1. **DAFT Test**
   - Implemented in `DAFT_Test.py`
   - Counts discordant attachments between branches of a species tree across gene trees
   - Tests whether a lineage pair appears together more often than expected
   - Reports test counts, comparison counts, and Z-scores for both the sister and avuncular tests

2. **DAFT Direction**
   - Implemented in `DAFT_Direction.py`
   - Also referred to as `djiNNI`
   - Uses NNI-based reconciliation to infer the likely direction of introgression
   - Reports donor and recipient lineages
   - Produces an inferred introgression network

A typical DAFT workflow is:

```text
species tree + gene trees
        |
        v
DAFT_Test.py
        |
        v
significant lineage pairs
        |
        v
DAFT_Direction.py
        |
        v
donor/recipient inference +…
