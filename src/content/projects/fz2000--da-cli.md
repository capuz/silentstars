---
repo: "FZ2000/da-cli"
name: "da-cli"
description: "Sync DeviantArt galleries to local folders — zero-dependency Python CLI with OAuth 2.1 PKCE, a SQLite index, and scheduled macOS syncs."
readmeQualityOk: true
url: "https://github.com/FZ2000/da-cli"
homepage: "https://github.com/FZ2000/da-cli/tree/main/docs"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["archiving", "backup", "cli", "command-line-tool", "deviantart", "deviantart-api", "keychain", "launchd", "macos", "oauth2"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-30T07:31:35Z"
lastCommitAt: "2026-07-31T06:28:33Z"
lastReleaseAt: "2026-07-31T05:55:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 13
maintainers: ["FZ2000"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc48ad9aedb727e1b5410250bb2a9d9442edafdd983ecc456c8d2786209d3a3d/FZ2000/da-cli"
---

# da-cli

Sync your DeviantArt gallery to a local folder from the command line — a backup of the art you watch, kept current. **Zero runtime dependencies**: the whole tool is the Python 3.10+ standard library. A local SQLite index means a re-run costs one API call when nothing new was posted, and `launchd` (macOS) or a systemd timer (Linux) keeps it running unattended. Plus search and browse helpers.

> **New to da-cli?** Follow the **[Setup Guide](https://github.com/FZ2000/da-cli/blob/HEAD/docs/getting-started.md)** — it walks you through everything from install to first sync in about 10 minutes, with screenshots.
> **Status: Beta** — the sync and search flows are stable and covered by 868 tests. macOS Keychain integration is production-ready; Linux Secret Service support is planned. See [CHANGELOG.md](https://github.com/FZ2000/da-cli/blob/HEAD/CHANGELOG.md).

## Documentation

| I want to… | Page |
| --- | --- |
| install it and download my first art | [Getting started](https://github.com/FZ2000/da-cli/blob/HEAD/docs/getting-started.md) |
| understand a command properly | [Command guides](https://github.com/FZ2000/da-cli/blob/HEAD/docs/commands/README.md) |
| look up a command…
