---
repo: "suzuki-shunsuke/ghcp"
name: "ghcp"
description: "Tool to fork a repository, commit files, create a pull request and upload assets using GitHub API"
readmeQualityOk: true
url: "https://github.com/suzuki-shunsuke/ghcp"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["oss"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-11-14T02:09:27Z"
lastCommitAt: "2026-10-27T12:39:44Z"
lastReleaseAt: "2024-10-04T06:07:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 68
maintainers: ["renovate[bot]", "suzuki-shunsuke", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0adf87731ab48676fc7074339fa0c9a64fad6db94f82f5d6c537118e31b63988/suzuki-shunsuke/ghcp"
---

# ghcp

Fork of [int128/ghcp](https://github.com/int128/ghcp).

This is a release engineering tool for GitHub.
It depends on GitHub APIs and works without git installation.

It provides the following features:

- Commit files to a repository
- Create an empty commit
- Fork a repository and commit files to the forked repository
- Create a pull request
- Upload files to GitHub Releases

## Install

There are several ways to install ghcp.

1. [Homebrew](https://brew.sh/)

```sh
brew install suzuki-shunsuke/ghcp/ghcp
```

2. [Scoop](https://scoop.sh/)

```sh
scoop bucket add suzuki-shunsuke https://github.com/suzuki-shunsuke/scoop-bucket
scoop install ghcp
```

3. [aqua](https://aquaproj.github.io/)

```sh
aqua g -i suzuki-shunsuke/ghcp
```

4. Download a prebuilt binary from [GitHub Releases](https://github.com/suzuki-shunsuke/ghcp/releases) and unarchive it and install the executable file into `$PATH`

You can verify downloaded binaries using some tools.

1. [Cosign](https://github.com/sigstore/cosign)
1. [slsa-verifier](https://github.com/slsa-framework/slsa-verifier)
1. [GitHub CLI](https://cli.github.com/)

### 1. Cosign

You can install Cosign by aqua.

```sh
aqua g -i…
