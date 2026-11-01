---
repo: "bluesky-social/goat"
name: "goat"
description: "Go AT protocol CLI tool"
readmeQualityOk: true
url: "https://github.com/bluesky-social/goat"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 225
forks: 27
openIssues: 20
closedIssues: 11
watchers: 4
contributors: 21
recentReleases: 3
createdAt: "2025-08-13T01:38:12Z"
lastCommitAt: "2026-11-01T22:58:09Z"
lastReleaseAt: "2026-10-13T01:10:03Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 71
undervaluedScore: 40
maintainers: ["bnewbold", "iameli", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5eed5cc32b7ab8df323fcd14ca1185d537b7cb026d6722ff0fb8ad00ad24b04f/bluesky-social/goat"
---

`goat`: Go AT protocol CLI tool
===============================

This is a general purpose [atproto](https://atproto.com) CLI tool, sort of like `curl`. You can fetch `at://` URIs, monitor the full-network firehose, migrate accounts, administer PDS instances, and more.

## Install

If you use [homebrew](https://formulae.brew.sh/formula/goat), you can install directly:

```bash
brew install goat
```

Pre-built binaries and Debian/Ubuntu packages are available under [Releases](https://github.com/bluesky-social/goat/releases/tag/v0.2.0).

If you have the Go toolchain installed and configured correctly, you can directly build and install the tool for your local account:

```bash
go install github.com/bluesky-social/goat@latest
```

## Usage

`goat` is relatively self-documenting via help pages:

```bash
goat --help
goat bsky -h
goat help bsky
# etc
```

Most commands use public APIs and don't require authentication. Some commands, like creating records, require an atproto account. You can log in using an "app password" with `goat account login -u <handle> -p <password>`.

WARNING: `goat` will store both the app password and authentication tokens in the current users home directory, in…
