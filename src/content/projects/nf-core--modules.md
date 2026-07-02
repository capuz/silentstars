---
repo: "nf-core/modules"
name: "modules"
description: "Repository to host tool-specific module files for the Nextflow DSL2 community!"
url: "https://github.com/nf-core/modules"
homepage: "https://nf-co.re/modules"
language: "Nextflow"
languages: ["Nextflow"]
languagePcts: [95]
topics: ["nf-core", "nextflow", "modules", "workflows", "pipelines", "dsl2", "nf-test"]
stars: 418
forks: 1073
openIssues: 333
closedIssues: 3000
watchers: 192
contributors: 780
recentReleases: 0
createdAt: "2019-07-26T08:51:31Z"
lastCommitAt: "2026-07-02T06:30:33Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 42
maintainers: ["LouisLeNezet", "SPPearce", "maxulysse"]
openGraphImageUrl: "https://opengraph.githubassets.com/a36133beb5f83f50670f6e6b256c8e8c417aed16fc2160d9e069a0fda3710c8e/nf-core/modules"
---

# 

A repository for hosting [Nextflow DSL2](https://www.nextflow.io/docs/latest/dsl2.html) module files containing tool-specific process definitions and their associated documentation.

## Table of contents

- [Using existing modules](#using-existing-modules)
- [Adding new modules](#adding-new-modules)
- [Help](#help)
- [Citation](#citation)

## Using existing modules

The module files hosted in this repository define a set of processes for software tools such as `fastqc`, `bwa`, `samtools` etc. This allows you to share and add common functionality across multiple pipelines in a modular fashion.

We have written a helper command in the `nf-core/tools` package that uses the GitHub API to obtain the relevant information for the module files present in the [`modules/`](modules/) directory of this repository. This includes using `git` commit hashes to track changes for reproducibility purposes, and to download and install all of the relevant module files.

1. Install the latest version of [`nf-core/tools`](https://github.com/nf-core/tools#installation) (`>=2.0`)
2. List the available modules:

```console
$ nf-core modules list remote

                                      ,--./,-.…
