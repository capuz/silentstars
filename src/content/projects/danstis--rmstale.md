---
repo: "danstis/rmstale"
name: "rmstale"
description: "rmstale is a tool to remove stale files recursively below a given directory. Files and folders older than a defined period are removed."
readmeQualityOk: true
url: "https://github.com/danstis/rmstale"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["delete", "filesystem", "management", "command-line-tool", "hacktoberfest", "chocolatey"]
stars: 5
forks: 2
openIssues: 3
closedIssues: 57
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2017-12-14T12:41:55Z"
lastCommitAt: "2026-07-28T15:01:35Z"
lastReleaseAt: "2018-02-27T10:35:36Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub"]
healthScore: 87
undervaluedScore: 74
maintainers: ["danstis", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef36d83faa04fd5b0fc2c1489ae911c1bfffbd563bb0b9a9393b6515602c3006/danstis/rmstale"
discussionCount: 65
---

# rmstale


> **rmstale** is a cross-platform command-line tool to remove stale files and empty directories recursively below a given directory.

---

## Table of Contents
- [Features](#features)
- [Install instructions](#install-instructions)
- [Usage instructions](#usage-instructions)
- [Contribution](#contribution)
- [Release Process](#release-process)
- [License](#license)

## Features
- Remove files and empty directories older than a specified age
- Cross-platform: Windows, Linux, macOS
- Dry-run mode for safe testing
- Extension-based file filtering
- Logs errors (e.g., permission issues)
- Designed for automation and scheduling

Some example use cases:
- Set on a schedule to clear old files from your temporary directories
- Set on a schedule to remove downloaded files from your downloads directory

## Install instructions

### Windows (Chocolatey)
```sh
choco install rmstale
```

### Windows (Winget)
```sh
winget install danstis.rmstale
```

### Linux
Visit the [releases page](https://github.com/danstis/rmstale/releases/latest) for the latest version, or use:
```sh
# Fetch the latest release tag from GitHub
latest_version=$(curl -s…
