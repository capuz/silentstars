---
repo: "Floating-Ocean/OBot-ACM"
name: "OBot-ACM"
description: "Source code of the qqbot OBot's ACM a.k.a. O宝的AC梦."
originalDescription: "Source code of the qqbot OBot's ACM a.k.a. O宝的AC梦."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Floating-Ocean/OBot-ACM"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["bot", "competitive-programming", "entertainment", "qqbot", "tools", "atcoder", "codeforces", "emoticon", "nowcoder"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-11-04T17:13:03Z"
lastCommitAt: "2026-10-19T09:14:39Z"
lastReleaseAt: "2025-06-21T16:05:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 68
maintainers: ["Floating-Ocean", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ade86cfdbd68bae00428ecef57de99aec92b5ee1b4d0848539683a2b2fdcc1d/Floating-Ocean/OBot-ACM"
---

## Before You Start

Before running the bot, copy **[`config_example.json`](https://github.com/Floating-Ocean/OBot-ACM/blob/HEAD/config_example.json)** to **`config.json`**, and fill in the relevant fields according to the hints in the file.

> [!CAUTION]
> 
> The project depends on submodules, which are referenced in the project as `git submodule`. Please add the `--recursive` flag when cloning.

### Deployment

Before deploying, make sure the system has the [`uv`](https://docs.astral.sh/uv/) environment installed.

```bash
git clone https://github.com/Floating-Ocean/OBot-ACM.git --recursive
cd OBot-ACM
uv sync --frozen
```

### Running

The project implements a simple daemon process, which can be used as needed.

```bash
python main.py     # with daemon
python entry.py    # run directly
```

### Other Branch

This repository contains the main project and one branch. The main project is an **official QQ bot** that can run independently after configuration, while the branch is a **Nonebot bot**.

The main project plans to abandon `botpy` and switch to continued maintenance on the `Nonebot` side. For now, it is waiting for the `Nonebot` side branch development to be completed.…
