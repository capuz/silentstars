---
repo: "cncf/automation"
name: "automation"
description: "Tools to manage CNCF maintenance tasks"
readmeQualityOk: true
url: "https://github.com/cncf/automation"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [63, 20]
stars: 33
forks: 41
openIssues: 6
closedIssues: 74
watchers: 10
contributors: 26
recentReleases: 0
createdAt: "2023-04-14T23:40:19Z"
lastCommitAt: "2026-10-23T12:05:54Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 66
maintainers: ["github-actions[bot]", "koksay", "ahmadqasembader"]
openGraphImageUrl: "https://opengraph.githubassets.com/6026607382140538106774653fc2f801b24e1aa261f3b8030e664071983369a3/cncf/automation"
---

# CNCF Automation

This repository contains automation tools and scripts used by the Cloud Native Computing Foundation (CNCF) and its projects. These tools help streamline various tasks and workflows, making it easier to manage and maintain CNCF projects.

## Overview

The CNCF Automation repository provides various tools that help automate repetitive tasks, standardize workflows, and improve efficiency across CNCF projects. These tools are designed to be reusable and configurable for different project needs.

## Tools and Components

### Self-Hosted Runners

Tools and scripts for managing self-hosted GitHub Actions runners on CNCF's infrastructure (e.g., Oracle Cloud Infrastructure). These runners allow CNCF projects to execute their CI/CD workflows in a controlled environment.

For more information, see the [CI documentation](https://github.com/cncf/automation/blob/HEAD/ci/README.md).

### Project Status Audit

Cross-checks CNCF project lifecycle data from **LFX PCC** against Landscape, CLOMonitor, maintainers CSV, DevStats, and Artwork, and optionally adds **[LFX Insights](https://insights.linuxfoundation.org/)** **Insights Health** (tier, including **Archived** when shown on…
