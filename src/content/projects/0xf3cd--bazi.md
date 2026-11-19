---
repo: "0xf3cd/bazi"
name: "bazi"
description: "Bazi Python library: Four Pillars chart, Five Elements, Ten Gods, relationships, luck cycles, Shensha, and sourced explanatory knowledge"
originalDescription: "八字排盘 Python 库：四柱、流运、关系、神煞与有出处的解释知识"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/0xf3cd/bazi"
homepage: "https://0xf3cd.github.io/bazi/versions/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bazi", "four-pillars", "python"]
stars: 5
forks: 1
openIssues: 16
closedIssues: 167
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2024-02-26T08:02:35Z"
lastCommitAt: "2026-11-19T05:03:31Z"
lastReleaseAt: "2026-11-13T20:16:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 93
maintainers: ["0xf3cd", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/23357303d6e705d357daac6b1801618bc8a563852b965ff6798345463bd92a40/0xf3cd/bazi"
---

# Bazi

A Python 3.11+ Bazi chart library for Chinese-speaking users, providing Four Pillars, Five Elements, Ten Gods, Nayin, relationships, and luck-cycle (流运) queries.
It can also be used without creating a chart, directly consulting knowledge entries that come with sources and stated limits of applicability. At runtime it uses only the standard library and bundled data, and makes no network connections.

## Installation

Install into an existing Python, conda, or virtual environment:

```sh
python -m pip install bazi
```

To create a new environment, choose a version on the [documentation site](https://0xf3cd.github.io/bazi/) and read "Quick Start". Ordinary use does not require testing or documentation build tools.

## Create the First Chart

The example below uses fictional birth information, entered in the Gregorian calendar on UTC+8 (East Eight Zone) clock time; the default entry point does not convert time zones automatically.
You can run it directly in the Python interactive environment, or save it as a UTF-8 script and run it; do not name the script `bazi.py`, so it does not shadow the installed package.
