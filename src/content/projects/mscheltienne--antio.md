---
repo: "mscheltienne/antio"
name: "antio"
description: "Python package to handle I/O with the CNT format from ANT Neuro."
readmeQualityOk: true
url: "https://github.com/mscheltienne/antio"
language: "C"
languages: ["C"]
languagePcts: [89]
stars: 5
forks: 5
openIssues: 1
closedIssues: 8
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2024-08-09T12:42:06Z"
lastCommitAt: "2026-10-26T21:00:02Z"
lastReleaseAt: "2026-07-22T22:18:46Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 72
maintainers: ["pre-commit-ci[bot]", "dependabot[bot]", "larsoner"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfc9e5a43a9508f4154f094f78af529cce03ca97fc827d3c87da39de2a0ddf5f/mscheltienne/antio"
---

# ANT I/O

Python package to handle I/O with the CNT format from ANT Neuro.
This software uses the [LIBEEP Library](http://libeep.sourceforge.net).

The version `0.1.0` has a function `antio.io.read_raw_ant` which can load a CNT file
with most MNE-Python version. However, for advance parsing and features such as file
preloading, `antio` version `0.3.0+` and MNE-Python version `1.9+` are required.
MNE-Python `1.9+` includes support for CNT files in `mne.io.read_raw` and
`mne.io.read_raw_ant`.
