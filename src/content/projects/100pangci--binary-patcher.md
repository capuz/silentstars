---
repo: "100pangci/Binary-Patcher"
name: "Binary-Patcher"
description: "Binary Patcher"
originalDescription: "二进制补丁器"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/100pangci/Binary-Patcher"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-06-09T05:44:37Z"
lastCommitAt: "2026-07-22T06:10:28Z"
lastReleaseAt: "2026-07-22T06:14:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 36
maintainers: ["100pangci"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9a0b10a9c42440b967a078de6f94b7ff67cb237dcfb17960ca74993cd4faa7b/100pangci/Binary-Patcher"
---

# Binary Patcher

This is a project for generating and applying binary patches, supporting a complete directory patch workflow. The project now uniformly handles patch generation and application through HDiffPatch (`hdiffz` / `hpatchz`).

Supports:

- Generating complete directory patches
- Applying complete directory patches
- One-click rollback of already applied patches

The project is fundamentally based on **HDiffPatch** (`hdiffz` / `hpatchz`).

## Directory Structure

```
.
├─ .github/workflows/
│   ├─ ci.yml          # On each push/PR: ruff lint + pytest (3.10/3.11/3.12)
│   └─ build.yml       # tag v*: lint → test → Nuitka build → Release
├─ scripts/
│   ├─ build.py        # Nuitka packaging + HDiffPatch automatic download
│   └─ build.bat       # Windows one-click build entry
├─ src/
│   ├─ binary_patcher.py     # Core command line tool (patch generation)
│   ├─ apply_patch.py        # Automatic patch application script
│   ├─ rollback_patch.py     # Automatic patch rollback script
│   ├─ hdiffpatch_utils.py   # HDiffPatch utility search and call encapsulation
│   └─ legacy/               # Old implementation (bsdiff4)
├─ tests/
│   ├─ test_binary_patcher.py  # 45 unit…
