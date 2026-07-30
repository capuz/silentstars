---
repo: "5hadowblad3/Titan"
name: "Titan"
description: "Research artifact for Oakland (S&P) 2024, \"Titan: Efficient Multi-target Directed Greybox Fuzzing\""
readmeQualityOk: true
url: "https://github.com/5hadowblad3/Titan"
language: "Shell"
languages: ["Shell", "C++"]
languagePcts: [78, 22]
stars: 56
forks: 9
openIssues: 4
closedIssues: 4
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2023-07-24T09:23:34Z"
lastCommitAt: "2026-07-30T06:07:16Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 25
maintainers: ["5hadowblad3", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/55bf680786f21f158808151c82aa30261d801e2378ee388f18cc98c743a1a419/5hadowblad3/Titan"
---

# 1. Introduction
This directory provides the prototype of the paper: "Titan: Efficient Multi-target Directed Greybox Fuzzing"(S&P 2024). 

# 2. Run Titan on Magma
An easier way to run Titan on the fuzzing benchmark Magma is to move this repository into "magma/fuzzers" of [magma repository](https://github.com/HexHive/magma) and then follow the [guidance](https://hexhive.epfl.ch/magma/docs/getting-started.html) to start fuzzing. **The only adaptation you should make is to extract the target locations of those bugs for Titan to infer.** For some specific modifications to ensure correct deployment, please refer to the [build_targets](https://github.com/5hadowblad3/Titan/tree/main/build_targets) repo.

# 3. Run Titan on Other Programs
For fuzzing other programs not included in Magma, you could refer to the following scripts.
- `preinstall.sh`: Support environment.
- `instrument.sh`: Generate binary for fuzzing.
- `run.sh`: Start fuzzing.
## 3.1 Environment Prerequisite
### 3.1.1 Set Environment Variable
```export TITAN=<path_of_TITAN_repository>```
### 3.1.2 Install Dependent Tools
```
apt-get update --fix-missing && \
    apt-get install -y make build-essential git wget cmake gawk…
