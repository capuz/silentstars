---
repo: "MannLabs/alphadia"
name: "alphadia"
description: "modular & open DIA search"
readmeQualityOk: true
url: "https://github.com/MannLabs/alphadia"
homepage: "https://alphadia.readthedocs.io"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [50, 42]
topics: ["bioinformatics", "mass-spectrometry", "open-source", "peptide-identification", "proteomics"]
stars: 119
forks: 15
openIssues: 21
closedIssues: 85
watchers: 8
contributors: 19
recentReleases: 0
createdAt: "2021-09-15T13:31:07Z"
lastCommitAt: "2026-10-29T14:06:27Z"
lastReleaseAt: "2024-01-10T15:31:32Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 95
undervaluedScore: 46
maintainers: ["Desperadus", "mschwoer", "GeorgWa"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f46edc714a5fa775c694a065536d42847a2ea85d52e04039bc5b222be93fcda/MannLabs/alphadia"
discussionCount: 27
---

·
    ·
    ·
    ·

## Features
- Empirical library and fully predicted library search
- End-to-end transfer learning for custom RT, mobility, and MS2 models
- Label free quantification with multiple normalization methods ([directLFQ](https://github.com/MannLabs/directlfq), [QuantSelect](https://github.com/MannLabs/QuantSelect))
- DIA multiplexing

We support the following vendor and processing modes:

| Platform              | Empirical lib | Predicted lib |
| :---------------- | :------: | :----: |
| Thermo .raw |   ✅   | ✅ |
| Sciex .wiff |   ✅   | ✅ |
| Bruker .d |  ✅   | ⚠️ |
> ⚠️ **Predicted libraries with Bruker .d data**<br>Alltough search is possible, alphaDIA's feature-free search takes a long time with fully predicted libraries. We are still evaluating how to better support fully predicted libraries.

alphaDIA is part of the [alphapept ecosystem](https://alphapept.org):
- [alphaBase](https://github.com/MannLabs/alphabase)
- [alphaRaw](https://github.com/MannLabs/alpharaw)
- [alphaTims](https://github.com/MannLabs/alphatims)
- [alphaPept](https://github.com/MannLabs/alphapept)
- [alphaPeptDeep](https://github.com/MannLabs/alphapeptdeep)
-…
