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
stars: 37
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2025-10-04T11:20:10Z"
lastCommitAt: "2026-10-31T09:53:23Z"
lastReleaseAt: "2026-10-26T04:17:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 58
maintainers: ["renovate[bot]", "suzuki-shunsuke"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e889a07098541399d1989f2f595d60a31a6eecb4a2e4be74913924f53ff804f/suzuki-shunsuke/ghir"
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
