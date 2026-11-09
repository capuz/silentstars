---
repo: "NanGarden31415926/PvZ2-Gardendless-GitHubLevels"
name: "PvZ2-Gardendless-GitHubLevels"
description: "Levels in this repository will be fetched by the Github Level Window in PvZ2: Gardendless!"
readmeQualityOk: true
url: "https://github.com/NanGarden31415926/PvZ2-Gardendless-GitHubLevels"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 12
forks: 17
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-10-11T08:56:20Z"
lastCommitAt: "2026-11-09T11:58:51Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 79
undervaluedScore: 56
maintainers: ["github-actions[bot]", "SansGrinder", "Hoshi-ato"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dcc9a29a692b200d573f443d415c3755eadd5b9a507a551de15c8866ca3da06/NanGarden31415926/PvZ2-Gardendless-GitHubLevels"
---

# PvZ2-Gardendless-GitHubLevels

[English](#english) | [中文](#中文)

---

## English

Levels in this repository are fetched by the **GitHub Level Window** in *PvZ2: Gardendless*.

### Repository Structure

**Level folders at the root must be named after their authors.** Repository maintenance files (`scripts/`, `tests/`, `.github/`, and `levels-index.json`) are separate from level submissions.

Each author must place their levels (files or subfolders) **inside a folder named after themselves**. Do **not** put level files directly in the root directory.
```
.
├── AuthorA/
│ ├── level1.json
│ └── level2.json
├── AuthorB/
│ ├── level1.json
│ └── SubFolder/
│ └── level3.json
└── ...
```
### Automatic level index

After a push to `main`, the **Generate levels index** GitHub Actions workflow generates and commits `levels-index.json` when its contents change. Maintainers can also run it manually from the Actions tab. Do not edit the generated index by hand.

The index contains `version: 1`, a `levels` list (`path`, byte `size`, and `sha256`), and an `invalid` list (`path` and `reason`). Only tracked JSON files are scanned; the index excludes itself. Invalid JSON/UTF-8, non-level files,…
