---
repo: "niekwit/crispr-screens"
name: "crispr-screens"
description: "Snakemake workflow for CRISPR-Cas9 screen analysis"
readmeQualityOk: true
url: "https://github.com/niekwit/crispr-screens"
language: "Python"
languages: ["Python", "R"]
languagePcts: [72, 25]
topics: ["bioinformatics-pipeline", "crispr-screen-analysis", "snakemake-workflow"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-10-24T11:39:12Z"
lastCommitAt: "2026-09-22T08:47:18Z"
lastReleaseAt: "2025-05-09T10:04:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 73
maintainers: ["niekwit", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4eb3c1093ca9a7fc1b2902561efb98501080b683b9c5c1710a9a5d31c644ba0e/niekwit/crispr-screens"
---

# Snakemake workflow: `crispr-screens`

</p>

A Snakemake workflow for the analysis of CRISPR screens.

If you use this workflow in a paper, don't forget to give credits to the authors by citing the URL of this (original) repository and its DOI (see above).

Instructions of how to use `crispr-screens` can be found here:

https://crispr-screens.readthedocs.io/en/latest/

## Annotating sgRNAs with genomic coordinates

CRISPRcleanR, which is always run before BAGEL2 (and optionally before MAGeCK and DrugZ), needs the genomic coordinates of every sgRNA. Some libraries do not provide them. The standalone script `annotate_sgrna_coordinates.py` (not part of the Snakemake workflow) finds them by searching the sgRNA sequences in a genome FASTA file and writes a CRISPRcleanR library file.

It needs Python with `pandas` and `numpy` (both are in the `stats` conda environment of this workflow) and these input files:

- a CSV file with the sgRNAs (any layout, you tell the script which columns to use)
- a genome FASTA file (use the primary assembly, `.gz` is fine)
- a GTF file with the gene annotation of the same assembly (`.gz` is fine). It is required for the default `--scope locus` (with or…
