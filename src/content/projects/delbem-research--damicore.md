---
repo: "delbem-research/damicore"
name: "damicore"
description: "DAMICORE (Data-Mining of Code Repositories)"
readmeQualityOk: true
url: "https://github.com/delbem-research/damicore"
homepage: "https://delbem-research.github.io/damicore/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 6
forks: 0
openIssues: 30
closedIssues: 16
watchers: 0
contributors: 7
recentReleases: 2
createdAt: "2026-07-15T12:16:10Z"
lastCommitAt: "2026-11-19T11:57:14Z"
lastReleaseAt: "2026-11-13T04:35:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 53
maintainers: ["enniolopes", "dependabot[bot]", "ericktokuda"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1301580932/e91f8b88-fafa-47f9-891b-9a2bdd074df5"
---

# DAMICORE

DAMICORE clusters local files, or the rows or columns of a local dataset,
through canonical serialization, exact Normalized Compression Distance (NCD),
deterministic Neighbor Joining, and FastGreedy community detection. What each
of those four stages computes, where the definition comes from, and what this
implementation does not take from its source, is stated stage by stage under
[the method](https://delbem-research.github.io/damicore/method/index.html).

Objects come from one of two sources. A **dataset** is split by column or by
row: delimited text (`.csv`, `.tsv`, `.txt`, any single-character delimiter) or
an `.xlsx`/`.xlsm` worksheet. A **files** source takes files or a directory of
files that already are the objects, text or binary, with nothing to split.

```bash
pip install damicore
```
