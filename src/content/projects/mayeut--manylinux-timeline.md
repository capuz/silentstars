---
repo: "mayeut/manylinux-timeline"
name: "manylinux-timeline"
description: "Tracking manylinux progress on packager side"
readmeQualityOk: true
url: "https://github.com/mayeut/manylinux-timeline"
homepage: "https://mayeut.github.io/manylinux-timeline/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [73, 26]
topics: ["manylinux", "wheel"]
stars: 27
forks: 2
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-12-27T02:55:25Z"
lastCommitAt: "2026-10-09T18:56:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 63
maintainers: ["mayeut", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/787b62b0b20720d0c97bbd89416dfcdf9835220444984e2df8600d191eaf5573/mayeut/manylinux-timeline"
---

# manylinux-timeline

## Policy for dropping python versions

- Python versions will be kept at least 2 years after EOL
- Python versions will be dropped 4 years after EOL at the latest
- Between those two dates, versions will be dropped if their overall download proportion at the beginning of the graph is less than 3%

This can be summed-up as:

|             | 2027-06  | 2027-10 | 2028-10 | 2029-10 | 2030-10 | 2031-10 |
|-------------|----------|---------|---------|---------|---------|---------|
| Python 3.7  | ❌        |         |         |         |         |         |
| Python 3.8  | 🧟       | 🧟      | ❌       |         |         |         |
| Python 3.9  | 💀       | 🧟      | 🧟      | ❌       |         |         |
| Python 3.10 | 💀       | 💀      | 🧟      | 🧟      | ❌       |         |
| Python 3.11 | ✅        | 💀      | 💀      | 🧟      | 🧟      | ❌       |
| Python 3.12 | ✅        | ✅       | 💀      | 💀      | 🧟      | 🧟      |
| Python 3.13 | ✅        | ✅       | ✅       | 💀      | 💀      | 🧟      |
| Python 3.14 | ✅        | ✅       | ✅       | ✅       | 💀      | 💀      |
| Python 3.15 | ✅        | ✅       | ✅       | ✅       | ✅       | 💀      |
|…
