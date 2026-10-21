---
repo: "nf-core/nanostring"
name: "nanostring"
description: "An analysis pipeline for Nanostring nCounter expression data."
readmeQualityOk: true
url: "https://github.com/nf-core/nanostring"
homepage: "https://nf-co.re/nanostring"
language: "Nextflow"
languages: ["Nextflow"]
languagePcts: [68]
topics: ["nf-core", "nextflow", "workflow", "pipeline", "nanostring", "nanostringnorm"]
stars: 18
forks: 14
openIssues: 2
closedIssues: 52
watchers: 152
contributors: 179
recentReleases: 0
createdAt: "2022-01-10T14:24:34Z"
lastCommitAt: "2026-10-07T10:20:26Z"
lastReleaseAt: "2026-01-30T15:24:34Z"
status: "watched"
tags: ["hidden_gem", "community_watch", "fork_magnet"]
healthScore: 68
undervaluedScore: 33
maintainers: ["mashehu", "nf-core-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/858b8422dc55d6b84ee31d54f486bc8059ea9340d2f0358897ab4fce01a4db40/nf-core/nanostring"
---

## Introduction

**nf-core/nanostring** is a bioinformatics pipeline that can be used to analyze NanoString data. The performed analysis steps include quality control and data normalization.

The pipeline is built using [Nextflow](https://www.nextflow.io), a workflow tool to run tasks across multiple compute infrastructures in a very portable manner. It uses Docker/Singularity containers making installation trivial and results highly reproducible. The [Nextflow DSL2](https://www.nextflow.io/docs/latest/dsl2.html) implementation of this pipeline uses one container per process which makes it much easier to maintain and update software dependencies. Where possible, these processes have been submitted to and installed from [nf-core/modules](https://github.com/nf-core/modules) in order to make them available to all nf-core pipelines, and to everyone within the Nextflow community!

## Pipeline summary

1. Quality control with NACHO ([`NACHO`](https://github.com/mcanouil/NACHO/))
2. Perform normalization with NACHO
3. Create count tables with provided metadata
4. Present QC for NanoString data ([`MultiQC`](http://multiqc.info/))

## Pipeline tubemap

## Usage

> [!NOTE]
> If you are new…
