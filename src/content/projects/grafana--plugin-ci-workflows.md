---
repo: "grafana/plugin-ci-workflows"
name: "plugin-ci-workflows"
description: "Re-usable GitHub Actions workflows for building, testing, releasing and deploying plugins"
readmeQualityOk: true
url: "https://github.com/grafana/plugin-ci-workflows"
language: "Go"
languages: ["Go"]
languagePcts: [64]
topics: ["keep", "plugins-platform", "group-datasources", "team-grafana-catalog"]
stars: 10
forks: 11
openIssues: 26
closedIssues: 97
watchers: 92
contributors: 83
recentReleases: 0
createdAt: "2024-11-06T11:11:37Z"
lastCommitAt: "2026-11-05T11:24:41Z"
lastReleaseAt: "2025-10-03T09:22:03Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "community_watch", "fork_magnet"]
healthScore: 95
undervaluedScore: 54
maintainers: ["renovate-sh-app[bot]", "cyriltovena", "grafana-plugins-platform-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e357891c3f1ccd61c9e571e9bf78fb8f84abec6c0609228d693b2c34a14c0b3e/grafana/plugin-ci-workflows"
---

# Plugin CI/CD Workflows

This repository contains reusable GitHub Actions workflows and individual actions for building, testing, and deploying Grafana plugins. It provides a standardized CI/CD pipeline that can be easily integrated into any Grafana plugin repository. This repository mostly contains workflows that are relevant to Grafana Labs **internal** teams working on plugins.

For github actions that are suited for external developers see [plugin-actions](https://github.com/grafana/plugin-actions) repository.

## 🎯 Purpose

The plugin-ci-workflows repository centralizes and standardizes the CI/CD process for Grafana plugins, providing:

- **Consistent Build Process**: Standardized frontend and backend build steps
- **Automated Testing**: Unit tests, E2E tests with Playwright, and documentation testing
- **Security Scanning**: Integrated Trufflehog secret scanning
- **Plugin Packaging**: Automated signing and ZIP packaging for multiple architectures
- **Deployment Pipeline**: Automated publishing to Grafana Plugin Catalog and Grafana Cloud
- **Documentation Publishing**: Automated docs publishing to Grafana website
- **Catalog Docs**: Validates and packages multi-page plugin…
