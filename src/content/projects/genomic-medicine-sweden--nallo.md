---
repo: "genomic-medicine-sweden/nallo"
name: "nallo"
description: "An analysis pipeline for long-reads from both PacBio and Oxford Nanopore Technologies (ONT), written in Nextflow."
readmeQualityOk: true
url: "https://github.com/genomic-medicine-sweden/nallo"
homepage: "https://genomic-medicine-sweden.github.io/nallo/"
language: "Nextflow"
languages: ["Nextflow"]
languagePcts: [100]
topics: ["long-read-sequencing", "nanopore", "pacbio", "variant-calling", "gms"]
stars: 68
forks: 24
openIssues: 82
closedIssues: 484
watchers: 5
contributors: 26
recentReleases: 0
createdAt: "2023-03-04T10:50:38Z"
lastCommitAt: "2026-07-10T07:01:29Z"
lastReleaseAt: "2025-03-27T11:02:11Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 54
maintainers: ["fellen31", "sofiademmou", "alkc"]
openGraphImageUrl: "https://opengraph.githubassets.com/cee45d2505a64cefd01b7bfc85c932e1090cfc7810c6f65c31e1321877355d82/genomic-medicine-sweden/nallo"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/images/nallo_dark.png">
  </picture>
</p>

## Introduction

**genomic-medicine-sweden/nallo** is a bioinformatics analysis pipeline for long-reads from both PacBio and (targeted) ONT-data, focused on rare-disease. Heavily influenced by best-practice pipelines such as [nf-core/sarek](https://nf-co.re/sarek), [nf-core/raredisease](https://nf-co.re/raredisease), [nf-core/nanoseq](https://github.com/nf-core/nanoseq), [PacBio Human WGS Workflow](https://github.com/PacificBiosciences/pb-human-wgs-workflow-snakemake), [epi2me-labs/wf-human-variation](https://github.com/epi2me-labs/wf-human-variation) and [brentp/rare-disease-wf](https://github.com/brentp/rare-disease-wf).

<picture align="center">
</picture>

##### QC

- Read QC with [FastQC](http://www.bioinformatics.babraham.ac.uk/projects/fastqc/), [cramino](https://github.com/wdecoster/cramino), [mosdepth](https://github.com/brentp/mosdepth) and [peddy](https://github.com/brentp/peddy)

##### Alignment & assembly

- Assemble genomes with [hifiasm](https://github.com/chhylp123/hifiasm)
- Align reads and assemblies to reference with…
