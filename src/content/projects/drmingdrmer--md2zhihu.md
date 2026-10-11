---
repo: "drmingdrmer/md2zhihu"
name: "md2zhihu"
description: "convert markdown to zhihu compatible format."
readmeQualityOk: true
url: "https://github.com/drmingdrmer/md2zhihu"
homepage: "https://blog.openacid.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["markdown", "python", "zhihu"]
stars: 80
forks: 13
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-12-22T09:27:03Z"
lastCommitAt: "2026-10-11T10:09:48Z"
lastReleaseAt: "2022-02-05T12:51:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 53
maintainers: ["drmingdrmer"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e588729157f022dc18577afdd6545f67a12d256c783bf4a70a03c6efe1b9b52/drmingdrmer/md2zhihu"
discussionCount: 13
---

# md2zhihu

中文介绍在: [md2zhihu-中文介绍](https://github.com/drmingdrmer/md2zhihu/blob/HEAD/README-cn.md).

Converts markdown into a single-file version without local asset dependencies,
which can be directly imported into [zhihu.com](https://github.com/drmingdrmer/md2zhihu/blob/HEAD/zhihu.com) or other social
platforms with a single click.

[md2zhihu on Marketplace](https://github.com/marketplace/actions/md2zhihu)

|           | md                    | imported               |
| :--       | :-:                   | :-:                    |
| original  |     |  |
| converted |  |   |

# Usage

**md2zhihu DOES NOT support Windows**: [Issue: no module termios](https://github.com/drmingdrmer/md2zhihu/issues/7).
Use it remotely with GitHub Action:

## 1. Use it remotely with GitHub Action:

This is the recommended method since you do not need to install anything
locally. Only `git` is required. See: [md2zhihu on
Marketplace](https://github.com/marketplace/actions/md2zhihu)

**Note**: use `asset_repo` to specify a gitee.com repo so that zhihu.com load images from it when importing.

Add the action configuration into the git repository where your markdown files
are located for conversion:…
