---
repo: "nf-core/strict-syntax-health"
name: "strict-syntax-health"
description: "Track Nextflow strict syntax linting health across nf-core pipelines"
url: "https://github.com/nf-core/strict-syntax-health"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 4
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 160
recentReleases: 0
createdAt: "2026-01-12T16:22:34Z"
lastCommitAt: "2026-06-27T00:46:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["github-actions[bot]", "ewels"]
openGraphImageUrl: "https://opengraph.githubassets.com/da1054151bc42bb19414e0014b698552dba0af18b81f3ee7e5775cc3a7f54317/nf-core/strict-syntax-health"
---

# nf-core Strict Syntax Health Report

This repository tracks the health of nf-core pipelines, modules, and subworkflows with respect to Nextflow's _strict syntax_ linting.

The [Nextflow docs](https://www.nextflow.io/docs/latest/strict-syntax.html) describes the differences from standard Nextflow syntax and includes many examples to help with migration and fixing errors.
Strict syntax is backwards compatible with existing Nextflow code, but enforces stricter rules to catch common errors and improve code quality.

The goal is for all nf-core pipelines to run without errors using strict syntax.

> [!IMPORTANT]
> See the [nf-core blog post](https://nf-co.re/blog/2025/nextflow_syntax_nf-core_roadmap) for details on the migration timeline.
> **Fixing all errors from `nextflow lint` will be a requirement by early spring 2026.**

- **Last updated:** 2026-06-27 00:46:03 UTC
- **Nextflow version:** 26.05.0-edge

## Pipelines

- **Total:** 0 parse errors, 1514 errors, 7488 warnings across 139 pipelines
- **Zero errors:** 84 pipelines (60.4%)

|                    Errors                    |                     Warnings                     |
| :------------------------------------------: |…
