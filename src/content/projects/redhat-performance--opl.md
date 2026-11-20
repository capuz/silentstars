---
repo: "redhat-performance/opl"
name: "opl"
description: "MBU Products perf&scale library"
readmeQualityOk: true
url: "https://github.com/redhat-performance/opl"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 5
forks: 18
openIssues: 0
closedIssues: 13
watchers: 8
contributors: 46
recentReleases: 0
createdAt: "2021-09-16T11:15:50Z"
lastCommitAt: "2026-11-20T12:15:11Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 84
maintainers: ["jhutar", "NewtonChutney", "pablomh"]
openGraphImageUrl: "https://opengraph.githubassets.com/a69fc396b62abec9b16385393e88235e064f7796ce13037618984b13f453e625/redhat-performance/opl"
---

# MBU products perf&scale library

## OPL library

Contains various helpers for not only RHCloud performance testing.

## Repository Structure

This repository uses a split-directory workspace layout to cleanly separate lightweight core tools from those requiring heavy dependencies (like `kafka-python`, `psycopg2-binary`, `locust`). Python's implicit namespace packages (PEP 420) are used so that imports like `import opl.some_module` work seamlessly across both directories.

- `core/opl/` - Contains the lightweight, minimal-dependency core tools.
- `extras/opl/` - Contains tools and generators that require heavier dependencies.

## Generic command-line tools

There is couple of tools used mostly to integrate with CPT and comp.:
