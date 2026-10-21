---
repo: "Ekin-Kahraman/rustscenic"
name: "rustscenic"
description: "Fast, memory-efficient tools for studying gene regulation in single-cell data, built with Rust and Python."
readmeQualityOk: true
url: "https://github.com/Ekin-Kahraman/rustscenic"
homepage: "https://ekin-kahraman.github.io/rustscenic/"
language: "Python"
languages: ["Python"]
languagePcts: [65]
topics: ["aucell", "bioinformatics", "gene-regulatory-network", "pyo3", "pyscenic", "rust", "scatac-seq", "scenic", "scrna-seq", "single-cell"]
stars: 13
forks: 2
openIssues: 3
closedIssues: 6
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-04-19T14:47:24Z"
lastCommitAt: "2026-10-21T17:32:08Z"
lastReleaseAt: "2026-05-04T03:07:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 26
maintainers: ["Ekin-Kahraman", "lmVl12"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1215149288/1458618f-8667-4d7d-9791-5ff77f805719"
discussionCount: 0
---

Infer candidate regulatory relationships and score their activity from RNA and
  chromatin-accessibility data.<br>
  Built in Rust, available through Python, and runs on CPUs.<br>
  Created by <strong>Ekin Kahraman</strong>, developed and scaled with the

- **1.3 million real cells:** RNA gene regulatory network (GRN) inference in
  **46m42s on 16 CPU cores**,
  using 2,095 selected genes and 256 transcription factors.
- **2.04–3.33× faster than arboreto** in matched 20,000-cell comparisons;
  **81% lower physical memory** in the measured Intel-node comparison.
- **704 annotated human cell types:** exploratory networks from CELLxGENE Census.
  **Full release pending;** the endothelial-cell example is available below.

## Analyse your own data

Current release: `v0.5.0`. Python **3.10–3.13**; Linux, macOS and Windows.
Runs on CPUs; no GPU required.

```bash
pip install rustscenic
```

RustScenic supports RNA regulatory-network inference, motif enrichment,
regulon activity scoring and multiome analysis through a Python API and CLI.
Core analysis runs without Java, Dask, CUDA or Snakemake.

Infer a candidate network from a human RNA AnnData file (`rna.h5ad`) with
gene symbols…
