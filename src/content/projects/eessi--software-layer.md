---
repo: "EESSI/software-layer"
name: "software-layer"
description: "Software layer of the EESSI project"
readmeQualityOk: true
url: "https://github.com/EESSI/software-layer"
homepage: "https://eessi.github.io/docs/software_layer"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["biohackeu22"]
stars: 36
forks: 98
openIssues: 49
closedIssues: 185
watchers: 6
contributors: 59
recentReleases: 0
createdAt: "2020-05-07T15:09:25Z"
lastCommitAt: "2026-11-03T11:14:43Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 67
maintainers: ["bedroge", "ocaisa", "Neves-P"]
openGraphImageUrl: "https://opengraph.githubassets.com/97d3eb02b70079c41ece86c47e35c5af51339679416dee2faa0c50a6ba2e894b/EESSI/software-layer"
---

# Software layer

The software layer of the EESSI project uses [EasyBuild](https://docs.easybuild.io), [Lmod](https://lmod.readthedocs.io) and [archspec](https://archspec.readthedocs.io).

See also https://www.eessi.io/docs/software_layer .

## Recent changes

**Wed 11 June 2025**

- Code & scripts that are used to build the EESSI software layer have been relocated to a separate repository:
  [`EESSI/software-layer-scripts`](https://github.com/EESSI/software-layer-scripts).

- The minimal `bot/build.sh` script in this repository pulls in the latest `main` branch of the `EESSI/software-layer-scripts` repository,
  symlinks the files in there, and then calls out to the `bot/build.sh` script located in that separate repository.

- The default branch of this repository has been changed to `main` (was `2023.06-software.eessi.io`),
  and houses [easystack files](https://docs.easybuild.io/easystack-files) for all versions of EESSI (not just `2023.06`).

For more details, see https://gitlab.com/eessi/support/-/issues/139 .

## Setting up your environment

You can set up your environment by sourcing the init script:

```
$ source /cvmfs/software.eessi.io/versions/2023.06/init/bash
Found…
