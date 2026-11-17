---
repo: "genepi/umi-pipeline-nf"
name: "umi-pipeline-nf"
description: "Nextflow pipeline to analyze ONT-UMI-Sequencing data"
readmeQualityOk: true
url: "https://github.com/genepi/umi-pipeline-nf"
language: "Python"
languages: ["Python", "Nextflow"]
languagePcts: [52, 44]
stars: 17
forks: 9
openIssues: 0
closedIssues: 23
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2022-05-20T10:10:44Z"
lastCommitAt: "2026-11-17T12:19:47Z"
lastReleaseAt: "2025-10-14T16:22:57Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 75
undervaluedScore: 45
maintainers: ["NCMBianchi", "AmstlerStephan"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccfff56b5e84e69dc869a5863932d46c083d11f1260a6c89983bbad46c27bfc3/genepi/umi-pipeline-nf"
---

Umi-pipeline-nf
======================

**Umi-pipeline-nf** creates highly accurate single-molecule consensus sequences for unique molecular identifier (UMI)-tagged amplicons from nanopore sequencing data.
The pipeline processes FastQ files (typically from the `fastq_pass` folder of your nanopore run) and outputs high-quality aligned consensus sequences in BAM format for each UMI cluster. The optional variant calling creates a vcf file for all variants that are found in the consensus sequences.
The newest version of the pipeline supports live analysis of the clusters during sequencing and seamless polishing of the clusters as soon as enough clusters are found.

Umi-pipeline-nf is conceptually based on the Snakemake-based UMI analysis pipeline by ONT ([pipeline-umi-amplicon](https://github.com/nanoporetech/pipeline-umi-amplicon), which relies on the workflow developed by [Karst et al, Nat Biotechnol 18:165–169, 2021](https://www.nature.com/articles/s41592-020-01041-y)). We newly implemented umi-pipeline-nf in [Nextflow](https://www.nextflow.io) and performed a complete redesign and comprehensive functional extension. Umi-pipeline-nf is a fundamentally restructured, extensively…
