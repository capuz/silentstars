---
repo: "suzuki-shunsuke/ghir"
name: "ghir"
description: "ghir is a CLI making past GitHub Releases immutable"
readmeQualityOk: true
url: "https://github.com/suzuki-shunsuke/ghir"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["cli", "github", "oss", "security"]
stars: 36
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2025-10-04T11:20:10Z"
lastCommitAt: "2026-08-09T04:47:50Z"
lastReleaseAt: "2026-07-30T00:33:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 53
maintainers: ["renovate[bot]", "suzuki-shunsuke"]
openGraphImageUrl: "https://opengraph.githubassets.com/9970e924ae9b05a4b35cd7bed619ad54a3e9f5a6a2f86a03552563cb5a7a31ac/suzuki-shunsuke/ghir"
fundingLinks: ["GITHUB:https://github.com/suzuki-shunsuke"]
---

# ghir (GitHub Immutable Releases)

[Install](https://github.com/suzuki-shunsuke/ghir/blob/HEAD/INSTALL.md)

ghir is a CLI making past GitHub Releases immutable.

About GitHub Immutable Releases, please see the following links:

- https://github.blog/changelog/2025-08-26-releases-now-support-immutability-in-public-preview/
- https://github.com/orgs/community/discussions/171210

Immutable Releases protect your software supply chain by preventing any changes to released assets.
While enabling Immutable Releases is straightforward, previously created releases remain vulnerable.
ghir is a CLI tool that secures your past releases by making them immutable.

## How To Use

0. Enable Immutable Releases
1. Run ghir

```sh
ghir [--log-level <debug|info|warn|error>] <repo full name>
```

e.g.

```sh
ghir aquaproj/aqua
```

## GitHub Access Token

ghir requires a GitHub Access Token.

- Required Permissions: `contents:write`
- Scopes (accessible repositories): A repository to be updated

The priority of the access token is as follows:

1. Environment Variables
    1. `GHIR_GITHUB_TOKEN`
    1. `GITHUB_TOKEN`
1. [ghtkn integration](https://github.com/suzuki-shunsuke/ghtkn)
    1. `export…
