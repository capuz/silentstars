---
repo: "ZephyRoy/Rovaca"
name: "Rovaca"
description: "A fast, robust and accurate variant calling software for human germline DNA analysis"
url: "https://github.com/ZephyRoy/Rovaca"
language: "C++"
languages: ["C++", "C"]
languagePcts: [70, 29]
stars: 14
forks: 1
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2025-02-11T02:28:52Z"
lastCommitAt: "2026-06-30T06:51:33Z"
lastReleaseAt: "2026-04-09T07:15:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 63
undervaluedScore: 37
maintainers: ["ZephyRoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/2928bae762c4fdab32228e9937f708a99327236348c5dd93396bebd1a407d8ab/ZephyRoy/Rovaca"
---

# Rovaca

## Introduction

Rovaca is a tool for detecting SNPs (Single Nucleotide Polymorphisms) and INDELs (Insertions/Deletions) from DNA sequencing data in a single sample. It is a probabilistic model-based variant detection algorithm designed to accurately identify variants in samples.

The working principles of Rovaca are as follows:

1. **Identifying active regions**: The program determines which regions of the genome (active regions) to process based on the presence of evidence for variants.
2. **Determining haplotypes through assembly of active regions**: Rovaca uses a local de-novo assembly method to split sequencing data into smaller fragments (haplotypes). These fragments are DNA segments caused by potential variants. The program then uses the Smith-Waterman algorithm to realign each haplotype with the reference haplotype to identify potential variant sites.
3. **Pairwise alignment using PairHMM**: For each active region, the program performs pairwise alignment for each read of each haplotype using the PairHMM algorithm. This produces a likelihood matrix of haplotypes given the read data. These likelihoods are then marginalized to obtain the likelihood of each allele at…
