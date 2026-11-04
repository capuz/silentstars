---
repo: "avengineers/spl-core"
name: "spl-core"
description: "Software Product Line (SPL) support for CMake"
readmeQualityOk: true
url: "https://github.com/avengineers/spl-core"
homepage: "https://spl-core.readthedocs.io/"
language: "Python"
languages: ["Python", "CMake"]
languagePcts: [70, 24]
topics: ["cmake", "googlemock", "googletest", "python", "spl", "sple"]
stars: 7
forks: 6
openIssues: 7
closedIssues: 53
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2022-02-25T11:08:07Z"
lastCommitAt: "2026-11-04T11:27:20Z"
lastReleaseAt: "2024-01-09T12:52:45Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 91
maintainers: ["dependabot[bot]", "TheRedSwabian", "xxthunder"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/463502019/42084146-281f-40d0-89ab-883b285b7f82"
---

# SPL (Software Product Line) Core

_SPL Core_ is our CMake module to support multiple projects as variants of one SPL repository.

## Installation of Dependencies

```powershell
.\build.ps1 -install
```

## Building

-   Execution of all tests
-   Building documentation

```powershell
.\build.ps1
```

## Initialize a new SPL Project

To initialize a new SPL project, one can use the `init` command of the `please.ps1` script.

```powershell
.\please.ps1 init --project-dir C:\tmp\MyProject
```

See more information [here](https://spl-core.readthedocs.io/en/latest/getting_started/generate_example_project.html).
