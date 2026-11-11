---
repo: "YangLabHKUST/XMR"
name: "XMR"
description: "XMR: A cross-population Mendelian randomization method for causal inference using genome-wide summary statistics"
readmeQualityOk: true
url: "https://github.com/YangLabHKUST/XMR"
language: "HTML"
languages: ["HTML"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-04T07:21:41Z"
lastCommitAt: "2026-11-11T11:22:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 16
maintainers: ["yudan121"]
openGraphImageUrl: "https://opengraph.githubassets.com/77285429e9193a1a848a0724e4da85d54bc4bb4d21a440c4d860ebf933c953d1/YangLabHKUST/XMR"
---

# XMR

**XMR** (Cross-Population Mendelian Randomization) is a probabilistic method for estimating causal effects between an exposure and an outcome using genome-wide summary statistics from multiple populations.

XMR improves the power and robustness of causal inference in underrepresented (small-sample) populations by leveraging information from a large-sample auxiliary population. 
Specifically, XMR decomposes the observed SNP–trait effects into true causal effects and confounding factors (e.g., pleiotropy, population structure) hidden in summary statistics. 
By explicitly modelling the genetic correlation between two populations, XMR effectively borrows strength from the large-sample group. 
XMR further corrects bias introduced by IV selection and LD clumping to reduce false positive rates.

**Overview of the XMR method.** XMR estimates the causal effect $`\beta`$ of exposure $`X_2`$ on outcome $`Y_2`$ in a smaller target population by leveraging GWAS data on the same exposure, $`X_1`$, from a larger auxiliary population. Panels A–C are schematic illustrations; panel D shows fitted results from simulated data.
**(A)** XMR selects candidate IVs using the auxiliary-population…
