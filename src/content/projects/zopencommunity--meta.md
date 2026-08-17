---
repo: "zopencommunity/meta"
name: "meta"
description: "Meta repo for the zopen community website + zopen package manager and more!"
readmeQualityOk: true
url: "https://github.com/zopencommunity/meta"
homepage: "https://zopen.community"
language: "Shell"
languages: ["Shell"]
languagePcts: [52]
stars: 54
forks: 42
openIssues: 170
closedIssues: 245
watchers: 12
contributors: 44
recentReleases: 0
createdAt: "2021-11-12T20:56:34Z"
lastCommitAt: "2026-08-17T04:19:42Z"
lastReleaseAt: "2024-03-05T14:57:43Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "community_hub", "fork_magnet"]
healthScore: 91
undervaluedScore: 57
maintainers: ["IgorTodorovskiIBM", "sabi789"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6ee0761dea4bdee1a15ad952f1219e626a7ee1b91b26545511a660a47b34a9b/zopencommunity/meta"
discussionCount: 212
---

# Meta - Introducing the zopen package manager

Meta adds package management facilities to z/OS, via `zopen`. It is similar to utilities like apt, dpkg, yum, yast2, and emerge. It is written as a pure shell script to remove any prerequisites (like python/perl/bash etc).
This package manager is designed for everyday usage of the zopen community ports within the z/OS UNIX environment or for those who wish to download the tools.

**Download** the latest zopen package manager [here](https://github.com/zopencommunity/metaport/releases).

## Pre-config

It is advised to have the following set on the system to ensure correct operation:

```bash
export _BPXK_AUTOCVT=ON
export _CEE_RUNOPTS="$_CEE_RUNOPTS FILETAG(AUTOCVT,AUTOTAG) POSIX(ON)"
export _TAG_REDIR_ERR=txt
export _TAG_REDIR_IN=txt
export _TAG_REDIR_OUT=txt
```

Make sure the character device `/dev/tty` is untagged or you may experience unexpected behaviour. Run `chtag -r /dev/tty` to remove any tags.

## Installation and sample usage

Start with [quick start guide](https://zopen.community/#/Guides/QuickStart).

## Important usage notes

* Remote repositories utilise the suffix `port` - where required, packages should be specified…
