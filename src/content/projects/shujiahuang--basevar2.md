---
repo: "ShujiaHuang/BaseVar2"
name: "BaseVar2"
description: "This is the official development repository for BaseVar, which call variants for large-scale ultra low-depth(<1.0x) WGS data, especially for NIPT data and ancient DNA"
url: "https://github.com/ShujiaHuang/BaseVar2"
homepage: "https://www.cell.com/cell-genomics/fulltext/S2666-979X(24)00288-X"
language: "C++"
languages: ["C++"]
languagePcts: [83]
topics: ["basevar", "bioinformatics", "cfdna", "nipt", "variant-calling", "low-coverage-sequencing", "non-invasive-prenatal-test"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2024-07-30T00:42:38Z"
lastCommitAt: "2026-07-03T06:23:01Z"
lastReleaseAt: "2026-06-28T11:04:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 77
maintainers: ["ShujiaHuang"]
openGraphImageUrl: "https://opengraph.githubassets.com/439111e64c7b02487309566132e16b5e892c6b808a47ee1389d9ea3932d559f5/ShujiaHuang/BaseVar2"
---

<h4 align="center">
  </a>
  <br>A high-performance C++17 tool for variants calling from ultra low-depth WGS data<br>
</h4>
  
</p>

  <em>
    Download: <a href="https://github.com/ShujiaHuang/BaseVar2/releases/latest/download/basevar-linux-static">Lastest version of linux-static-binary</a>
  </em>
</p> 

**BaseVar** is a fast, memory-efficient variant caller for ultra-low-depth (<1×) sequencing data, designed for non-invasive prenatal testing (NIPT) and population-scale genomics. It simultaneously identifies genomic variants and estimates allele frequencies in cohorts of **tens to hundreds of thousands of samples**. And the first version publication in [*Cell Genomics*](https://doi.org/10.1016/j.xgen.2024.100669).

Implemented entirely in **C++17**, BaseVar is **over 100× faster** than the [original Python implementation](https://github.com/ShujiaHuang/basevar/tree/v0.6.1.1) and **5–10× faster** than BaseVar [v1](https://github.com/ShujiaHuang/basevar/releases), while using substantially less memory. With `-B 200` and a single thread, it typically requires only **3–4 GB** of RAM, compared with **more than 20 GB** for the original Python implementation.

---

## Installation

###…
