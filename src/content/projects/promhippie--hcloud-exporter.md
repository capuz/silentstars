---
repo: "promhippie/hcloud_exporter"
name: "hcloud_exporter"
description: "Prometheus exporter for Hetzner Cloud"
readmeQualityOk: true
url: "https://github.com/promhippie/hcloud_exporter"
homepage: "https://promhippie.github.io/hcloud_exporter/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["prometheus", "prometheus-exporter", "metrics", "hcloud"]
stars: 42
forks: 11
openIssues: 1
closedIssues: 23
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2018-09-13T08:47:19Z"
lastCommitAt: "2026-11-04T02:56:51Z"
lastReleaseAt: "2023-10-26T13:17:11Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 60
maintainers: ["renovate[bot]", "semantic-release-bot", "tboerger"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbf72b7b88564481a496e63b15053a2c6f967c4614f5aade469305238a1236e4/promhippie/hcloud_exporter"
discussionCount: 0
---

# Hetzner Cloud Exporter

An exporter for [Prometheus][prometheus] that collects metrics from
[Hetzner Cloud][hcloud].

## Install

You can download prebuilt binaries from our [GitHub releases][releases]. Besides
that we also prepared repositories for DEB and RPM packages which can be found
at [Cloudsmith][pkgrepo]. If you prefer to use containers you could use our
images published on [GHCR][ghcr], [Docker Hub][dockerhub] or [Quay][quayio]. If
you need further guidance how to install this take a look at our [docs][docs].

Package repository hosting is graciously provided by [Cloudsmith][cloudsmith].
Cloudsmith is the only fully hosted, cloud-native, universal package management
solution, that enables your organization to create, store and share packages in
any format, to any place, with total confidence.

## Prerequisites

We use [mise][mise] to manage all required tools and their versions. Install it
by following the [official installation instructions][mise-install], then run
the following commands inside the repository to activate mise and install all
tools defined in `mise.toml`:

```console
mise trust
mise install
```

## Build

Since all required commands ar part of our…
