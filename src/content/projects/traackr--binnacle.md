---
repo: "traackr/binnacle"
name: "binnacle"
description: "An opinionated tool to interact with Kubernetes' Helm"
readmeQualityOk: true
url: "https://github.com/traackr/binnacle"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 9
forks: 0
openIssues: 2
closedIssues: 6
watchers: 16
contributors: 7
recentReleases: 0
createdAt: "2018-04-20T20:50:18Z"
lastCommitAt: "2026-08-15T04:03:03Z"
lastReleaseAt: "2020-02-04T17:52:58Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 95
undervaluedScore: 43
maintainers: ["tyrantkhan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d60892662f7513a5501656f507b95d8dab65c990e1dfdc0a4fb373bdf3dc5e0f/traackr/binnacle"
---

# binnacle [][release-url] [](https://github.com/Traackr/binnacle/actions/workflows/test.yml)

`binnacle` is an opinionated automation tool used to interact with Kubernetes' [Helm][helm].  By offering a single file to manage one or many charts, you can easily control all aspects of your Helm managed applications.

`binnacle` is similar in nature to [Helmfile][helmfile] with a slightly different approach to managing Helm Charts.

## Installation

A binary for various operating systems is available through [Github Releases][github-releases].  Download the appropriate archive, and extract into a directory within your PATH.

## Usage

For the full list of options:

```shell
binnacle --help
```

To see the version of `binnacle` you can use the following:

```shell
binnacle --version
```

## Getting Started

### Configuration File Format

Configuration files can be written in YAML, TOML or JSON.

```yaml
---
# charts takes a list of chart configurations
charts:
    # This is the name of the chart
  - name: concourse
    # This is the namespace into which the chart is launched
    namespace: apps
    # This is the name for the release of this chart
    release: apps-concourse
    # This…
