---
repo: "codacy/base"
name: "base"
description: "Codacy Docker Base"
readmeQualityOk: true
url: "https://github.com/codacy/base"
language: "Makefile"
languages: ["Makefile", "Dockerfile"]
languagePcts: [66, 34]
topics: ["codacy", "docker", "jre", "base"]
stars: 6
forks: 4
openIssues: 1
closedIssues: 0
watchers: 12
contributors: 21
recentReleases: 0
createdAt: "2016-10-10T15:26:03Z"
lastCommitAt: "2026-11-24T14:10:02Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 66
undervaluedScore: 42
maintainers: ["lolgab", "machadoit", "nfcodacy"]
openGraphImageUrl: "https://opengraph.githubassets.com/3546750e04da8c5a2577a28a89ceb64350eb67c2225f1becbdeeb029daa01bfa/codacy/base"
---

# Codacy Docker Base Images

## Contents

Dockerfile describing a docker containing:
- Amazon Corretto on Amazon Linux 2023 (`amazoncorretto:<N>-al2023-headless`)
- Available Java versions (tags `jre17-<version>` and `jre25-<version>`):
  - Corretto 17
  - Corretto 25 (also tagged `latest`)
- Git cli 2.*, OpenSSH client (`ssh-agent`, `ssh-add`), `useradd`, unzip
- `/tini` as init process
- Packages are installed with `dnf`, not `apt-get`.

## Build and Publish

Check the complete list of available commands
to build and publish this docker image by running:

```sh
make help
```

# What is Codacy

[Codacy](https://www.codacy.com/) is an Automated Code Review Tool that monitors your technical debt,
helps you improve your code quality, teaches best practices to your developers, and helps you save time in Code Reviews.

## Among Codacy features

- Identify new Static Analysis issues
- Commit and Pull Request Analysis with GitHub, BitBucket/Stash, GitLab (and also direct git repositories)
- Auto-comments on Commits and Pull Requests
- Integrations with Slack, Jira, YouTrack
- Track issues Code Style, Security, Error Proneness, Performance, Unused Code and other categories
