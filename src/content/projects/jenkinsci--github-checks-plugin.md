---
repo: "jenkinsci/github-checks-plugin"
name: "github-checks-plugin"
description: "Jenkins Plugin for GitHub Checks API"
readmeQualityOk: true
url: "https://github.com/jenkinsci/github-checks-plugin"
homepage: "https://plugins.jenkins.io/github-checks/"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["github", "report", "post-build", "notifier", "hacktoberfest"]
stars: 91
forks: 51
openIssues: 37
closedIssues: 38
watchers: 6
contributors: 733
recentReleases: 0
createdAt: "2020-07-06T10:43:07Z"
lastCommitAt: "2026-10-26T03:02:27Z"
lastReleaseAt: "2020-11-15T06:30:13Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 85
undervaluedScore: 47
maintainers: ["renovate[bot]", "AzazelSensei", "jimklimov"]
openGraphImageUrl: "https://opengraph.githubassets.com/6df05c783012e1822f0e20d9acdbd894bdacd3581855452f399ef5adcf3a218c/jenkinsci/github-checks-plugin"
fundingLinks: ["CUSTOM:https://crowdfunding.linuxfoundation.org/initiatives/jenkins", "CUSTOM:https://www.jenkins.io/donate/#why-donate"]
---

# GitHub Checks API Plugin

This plugin publishes checks to GitHub through [GitHub Checks API](https://docs.github.com/en/rest/reference/checks#runs).
It implements the extension points defined in [Checks API Plugin](https://github.com/jenkinsci/checks-api-plugin). 

This plugin has been installed, along with the [Checks API Plugin](https://github.com/jenkinsci/checks-api-plugin) on [ci.jenkins.io](https://ci.jenkins.io/Plugins) to help maintain over 2000 Jenkins plugins. You can take a look at the [check runs](https://github.com/jenkinsci/github-checks-plugin/runs/71009019003) for this repository or other plugin repositories under [Jenkins organization](https://github.com/jenkinsci) for the results.

- [Features](#features)
  - [Build Status Check](#build-status-check)
  - [Multiple jobs on one repository](#multiple-jobs-on-one-repository)
  - [Which commit a check is published against](#which-commit-a-check-is-published-against)
  - [Rerun Failed Build](#rerun-failed-build)
 - [Contributing](#contributing)
 - [Acknowledgements](#acknowledgements)
 - [LICENSE](#license)

## Getting started

Only GitHub Apps with proper permissions can publish checks, this…
