---
repo: "msanguineti/git-oneflow"
name: "git-oneflow"
description: "NPM - CLI tools implementing OneFlow git branching model"
readmeQualityOk: true
url: "https://github.com/msanguineti/git-oneflow"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [65, 35]
topics: ["oneflow", "git", "node-cli", "git-oneflow"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 9
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2019-04-08T08:03:56Z"
lastCommitAt: "2026-10-30T10:23:46Z"
lastReleaseAt: "2024-02-19T16:30:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 40
maintainers: ["msanguineti"]
openGraphImageUrl: "https://opengraph.githubassets.com/37c6a39256ddcfac1067b3038aabb46ffc060bafc668f2368b72a9fd6b2a446c/msanguineti/git-oneflow"
---

# 

> CLI tools implementing the _OneFlow_ git branching model.

OneFlow is a git branching model proposed by [Adam Ruka](https://github.com/skinny85) as an [alternative to GitFlow](https://www.endoflineblog.com/gitflow-considered-harmful).

In [this article](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow#develop-feature-branches), Adam describes how it works and when it should be employed.

git-OneFlow supports both a single main branch and separate main/development
branches. By default, it uses `main` and integrates feature branches by rebasing.
See [Configuration](#configuration) to choose branch names and integration options.

The workflow uses Git rebase and can rewrite branch history. Read Git's
[rebasing guidance](https://git-scm.com/book/en/v2/Git-Branching-Rebasing#_rebase_peril)
before using it on shared branches.

The project is in maintenance mode, with updates focused on fixes and supported
runtimes.

## Node Compatibility

Node.js 22.8.0 or newer is required. Terminal colors use Node.js color detection;
its standard `NO_COLOR` and `FORCE_COLOR` environment variables apply.

Maintained Node.js LTS lines and newer non-EOL stable releases are…
