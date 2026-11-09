---
repo: "LidkeLab/smite"
name: "smite"
description: "Single Molecule Imaging Toolbox Extraordinaire"
readmeQualityOk: true
url: "https://github.com/LidkeLab/smite"
language: "MATLAB"
languages: ["MATLAB"]
languagePcts: [89]
stars: 18
forks: 5
openIssues: 6
closedIssues: 32
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2020-07-10T18:15:20Z"
lastCommitAt: "2026-11-09T00:54:23Z"
lastReleaseAt: "2025-10-14T19:05:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 37
maintainers: ["kalidke"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8ac0aa1c066e5e86d1024b70f8a1cd7d726ae3aa76411d83d3108fae6fde4ec/LidkeLab/smite"
---

# ***smite***: Single Molecule Imaging Toolbox Extraordinaire

This work was supported by the following [grants](https://github.com/LidkeLab/smite/blob/HEAD/doc/grants.md).

This MATLAB-based toolbox provides analysis tools for fluorescence
single molecule imaging with an emphasis on single molecule
localization microscopy (SMLM) and single particle tracking (SPT).

---

## Overview

### Workflow concept
***smite*** is designed around the concept that a parameter structure,
the Single Molecule Fitting (SMF) structure, uniquely and completely
defines the data analysis.  The results are completely contained
in a Single Molecule Data (SMD) structure.  ***smite*** is designed
to make lowest-level tools just as easy to use as the higher-level
application-specific classes.  All tools make use of the SMF and
SMD structures.

### Code organization
***smite*** is organized into a set of namespaces that group similar
tools and concepts.  The namespace  `+smi`  contains the highest
level tools that will be the most common entry point for processing
SMLM and SPT data sets.  The file [SMITEclasses.md](https://github.com/LidkeLab/smite/blob/HEAD/doc/SMITEclasses.md)
provides a short 1-line…
