---
repo: "jenkinsci/coverage-model"
name: "coverage-model"
description: "Java API to parse and collect code coverage results"
readmeQualityOk: true
url: "https://github.com/jenkinsci/coverage-model"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["cobertura", "coverage", "coverage-report", "jacoco", "junit", "opencover", "pit", "pitest", "vectorcast"]
stars: 11
forks: 42
openIssues: 7
closedIssues: 15
watchers: 1
contributors: 736
recentReleases: 0
createdAt: "2023-03-16T09:09:11Z"
lastCommitAt: "2026-10-29T14:05:59Z"
lastReleaseAt: "2023-10-11T12:23:26Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 81
maintainers: ["uhafner", "actions-user", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5c07733bda04e0e9d70d042b627bec96440da77e6d0ecec6924b066ee29bffa/jenkinsci/coverage-model"
fundingLinks: ["CUSTOM:https://crowdfunding.linuxfoundation.org/initiatives/jenkins", "CUSTOM:https://www.jenkins.io/donate/#why-donate"]
---

# Code coverage model

This library Provides a Java API to parse and collect code coverage results.
It is used by my [Jenkins' coverage plug-in](https://github.com/jenkinsci/coverage-plugin) to visualize
the coverage of individual builds.

Additionally, this library is used by my additional [Quality Monitor GitHub Action](https://github.com/uhafner/quality-monitor), that monitors the quality of projects based on a configurable set of metrics and gives feedback on pull requests (or single commits) in GitHub.
There are also two additional actions available to autograde student software projects based
on these metrics: [GitHub Autograding action](https://github.com/uhafner/autograding-github-action) and [GitLab Autograding action](https://github.com/uhafner/autograding-gitlab-action).

This library consists basically of two separate parts.
The first part is the model to manage several metrics in a hierarchical software project.
Metrics can be attached to modules, packages, files, classes, or methods.
The values can be aggregated or merged so that it is possible to zoom into every detail level.
For each node of the tree, the value of a metric can be computed using one of the following…
