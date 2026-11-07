---
repo: "ASC8384/SogouPopularDict"
name: "SogouPopularDict"
description: "Sogou Network Popular Words Auto-Update Tool"
originalDescription: "搜狗网络流行新词自动更新工具"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ASC8384/SogouPopularDict"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["rime", "rime-dict"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-18T06:59:23Z"
lastCommitAt: "2026-11-07T09:30:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/341715868c8df534078e5e7e6a5aaa325f43f1412b008b0271be641960f51238/ASC8384/SogouPopularDict"
---

# Sogou Network Popular Words Auto-Update Tool

This project automatically downloads internet trending new words from the Sogou Pinyin input method dictionary and converts them into plain text format and YAML format usable by the Rime input method.

Note: This project was continuously iterated using vibe coding in April 2026.

## Features

- Automatically downloads the latest internet trending new words from the Sogou Pinyin input method dictionary
- Converts Sogou cell dictionary format (.scel) to plain text format (.txt)
- Generates two dictionary versions: the current version and the accumulated version (including historical entries)
- Preserves original SCEL pinyin mappings to avoid recalculating historical entries in the accumulated dictionary
- Converts dictionaries to YAML format usable by the Rime input method
- Daily automatic updates via GitHub Actions

## File Structure

```
.
├── .github/workflows/   # GitHub Actions workflow configuration
│   └── update_dict.yml  # Workflow for automatically updating the dictionary
├── data/                # Stores dictionary data
│   ├── sogou_network_words_current.txt        # Ground-truth word set for current version (plain text)
│…
