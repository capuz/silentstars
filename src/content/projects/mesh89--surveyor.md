---
repo: "Mesh89/SurVeyor"
name: "SurVeyor"
description: "An SV caller from paired-end NGS data."
url: "https://github.com/Mesh89/SurVeyor"
language: "C++"
languages: ["C++", "C"]
languagePcts: [67, 25]
stars: 13
forks: 3
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-03T16:52:05Z"
lastCommitAt: "2026-06-28T03:11:46Z"
lastReleaseAt: "2025-10-05T23:56:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 70
maintainers: ["Mesh89"]
openGraphImageUrl: "https://opengraph.githubassets.com/07f329f07c20ef0cb13532bf1b380b980fa641cbd0666af5551788fe6f6872f4/Mesh89/SurVeyor"
---

# SurVeyor
Structural variant discovery and genotyping pipeline from paired-end NGS data. SurVeyor can detect and genotype deletions, tandem duplications, insertions and inversions that are 50 base pairs or longer using WGS paired-end sequencing data. Furthermore, when multiple samples from a cohort are available, it is able to leverage the shared information to increase sample-level recall.

## Installation

**Please download the source code from the latest release, since an appropriate trained model is provided.**
**We discourage cloning the repository, as it may not be compatible with the latest trained model.**

In order to compile the code, the following are required:
- A C and a C++ compiler are required. If the GCC suite is used, version 4.9.3 or above is required.
- CMake (3.5 or above)

Downloaded the latest release from https://github.com/Mesh89/SurVeyor/releases , uncompress it and enter the directory.
The following commands should be sufficient

```
./build_htslib.sh
cmake -DCMAKE_BUILD_TYPE=Release . && make
```

If you are compiling on the same platform as where you will execute it, you can use -DNATIVE=ON to create faster executables
```
cmake…
