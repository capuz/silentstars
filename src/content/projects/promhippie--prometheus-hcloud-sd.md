---
repo: "promhippie/prometheus-hcloud-sd"
name: "prometheus-hcloud-sd"
description: "Prometheus Service Discovery for Hetzner Cloud"
readmeQualityOk: true
url: "https://github.com/promhippie/prometheus-hcloud-sd"
homepage: "https://promhippie.github.io/prometheus-hcloud-sd/"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["prometheus", "service", "discovery", "sd", "service-discovery", "prometheus-exporter", "hetzner", "hcloud"]
stars: 20
forks: 2
openIssues: 1
closedIssues: 15
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2018-09-13T08:39:52Z"
lastCommitAt: "2026-10-23T08:46:36Z"
lastReleaseAt: "2023-12-18T09:24:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 68
maintainers: ["renovate[bot]", "semantic-release-bot", "tboerger"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b1fbceb3fa57893682800c80a180567bb5e017cbf1efc00d3fa9dbfa70a1bcd/promhippie/prometheus-hcloud-sd"
---

# Prometheus Hetzner Cloud SD

This project provides a server to automatically discover nodes within your
Hetzner Cloud account in a Prometheus SD compatible format.

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

## Build…
