---
repo: "jenkinsci/analysis-model"
name: "analysis-model"
description: "A library to read static analysis reports into a Java object model"
readmeQualityOk: true
url: "https://github.com/jenkinsci/analysis-model"
homepage: "https://plugins.jenkins.io/analysis-model-api"
language: "Java"
languages: ["Java"]
languagePcts: [94]
topics: ["java", "static-analysis", "static-code-analysis", "checkstyle", "spotbugs", "pmd", "eslint", "hacktoberfest"]
stars: 92
forks: 195
openIssues: 3
closedIssues: 141
watchers: 96
contributors: 874
recentReleases: 0
createdAt: "2014-09-29T18:48:31Z"
lastCommitAt: "2026-10-29T14:05:59Z"
lastReleaseAt: "2020-01-07T10:47:18Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 98
undervaluedScore: 52
maintainers: ["uhafner", "actions-user", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f227e6bc886870304490f4b23dc76d75abffeab29d95277b84d80d0e89489d21/jenkinsci/analysis-model"
fundingLinks: ["CUSTOM:https://crowdfunding.linuxfoundation.org/initiatives/jenkins", "CUSTOM:https://www.jenkins.io/donate/#why-donate"]
---

# Static Analysis Model and Parsers Library

This library provides a Java API to read, aggregate, filter, and query static analysis reports.
It is used by my [Jenkins' warnings plug-in](https://github.com/jenkinsci/warnings-ng-plugin) to visualize
the warnings of individual builds.

Additionally, this library is used by my additional [Quality Monitor GitHub Action](https://github.com/uhafner/quality-monitor), that monitors the quality of projects based on a configurable set of metrics and gives feedback on pull requests (or single commits) in GitHub.
There are also two additional actions available, to autograde student software projects based
on these metrics: [GitHub Autograding action](https://github.com/uhafner/autograding-github-action) and [GitLab Autograding action](https://github.com/uhafner/autograding-gitlab-action).

This library consists basically of three separate parts:

1. A model to manage a set of issues of static code analysis runs. This includes the possibility to track issues in
   different source code versions using a fingerprinting algorithm.
2. Parsers for more than a hundred [report…
