---
repo: "elastic/elastic-package"
name: "elastic-package"
description: "elastic-package - Command line tool for developing Elastic Integrations"
readmeQualityOk: true
url: "https://github.com/elastic/elastic-package"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 72
forks: 141
openIssues: 215
closedIssues: 443
watchers: 233
contributors: 132
recentReleases: 0
createdAt: "2020-06-05T11:20:18Z"
lastCommitAt: "2026-09-17T08:50:22Z"
lastReleaseAt: "2021-08-02T13:55:51Z"
status: "watched"
tags: ["needs_contributors", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 93
undervaluedScore: 43
maintainers: ["github-actions[bot]", "dependabot[bot]", "teresaromero"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9c8469ff1b5f4efd16c6d3d21d9d1a7a3a5484f75b16eee02cd88f028b5c24c/elastic/elastic-package"
discussionCount: 1
---

# elastic-package

`elastic-package` is a command line tool, written in Go, used for developing Elastic packages. It can help you lint, format,
test and build your packages. Learn about each of these and other features in [_Commands_](#commands) below.

Currently, `elastic-package` only supports packages of type [Elastic Integrations](https://github.com/elastic/integrations).

Please review the [integrations contributing guide](https://github.com/elastic/integrations/blob/main/CONTRIBUTING.md) to learn how to build and develop packages, understand the release procedure and
explore the builder tools.

## Getting started

### Install with a script (recommended)

The quickest way to install or update `elastic-package` is with the install script. It automatically detects
your operating system and architecture, downloads the latest release, and installs the binary to `/usr/local/bin`
(override with the `INSTALL_DIR` environment variable):

```bash
curl -fsSL https://raw.githubusercontent.com/elastic/elastic-package/main/scripts/install.sh | bash
```

To install to a custom directory (no `sudo` required):

```bash
curl -fsSL…
