---
repo: "WilliamW1979/FFXIV"
name: "FFXIV"
description: "Copy of all Repos"
readmeQualityOk: true
url: "https://github.com/WilliamW1979/FFXIV"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 16
closedIssues: 3
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-04-13T19:44:58Z"
lastCommitAt: "2026-10-29T05:50:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 67
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/965734635/3ce23380-2c7d-4b30-9584-2b9df0f02d90"
discussionCount: 1
---

# Dalamud Plugin Repository Merger

Merges many Dalamud custom plugin repositories into a single `repository.json`, so users only have to add one URL to the game. The merge runs automatically every 5 minutes on GitHub Actions, and anyone can submit a new repository by opening an issue.

## Using the merged repository

Add this URL as a custom plugin repository in Dalamud:

```
https://raw.githubusercontent.com/WilliamW1979/FFXIV/main/repository.json
```
[https://raw.githubusercontent.com/WilliamW1979/FFXIV/main/repository.json](https://raw.githubusercontent.com/WilliamW1979/FFXIV/main/repository.json)

## Submitting a repository

1. Open a new issue and choose **Submit a plugin repository**.
2. Paste the direct URL to your repo JSON file.
3. Wait a minute or two. A bot replies on the issue and closes it.

If the repository passes every check it is added immediately and shows up in the next merged `repository.json`. If it fails, the reply explains why. Fix the problem and open a new submission.

If on the rare chance that a working plugin is not being read here, please submit an issue so that I can look into it. Generally this script only reads the original JSON and creates a new…
