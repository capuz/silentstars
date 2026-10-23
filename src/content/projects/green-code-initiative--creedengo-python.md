---
repo: "green-code-initiative/creedengo-python"
name: "creedengo-python"
description: "Reduce the environmental footprint of your Python software programs"
readmeQualityOk: true
url: "https://github.com/green-code-initiative/creedengo-python"
homepage: "https://green-code-initiative.org/"
language: "Java"
languages: ["Java", "Python"]
languagePcts: [76, 24]
topics: ["ecodesign", "python", "sonarqube", "sonarqube-plugin"]
stars: 18
forks: 28
openIssues: 6
closedIssues: 16
watchers: 6
contributors: 14
recentReleases: 0
createdAt: "2023-08-05T15:14:11Z"
lastCommitAt: "2026-10-23T08:47:15Z"
lastReleaseAt: "2025-09-01T21:02:41Z"
status: "thriving"
tags: ["funded", "fork_magnet"]
healthScore: 85
undervaluedScore: 62
maintainers: ["dedece35", "dependabot[bot]", "fstormacq"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d26e641d463ef01052ff7670e0724254c3ffe4635add78036dd3a5a55500e31/green-code-initiative/creedengo-python"
fundingLinks: ["GITHUB:https://github.com/green-code-initiative"]
discussionCount: 0
---

# creedengo-python

_creedengo_ is a collective project aiming to reduce environmental footprint of software at the code level. The goal of
the project is to provide a list of static code analyzers to highlight code structures that may have a negative
ecological impact: energy and resources over-consumption, "fatware", shortening terminals' lifespan, etc.

_creedengo_ is based on evolving catalogs
of [good practices](https://github.com/green-code-initiative/creedengo-rules-specifications/tree/main/docs/rules), for various technologies.
This
SonarQube plugin then implements these catalogs as rules for scanning your Python projects.

> ⚠️ This is still a very early stage project. Any feedback or contribution will be highly appreciated. Please
> refer to the contribution section.

## 🌿 SonarQube Plugins

This plugin is part of the creedengo project.\
You can find a list of all our other plugins in
the [creedengo repository](https://github.com/search?q=topic%3Asonarqube-plugin+org%3Agreen-code-initiative&type=Repositories)

## 🚀 Getting Started

You can give a try with a one command docker :

```sh
docker run -ti --rm \
       -p 9000:9000 \
       --name sonarqube-creedengo-python…
