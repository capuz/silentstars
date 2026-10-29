---
repo: "uhafner/autograding-gitlab-action"
name: "autograding-gitlab-action"
description: "GitLab Action to autograde projects based on a configurable set of metrics"
readmeQualityOk: true
url: "https://github.com/uhafner/autograding-gitlab-action"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["checkstyle", "code-coverage", "coverage", "mutation-coverage", "mutation-testing", "pmd", "spotbugs", "static-analysis", "testing", "tests"]
stars: 11
forks: 2
openIssues: 1
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-12-11T11:39:13Z"
lastCommitAt: "2026-10-29T14:07:09Z"
lastReleaseAt: "2024-03-30T21:25:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 72
maintainers: ["uhafner", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcb4e6545c0cb5a87e9bec98541470c28a610c6314959a6f4c750f20c920f814/uhafner/autograding-gitlab-action"
---

# Autograding GitLab Action

Automated scoring (autograding) and optional quality monitoring for GitLab merge requests and branch pipelines.
The action aggregates test results, code and mutation coverage, static analysis findings, and software metrics, then posts a structured merge request note (plus inline line comments for warnings, missed or mutated lines when enabled).
It can run in two modes: scoring mode (compute a numeric score from configurable impacts and maxScore values) or monitoring mode (omit maxScore to get a qualitative dashboard without a grade).
I use the scoring mode of this action to automatically grade student projects in my lectures at the Munich University of Applied Sciences.

It is inspired by the Jenkins [Warnings](https://plugins.jenkins.io/warnings-ng/) and [Coverage](https://plugins.jenkins.io/coverage) plugins and complemented by the GitHub variant (see: [Quality Monitor](https://github.com/uhafner/quality-monitor) and [Autograding GitHub Action](https://github.com/uhafner/autograding-github-action)).
It works with any tech stack that can produce supported report files (JUnit or other xUnit style test reports, JaCoCo Cobertura OpenCover PIT coverage or…
