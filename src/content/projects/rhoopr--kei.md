---
repo: "rhoopr/kei"
name: "kei"
description: "Fast, parallel backups for cloud-hosted photos and videos - one-time exports, local mirrors, and unattended Docker runs."
url: "https://github.com/rhoopr/kei"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["apple", "backup", "cli", "docker", "icloud", "icloud-photos", "photo-backup", "rust", "selfhosted"]
stars: 134
forks: 5
openIssues: 25
closedIssues: 234
watchers: 2
contributors: 4
recentReleases: 5
createdAt: "2026-02-01T01:59:53Z"
lastCommitAt: "2026-06-23T23:17:37Z"
lastReleaseAt: "2026-04-02T18:10:20Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine", "community_hub"]
healthScore: 98
undervaluedScore: 34
maintainers: ["rhoopr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1146984886/793d171e-03a2-4a7c-8fe7-adbc42de4aad"
fundingLinks: ["KO_FI:https://ko-fi.com/rhoopr"]
discussionCount: 24
---

</p>

<h1 align="center">kei: fast, parallel backups<br>
  for cloud-hosted photos and videos.</h1>

kei copies cloud-hosted photos and videos into folders you control. Today that includes iCloud Photos. The goal is a fast, parallel local backup you can run once, keep as a mirror, or leave unattended in Docker.

It handles the parts that make photo backups annoying: big libraries, shared libraries, albums, Live Photos, RAW files, edited versions, retries, interrupted downloads, and existing archives you don't want to download twice.

> [!WARNING]
> kei is pre-release software. Minor versions may contain breaking changes.
> 
> Read [CHANGELOG.md](CHANGELOG.md) before updating.

## Install

```sh
brew install rhoopr/kei/kei
```

```sh
docker pull ghcr.io/rhoopr/kei:latest
```

Pre-built binaries for macOS, Linux, and Windows are on the [Releases page](https://github.com/rhoopr/kei/releases). For Docker Compose, source builds, FreeBSD, and NAS setup, see [Install](https://github.com/rhoopr/kei/wiki/Install).

## Start

> [!IMPORTANT]
> **v0.20 moved durable sync settings into TOML.**
>
> Keep CLI flags for one run, env vars for secrets and service glue, and saved settings in…
