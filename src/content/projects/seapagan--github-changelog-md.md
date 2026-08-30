---
repo: "seapagan/github-changelog-md"
name: "github-changelog-md"
description: "Automatically generate a Markdown CHANGELOG file from your GitHub Repository PR history"
readmeQualityOk: true
url: "https://github.com/seapagan/github-changelog-md"
homepage: "http://changelog.seapagan.net/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["changelog-generator", "python", "changelog", "github-api", "markdown"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 10
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2023-09-23T10:28:19Z"
lastCommitAt: "2026-08-30T09:24:27Z"
lastReleaseAt: "2023-11-08T20:46:17Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 86
undervaluedScore: 82
maintainers: ["seapagan", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e9ff2343b5f1e52704aee27e23b21c4812963c652b66a9f77d4d5b37ff5ff82/seapagan/github-changelog-md"
fundingLinks: ["GITHUB:https://github.com/seapagan", "BUY_ME_A_COFFEE:https://buymeacoffee.com/seapagan", "KO_FI:https://ko-fi.com/seapagan"]
discussionCount: 23
---

# Markdown Changelog Generator 

version](https://badge.fury.io/py/github-changelog-md.svg)](https://badge.fury.io/py/github-changelog-md)

**Generate a Markdown changelog from a Github repository.**

This project will generate a Markdown-formatted changelog from a Github
repository. It will detect all GitHub releases and generate a changelog based on
the **merged** Pull Requests for each release along with a section for
**unreleased** PRs (those since the last release) at the top. It will also
include a list of all Issues closed for each release.

The PRs and issues are grouped by type (bug, enhancement, etc.) and sorted by
latest to oldest in this release.

> [!TIP]
> For an example of the output, see the
> [CHANGELOG](https://github.com/seapagan/github-changelog-md/blob/main/CHANGELOG.md)
> for this project.

**Full documentation is available at:** <https://changelog.seapagan.net>

- [Install Locally for a project](#install-locally-for-a-project)
- [Install Globally](#install-globally)
- [Setup a GitHub PAT](#setup-a-github-pat)
  - [PAT Permissions](#pat-permissions)
- [Create a config file](#create-a-config-file)
- [Add the config file to your…
