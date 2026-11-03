---
repo: "nf-core/createpanelrefs"
name: "createpanelrefs"
description: "Generate Panel of Normals, models or other similar references from lots of samples"
readmeQualityOk: true
url: "https://github.com/nf-core/createpanelrefs"
homepage: "https://nf-co.re/createpanelrefs"
language: "Nextflow"
languages: ["Nextflow"]
languagePcts: [93]
topics: ["nextflow", "nf-core", "pipeline", "workflow"]
stars: 11
forks: 15
openIssues: 3
closedIssues: 15
watchers: 151
contributors: 180
recentReleases: 0
createdAt: "2023-07-06T12:47:04Z"
lastCommitAt: "2026-11-03T12:42:41Z"
lastReleaseAt: "2026-06-08T08:52:23Z"
status: "watched"
tags: ["hidden_gem", "community_watch", "fork_magnet"]
healthScore: 91
undervaluedScore: 52
maintainers: ["maxulysse", "nf-core-bot", "mashehu"]
openGraphImageUrl: "https://opengraph.githubassets.com/edf24560f7a66d66b61e4c23aba2db64d9fc596383443b76f570a8591e0c02e0/nf-core/createpanelrefs"
---

## Introduction

**nf-core/createpanelrefs** is a bioinformatics helper pipeline that will help in creating panel of normals and other models.

1. Read QC ([`FastQC`](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/))
2. Build Panel of Normals for [`CNVKIT`](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004873)
3. Build ploidy and cnv calling models for [`GATK's germlinecnvcaller workflow`](https://genome.cshlp.org/content/20/9/1297)
4. Build Panel of Normals for [`GENS`](https://github.com/Clinical-Genomics-Lund/gens)
5. Build Panel of Normals for [`Mutect2`](https://genome.cshlp.org/content/20/9/1297)
6. Present QC for raw reads ([`MultiQC`](http://multiqc.info/))

## Usage

> [!NOTE]
> If you are new to Nextflow and nf-core, please refer to [this page](https://nf-co.re/docs/get_started/environment_setup/overview) on how to set-up Nextflow. Make sure to [test your setup](https://nf-co.re/docs/get_started/run-your-first-pipeline) with `-profile test` before running the workflow on actual data.

First, prepare a samplesheet with your input data that looks as follows:

`samplesheet.csv`:

```csv
sample,bam,bai,cram,crai…
