---
repo: "yahuiwei123/MacaSurfer"
name: "MacaSurfer"
description: "A comprehensive pipeline for fast and accurate cortical surface reconstruction with macaque-specific parcellation"
url: "https://github.com/yahuiwei123/MacaSurfer"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-20T09:32:22Z"
lastCommitAt: "2026-07-04T06:13:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 43
maintainers: ["yahuiwei123"]
openGraphImageUrl: "https://opengraph.githubassets.com/61da401e42755d3f6d3813dfce54d8af020935aa27f20ec45288bea13470757b/yahuiwei123/MacaSurfer"
---

# MacaSurfer v3.0

A ground-up MRI processing pipeline purpose-built for macaque monkeys, covering structural and functional (BOLD) preprocessing, cortical surface reconstruction, MSM registration, and normative modeling.

---

## Pipeline Overview

MacaSurfer processes structural and functional MRI data from BIDS format through six Nextflow workflows:

| # | Workflow | Description |
|---|----------|-------------|
| 1 | **info** | Parse BIDS structure, initialize session directories |
| 2 | **prepare** | Skull stripping, brainmask fixing, alignment, averaging |
| 3 | **enhance** | Conforming, template registration, tissue segmentation, bias correction |
| 4 | **surface** | Tessellation, white/pial surface reconstruction, spherical registration |
| 5 | **resample** | Resampling to atlas space, annotation, normative statistics |
| 6 | **bold_wf** | BOLD preprocessing, confound regression, normalization, surface projection |

## Project Workflow

The complete development process behind MacaSurfer — from multi-center data collection, pipeline assembly, manual label curation, to deep learning model training.

## Model Validation

### Generalization across centers and ages

MacaSurfer's…
