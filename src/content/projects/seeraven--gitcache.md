---
repo: "seeraven/gitcache"
name: "gitcache"
description: "Local cache for git repositories to speed up working with large repositories and multiple clones."
url: "https://github.com/seeraven/gitcache"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 77
forks: 13
openIssues: 0
closedIssues: 47
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2020-06-28T10:48:30Z"
lastCommitAt: "2026-06-25T06:42:49Z"
lastReleaseAt: "2022-03-05T06:12:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 48
maintainers: ["seeraven", "colinodell", "Youw"]
openGraphImageUrl: "https://opengraph.githubassets.com/2da2c703fdd5fde9eb8b174e7f3ac731f70bd084a239ccdd68d2d3ea1a904599/seeraven/gitcache"
---

# gitcache

Local cache for [git] repositories to speed up working with large repositories
and multiple clones.

The basic idea of gitcache is to use a local bare mirror that is updated
when needed and used as the source repository for multiple local repositories.

## Features

  - Wrapper for the `git` command for easy integration.
  - [git-lfs] support.
  - Custom update interval of git mirrors including the possibility to
    perform updates only on explicit request.
  - Statistics available using the `gitcache` command.
  - Timeouts on all mirror-related operations using a total execution
    timeout and a timeout on the stdout/stderr output of the commands.
  - Configuration via environment variables, a global configuration file and
    a per-configuration configuration file.

## Description

gitcache is designed to be used as a wrapper to git, so in the following we
show how gitcache translates the git commands for the individual operations.

When the user issues a

    git clone https://github.com/seeraven/gitcache.git

for the first time, the repository https://github.com/seeraven/gitcache.git is
cloned into a bare mirror…
