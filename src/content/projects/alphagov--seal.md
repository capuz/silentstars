---
repo: "alphagov/seal"
name: "seal"
description: "Slack bot that publishes a team's pull requests to their Slack channel"
readmeQualityOk: true
url: "https://github.com/alphagov/seal"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [96]
topics: ["govuk"]
stars: 28
forks: 24
openIssues: 1
closedIssues: 6
watchers: 61
contributors: 146
recentReleases: 0
createdAt: "2018-04-17T08:44:53Z"
lastCommitAt: "2026-10-21T08:49:42Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 95
undervaluedScore: 55
maintainers: ["dependabot[bot]", "govuk-ci", "nimalank7"]
openGraphImageUrl: "https://opengraph.githubassets.com/d10b987abc8a05585fc5afc05de4654f46579289584e618f0873921fcabdcb2a/alphagov/seal"
---

# Seal

## What is it?

This Slack bot automates reporting and consistency checks across the team’s repositories. It provides visibility into code health, dependency management and gem release status by automatically posting key insights to engineering teams' channels.

Features:

- Pull Request updates: posts a summary of open pull requests across the team's repositories.
- Dependency monitoring: reports on Dependabot and Renovate updates to keep dependencies current and secure.
- Security insights: highlights Code Scanning and Dependabot security alerts to help identify and resolve vulnerabilities early.
- CI health checks: verifies that CI pipelines include the required security scan configurations and alerts the team on issues.
- Gem release tracking: detects unreleased changes in the team’s Ruby gem repositories.
- Motivational quotes: shares inspirational quotes in Slack channels to keep spirits high.

- Repository tag audit: includes a script that checks all repositories listed in the Developer Docs are tagged with the `govuk` topic for governance and consistency.

## How to use it?

Add your team's configuration to…
