---
repo: "confusius-tools/confusius"
name: "confusius"
description: "Python package for analysis and visualization of functional ultrasound imaging data."
readmeQualityOk: true
url: "https://github.com/confusius-tools/confusius"
homepage: "https://confusius.tools"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["brain-connectivity", "fusi", "neuroimaging", "data-analysis", "data-visualization", "neuroscience", "python", "ultrasound"]
stars: 22
forks: 6
openIssues: 33
closedIssues: 170
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-02-11T12:23:33Z"
lastCommitAt: "2026-09-28T10:05:48Z"
lastReleaseAt: "2026-03-12T04:05:19Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 52
maintainers: ["sdiebolt", "github-actions[bot]", "FelipeCybis"]
openGraphImageUrl: "https://opengraph.githubassets.com/b96af98e7d2db6f533acd966427e5d660487934cf02c8ef5ff36e83c8e51f51c/confusius-tools/confusius"
discussionCount: 0
---

# ConfUSIus <img src="docs/images/confusius-logo.svg" width="200" title="ConfUSIus" alt="ConfUSIus" align="right">

> [!NOTE]
> **Beta Status** — ConfUSIus is now in beta and under active development. Core
> functionality is in place, but APIs may still evolve between releases as we improve
> stability and user experience. We are happy to help you get started: join our [weekly drop-in hours](https://confusius.tools/latest/user-guide/getting-started/#getting-help)
> on Discord or open an [issue on GitHub](https://github.com/confusius-tools/confusius/issues)
> for questions and feature requests.

ConfUSIus is a Python package and napari plugin for handling, visualization,
preprocessing, and statistical analysis of functional ultrasound imaging (fUSI) data.

## Features

> [!NOTE]
> ConfUSIus is not designed as an out-of-the-box, one-line fUSI analysis pipeline.
> Because the fUSI field has not yet converged on standard processing workflows,
> ConfUSIus instead aims to provide the fundamental building blocks needed to implement
> any processing workflow described in the fUSI literature, or to design entirely new
> ones. Researchers can combine these blocks to build analysis pipelines…
