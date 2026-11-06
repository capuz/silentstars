---
repo: "zhuxiao/asvbm"
name: "asvbm"
description: "A tool for multi-Allele-aware Structural Variant statistics Benchmarking for Multiple callsets"
readmeQualityOk: true
url: "https://github.com/zhuxiao/asvbm"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2019-02-19T13:20:28Z"
lastCommitAt: "2026-11-06T13:20:42Z"
lastReleaseAt: "2025-05-28T07:52:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 36
maintainers: ["zhuxiao"]
openGraphImageUrl: "https://opengraph.githubassets.com/d669b6e257016ab3272dd54d33365c456b6c7aa056872e7e64d9b735fa5bd654/zhuxiao/asvbm"
---

# ASVBM
A tool for multi-Allele-aware Structural Variant statistics Benchmarking for Multiple callsets

-------------------
ASVBM is A tool for multi-Allele-aware Structural Variant (SV) statistics Benchmarking for Multiple callsets. ASVBM uses user-provided callsets and a benchmark data set as input. It first computes the basics metrics, such as the number of true positives (TPs), false positives (FPs), false negatives (FNs), latent positives (LPs), sequence similarity, recall, precision, and F1 score. Notably, ASVBM introduces the concept of LP and employs a local joint analysis validation approach to address cases where multiple smaller variants are nearly or entirely equivalent to a larger variant. It then computes the variant region size difference between the user-called variants and the corresponding ones in the benchmark data set by computing the distance between their breakpoint distance, and it also calculates the variant size ratio for the two variant regions. Finally, it computes the statistics for variants with various region sizes. A notable feature of ASVBM is its capability to benchmark multiple identification results and generate information-rich chart…
