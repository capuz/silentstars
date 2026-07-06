---
repo: "cert-manager/cmctl"
name: "cmctl"
description: "`cmctl` is the command line utility that makes cert-manager'ing easier."
readmeQualityOk: true
url: "https://github.com/cert-manager/cmctl"
homepage: "https://cert-manager.io/docs/reference/cmctl/"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["cert-manager", "command-line-tool"]
stars: 100
forks: 22
openIssues: 4
closedIssues: 18
watchers: 4
contributors: 23
recentReleases: 0
createdAt: "2024-01-12T16:47:35Z"
lastCommitAt: "2026-07-06T07:02:57Z"
lastReleaseAt: "2025-07-11T12:35:00Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 49
maintainers: ["cert-manager-prow[bot]", "renovate[bot]", "cert-manager-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/43313d3990ad895f69ff4759d9c2c95108838b6a966c9686923994b170bc316b/cert-manager/cmctl"
---

</p>

# cmctl - The cert-manager Command Line Tool

`cmctl` is a command line tool that can help you manage cert-manager and its resources inside your cluster.

## Documentation

The documentation for `cmctl` can be found on the [cert-manager website](https://cert-manager.io/docs/usage/cmctl/).

## Installation

> [!Note]
> These instructions are a copy of the [official installation instructions](https://cert-manager.io/docs/usage/cmctl/#installation).

### Homebrew

On Mac or Linux if you have [Homebrew](https://brew.sh/) installed, you can install `cmctl` with:

```sh
brew install cmctl
```

This will also install shell completion.

### Go install

If you have Go installed, you can install `cmctl` with:

```sh
go install github.com/cert-manager/cmctl/v2@latest
```

### Manual Installation

You need the `cmctl` file for the platform you're using, these can be found on our [cmctl GitHub releases page](https://github.com/cert-manager/cmctl/releases).
In order to use `cmctl` you need its binary to be accessible under the name `cmctl` in your `$PATH`. Run the following commands to set up the CLI. Replace OS and ARCH with your systems equivalents:

```sh
OS=$(uname -s | tr A-Z a-z);…
