---
repo: "seandavi/nextflow_telemetry"
name: "nextflow_telemetry"
description: "Python web api for nextflow web callbacks"
readmeQualityOk: true
url: "https://github.com/seandavi/nextflow_telemetry"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [68, 29]
topics: ["r01ca230551"]
stars: 5
forks: 3
openIssues: 57
closedIssues: 80
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-11-05T21:40:41Z"
lastCommitAt: "2026-10-10T10:04:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 72
maintainers: ["seandavi", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a75423f88af4b6307e034549c25db8a1e23ba91934934c17f19b7d475e9b7d28/seandavi/nextflow_telemetry"
---

# Nextflow Telemetry

A dispatch and telemetry server for the curatedMetagenomics Nextflow pipeline. It ingests
real-time execution events from Nextflow, tracks sample-level processing outcomes, and
presents the results through a live React dashboard.

> **Adding samples?** See **[Adding studies](https://github.com/seandavi/nextflow_telemetry/blob/HEAD/docs/adding-studies.md)** — how submitters
> request an SRA study/BioProject by accession, and how maintainers review the preview,
> approve, and dispatch.

---

## Dashboard

The dashboard is the primary interface for the cMGD team to monitor pipeline progress and
diagnose problems. It auto-refreshes every 30 seconds (configurable).

### Overview

The landing page gives a pipeline health summary for the last 30 days:

- **KPI cards** — total task runs, success rate, failure count, retry rate, and retry
  recovery rate across all Nextflow processes
- **In Flight** — live counts of tasks currently executing or queued in SLURM, broken down
  by process name. Updates each poll cycle so you can watch a batch progress in real time.
- **Top Failing Processes** — processes ranked by absolute failure count, with bar-chart
  failure rates.…
