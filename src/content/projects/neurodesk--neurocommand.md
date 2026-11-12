---
repo: "neurodesk/neurocommand"
name: "neurocommand"
description: "A flexible, scalable, and easy to use data analysis environment for reproducible neuroimaging"
readmeQualityOk: true
url: "https://github.com/neurodesk/neurocommand"
homepage: "https://neurodesk.org/getting-started/neurocommand/"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 46
forks: 34
openIssues: 1
closedIssues: 105
watchers: 7
contributors: 27
recentReleases: 0
createdAt: "2020-06-22T07:22:22Z"
lastCommitAt: "2026-11-12T05:37:16Z"
lastReleaseAt: "2025-03-07T11:59:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 100
undervaluedScore: 64
maintainers: ["vnm-neurodesk", "stebo85", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/896aad07be7d7d7100d0f9298c48c12eef37374c176423af158153f81d2b91d9/neurodesk/neurocommand"
fundingLinks: ["CUSTOM:https://donations.uq.edu.au/EAINNEUR"]
---

Neurocommand is a command line interface for advanced users.

_Information on the **Neurodesk** project is available at [neurodesk.org](https://neurodesk.org)_

_Information on **Neurocommand** is available at [neurodesk.org/docs/neurocommand](https://neurodesk.org/docs/neurocommand)_

## Find the container that provides a command

Search executable names with:

```bash
ml keyword bet
```

Neurocommand includes each container's exposed commands in its `whatis` metadata.
Lmod's [keyword search](https://lmod.readthedocs.io/en/latest/010_user.html)
returns matching modules, such as `fsl/6.0.7.18`, which you can load directly:

```bash
ml fsl/6.0.7.18
```

Use a module version returned by your search. Keyword searches also match module
help and other `whatis` descriptions, so results can include other matches.
`ml av bet` searches module names and does not search this command metadata.

Discovery metadata excludes hidden files and shared-library names ending in
`.so`, `.so.*`, `.dylib`, or `.dll`, even when the inventory marks them executable.
The CVMFS sync replaces previously generated command extensions with `whatis`
metadata in existing modulefiles without rebuilding container…
