---
repo: "sccn/eegprep"
name: "eegprep"
description: "EEGPrep is an automated preprocessing tool for human EEG data built on a benchmarked EEGLAB pipeline"
readmeQualityOk: true
url: "https://github.com/sccn/eegprep"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["eeg", "meeg", "eeglab", "ica", "iclabel", "asr", "cleaner", "filtering", "preprocessing"]
stars: 37
forks: 7
openIssues: 28
closedIssues: 146
watchers: 5
contributors: 12
recentReleases: 2
createdAt: "2024-06-06T03:16:21Z"
lastCommitAt: "2026-10-16T08:27:13Z"
lastReleaseAt: "2026-09-23T18:39:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 60
maintainers: ["suraj-ranganath", "neuromechanist", "bruAristimunha"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ec3a7b90ce512337ca96b3edc32a731772270e87b23e50261f0c2af2a2d19f2/sccn/eegprep"
---

# EEGPrep

EEGPrep is an EEGLAB-compatible, Python-native toolkit for loading, cleaning,
visualizing, scripting, and validating EEG preprocessing workflows. It keeps the
EEGLAB concepts researchers already know, including `EEG`, `ALLEEG`,
`CURRENTSET`, `pop_*` functions, command history, ICA fields, channel locations,
events, epochs, STUDY workflows, and EEGBrowser-style review, while providing a
standalone Python package with GUI, interactive console, CLI, tests, and Sphinx
documentation.

EEGPrep is built for EEG researchers who want EEGLAB-style workflows, Python
reproducibility, and agent-friendly automation without requiring MATLAB or an
EEGLAB checkout at runtime.

**Documentation:** [sccn.github.io/eegprep](https://sccn.github.io/eegprep/) |
**Issue tracker:** [github.com/sccn/eegprep/issues](https://github.com/sccn/eegprep/issues)

## Why EEGPrep?

- **Familiar to EEGLAB users.** Function names, data structures, menus, history
  commands, and GUI workflows follow EEGLAB where that helps users move between
  tools.
- **Python-native and standalone.** Runtime code lives in the `eegprep` package
  and works without calling MATLAB or reading the vendored EEGLAB reference tree.…
