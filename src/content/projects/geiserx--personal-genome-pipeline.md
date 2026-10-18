---
repo: "GeiserX/Personal-Genome-Pipeline"
name: "Personal-Genome-Pipeline"
description: "Whole genome sequencing analysis pipeline for consumer hardware. 100% local, Docker-powered, free and open source."
readmeQualityOk: true
url: "https://github.com/GeiserX/Personal-Genome-Pipeline"
homepage: "https://geiserx.github.io/Personal-Genome-Pipeline/"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [57, 29]
topics: ["bioinformatics", "deepvariant", "docker", "genomics", "grch38", "personal-genomics", "pharmacogenomics", "structural-variants", "variant-calling", "wgs"]
stars: 19
forks: 2
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2026-03-30T10:08:43Z"
lastCommitAt: "2026-10-18T08:15:59Z"
lastReleaseAt: "2026-10-01T23:51:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 54
maintainers: ["GeiserX", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1196042440/28db0ce8-40ad-4e73-8f85-4ea6369522d4"
fundingLinks: ["GITHUB:https://github.com/GeiserX", "PATREON:https://patreon.com/geiser", "BUY_ME_A_COFFEE:https://buymeacoffee.com/geiser", "THANKS_DEV:https://thanks.dev/u/gh/geiserx"]
---

No cloud accounts, no subscriptions, no bioinformatics degree required.

This pipeline takes raw sequencing data (FASTQ/BAM/VCF) from any vendor and runs the [analysis steps of a default run](https://geiserx.github.io/Personal-Genome-Pipeline/pipeline-overview/#what-a-default-run-covers) to produce a full genomic profile: variant calling, pharmacogenomics, structural variants, cancer predisposition screening, polygenic risk scores, ancestry estimation, telomere length, mitochondrial analysis, and more. Everything runs locally in Docker containers, each with a hard memory limit.

**Time:** about 21 h per sample from FASTQ on a 16-thread server, measured; plan for more than a day on 8 CPUs ([runtime](https://geiserx.github.io/Personal-Genome-Pipeline/hardware-requirements/#runtime-per-step)) | **Disk:** 500 GB per sample from a BAM, about 700 GB from FASTQ | **Cost:** Free (you just need your data)

## Features

- Takes FASTQ, BAM, VCF or Illumina ORA from any vendor (Nebula, Dante Labs, Sequencing.com, Novogene, DRAGEN), plus long reads from Nanopore and PacBio HiFi.
- Calls SNPs and indels with DeepVariant, and structural and copy number variants with Manta, Delly and CNVpytor…
