---
repo: "MeteoSwiss/evalml"
name: "evalml"
description: "Evaluation pipelines for Anemoi models."
readmeQualityOk: true
url: "https://github.com/MeteoSwiss/evalml"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["anemoi", "varda"]
stars: 11
forks: 0
openIssues: 5
closedIssues: 7
watchers: 0
contributors: 18
recentReleases: 0
createdAt: "2025-06-05T19:19:12Z"
lastCommitAt: "2026-09-18T08:25:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 66
maintainers: ["jonasbhend", "dnerini", "frazane"]
openGraphImageUrl: "https://opengraph.githubassets.com/e46bc3af558bb79e2e8ca0c3ed655376b370f88876478d964dd15dc35232735d/MeteoSwiss/evalml"
---

# EvalML

Run evaluation pipelines for data-driven weather models built with [Anemoi](https://anemoi.readthedocs.io/).

## Getting started

1. [Installation](#installation)
2. [Credentials setup](#credentials-setup)
3. [Workspace setup](#workspace-setup)

## Features:
- [Experiments](#experiment): compare model performance via standard and diagnostic verification
- [Showcasing](#showcase): produce visual material for specific events
- [Sandboxing](#sandbox): generate an isolated inference development environments for any model

## Quick example

To run an experiment, prepare a demo config file like the one below and adapt it to your setup:

```yaml
# yaml-language-server: $schema=../workflow/tools/config.schema.json
description: |
  Demo experiment: compare two forecaster checkpoints against the same baseline and truth data.

# Optional: used in the output directory name. If omitted, the config file name is used.
config_label: co2-forecasters-demo

# Choose one date style:
# 1. A regular range with a run frequency (shown here)
# 2. An explicit list of ISO timestamps for case studies or showcases
dates:
  start: 2020-01-01T00:00
  end: 2020-01-10T00:00
  frequency: 60h
  #…
