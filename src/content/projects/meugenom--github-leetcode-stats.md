---
repo: "meugenom/github-leetcode-stats"
name: "github-leetcode-stats"
description: "[NO-AI] - GitHub and LeetCode Stats Generator for README.md"
url: "https://github.com/meugenom/github-leetcode-stats"
homepage: "https://github.com/meugenom/github-leetcode-stats"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
topics: ["generated", "readme", "github-stats", "no-ai", "portfolio"]
stars: 10
forks: 3
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-01-17T14:18:16Z"
lastCommitAt: "2026-06-27T00:35:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 74
maintainers: ["meugenom"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/590036649/e268a501-c31a-44d9-9476-0697acb934f1"
---

### GitHub and LeetCode Stats Generator

This repository contains a tool that generates dynamically updated statistics 
for your GitHub profile and LeetCode account.

last automatic update: Saturday, 27 June at 02:35 CEST

-----------------------

## About this project
The idea of this project was to write a script that could display statistics about projects on GitHub and statistics from Leetcode. The challenge was to present this information in the form of a graph in the README.md file. In reality, README.md supports embedding HTML code, but it can be quite cumbersome when trying to create a graph and insert it into the documentation file. Therefore, an alternative approach was chosen where the script would periodically retrieve the latest statistics using API requests and generate an SVG file, which can be displayed nicely in the README.md file.

-----------------------

### Features:

- Generates a chart showing your GitHub contributions
- Generates a chart showing your GitHub language usage
- Generates a chart showing your LeetCode statistics
- Runs automatically every 6 hours through a GitHub Action
- Supports generated color

### Code Structuring:

- Entry point in the file…
