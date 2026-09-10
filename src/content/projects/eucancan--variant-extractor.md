---
repo: "EUCANCan/variant-extractor"
name: "variant-extractor"
description: "Deterministic and standard extractor of SNVs, indels and structural variants (SVs) from VCF files."
readmeQualityOk: true
url: "https://github.com/EUCANCan/variant-extractor"
homepage: "https://eucancan.github.io/variant-extractor/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["variant-analysis", "variant-calling", "vcf"]
stars: 7
forks: 2
openIssues: 1
closedIssues: 4
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2022-04-01T08:21:02Z"
lastCommitAt: "2026-09-10T08:19:25Z"
lastReleaseAt: "2025-03-26T13:48:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 44
maintainers: ["lgmgeo", "Rapsssito"]
openGraphImageUrl: "https://opengraph.githubassets.com/48850b77ffdf65e736479d70cf75db48296fd1abeb41b32c679a4f2c59cb5cff/EUCANCan/variant-extractor"
---

# VariantExtractor

R. Martín et al., “ONCOLINER: A new solution for monitoring, improving, and harmonizing somatic variant calling across genomic oncology centers,” _Cell Genomics_, vol. 4, no. 9. Elsevier BV, p. 100639, Sep. 2024. [doi: 10.1016/j.xgen.2024.100639](https://doi.org/10.1016/j.xgen.2024.100639)

**Deterministic and standard extractor of indels, SNVs and structural variants (SVs)** from VCF files built under the frame of [EUCANCan](https://eucancan.com/)'s second work package. VariantExtractor is a Python package (**requires Python version 3.6 or higher**) and provides a set of data structures and functions to extract variants from VCF files in a **deterministic and standard** way while [adding information](#variantrecord) to facilitate afterwards processing. It homogenizes [multiallelic variants](#multiallelic-variants), [MNPs](#snvs) and [SVs](#structural-variants) (including [imprecise paired breakends](#imprecise-paired-breakends) and [single breakends](#single-breakends)). The package is designed to be used in a pipeline, where the variants are ingested from VCF files and then used in downstream analysis. Check the [available…
