---
repo: "all-of-us/long-reads-public-codebase"
name: "long-reads-public-codebase"
description: "This Repo will be for the sharing of code for the long reads analysis initiative."
url: "https://github.com/all-of-us/long-reads-public-codebase"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2023-05-09T16:36:24Z"
lastCommitAt: "2026-06-28T08:36:54Z"
lastReleaseAt: "2024-02-14T17:41:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 31
maintainers: ["Lqh09"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddac17508a0be6006da64f0b56ebb74f0f7cc8e559044fa20d815e7846d25fd4/all-of-us/long-reads-public-codebase"
---

# All of Us Long Read Phase 1 Workflows

This repository contains all of the reproducible WDL workflows used in **Phase 1** of the *All of Us* Long Read (AoU-LR) project. These workflows cover various steps of long-read genomic analysis and are provided for transparency and reuse.  

Please note: this code's organization is in flux.

---

### Dockstore Workflows (Organized by Functionality)

#### 1. Read and Assembly Processing
| Workflow | Location | Description |
|----------|----------|-------------|
| HiFiBamToFastQ | [Dockstore](https://dockstore.org/workflows/github.com/broadinstitute/long-read-pipelines/HiFiBamToFastQ:sh_wg_extract_fastq) | Converts PacBio HiFi BAM files to FASTQ format for downstream analysis. |
| MergeFastqs | [Dockstore](https://dockstore.org/workflows/github.com/broadinstitute/long-read-pipelines/MergeFastqs:sh_hificnv) | Merges multiple FASTQ files into a single set per sample. |
| PBAssembleWithHifiasm | [Dockstore](https://dockstore.org/workflows/github.com/broadinstitute/long-read-pipelines/PBAssembleWithHifiasm:sh_update_hifiasm) | Assembles PacBio HiFi reads using Hifiasm. |
| MapAssemblyContigs |…
