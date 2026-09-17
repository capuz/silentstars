---
repo: "undur/wonder-slim"
name: "wonder-slim"
description: "🤸‍♀️ ERExtensions, Ajax and JavaWOExtensions. The basics."
readmeQualityOk: true
url: "https://github.com/undur/wonder-slim"
homepage: "https://www.whoacommunity.com/project/wonder-slim"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [62, 26]
stars: 11
forks: 1
openIssues: 15
closedIssues: 14
watchers: 6
contributors: 61
recentReleases: 3
createdAt: "2020-10-13T23:56:14Z"
lastCommitAt: "2026-09-17T08:51:29Z"
lastReleaseAt: "2026-09-15T11:40:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 71
maintainers: ["hugithordarson"]
openGraphImageUrl: "https://opengraph.githubassets.com/40a21fdc60aabfc22c19fc4a44e7ca2e9862c68ac5fa2f86dfe98ca232fd4731/undur/wonder-slim"
---

# wonder-slim

A slimmed down version of Project Wonder, containing only the required basics to create and run a modern WO application on a modern JDK.

## Installation

*To use this project your machine must be set up for WO development using maven. If you haven't done that, see the "Let's set it up" part [here]( https://gist.github.com/hugithordarson/d2ba6da9e4942f4ece95d7a721159cd1). And no fear, this project has different maven artifact coordinates from the original Project Wonder and thus will not interfere with any other Project Wonder projects or installations*

1. Clone the repository
2. Run `mvn clean install` in the cloned repository's root

If you only plan on using this from within Eclipse, you don't need to perform an installation, just import slim's projects into your Eclipse workspace (using `Import existing projects into workspace`).

## Usage

First, [here's a sample project](https://github.com/undur/wonder-slim-sample) that demonstrates the most basic `pom.xml` that includes all three frameworks; `ERExtensions`, `Ajax` and `ERLoggingReload4j`.
 
To use in an existing project:

 * In your `pom.xml`, change the version for `ERExtensions` (and `Ajax`, if present) to…
