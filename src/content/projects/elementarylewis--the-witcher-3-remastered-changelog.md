---
repo: "ElementaryLewis/The-Witcher-3-Remastered-Changelog"
name: "The-Witcher-3-Remastered-Changelog"
description: "Changelog of The Witcher 3: Wild Hunt - Remastered."
readmeQualityOk: true
url: "https://github.com/ElementaryLewis/The-Witcher-3-Remastered-Changelog"
language: "Witcher Script"
languages: ["Witcher Script"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-09-24T11:25:38Z"
lastCommitAt: "2026-11-26T15:25:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 34
maintainers: ["ElementaryLewis"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0133b61b720efc7a4ff42d2465107fa4e3abc78dd16746143908904dce34d89/ElementaryLewis/The-Witcher-3-Remastered-Changelog"
---

# The Witcher 3 Remastered Changelog
Changelog of The Witcher 3: Wild Hunt - Remastered.

# Description
GitHub repository to survey every The Witcher 3 game update from Next-Gen 4.04 to Remastered 5.00 and forward.
This is meant as a resource for modders, helping them to know which files were changed and what the changes are, so they can update their mods for the Remastered version if needed.

**All files are encoded in UFT-8! They were previously UFT-16 LE BOM in Next-Gen version.**

For the purpose of creating a comparison commit, most but not all "false positive" changes were removed.

For instance:

*Next-Gen*
```
/** 	THE WITCHER® is a trademark of CD PROJEKT S. A.
<?xml version="1.0" encoding="UTF-16"?>
```
*Remastered*
```
/** 	THE WITCHER© is a trademark of CD PROJEKT S. A.
<?xml version="1.0" encoding="UTF-8"?>
```
