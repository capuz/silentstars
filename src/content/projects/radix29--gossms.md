---
repo: "radix29/gossms"
name: "gossms"
description: "SQL Server Management Studio macOS, Linux, Windows"
readmeQualityOk: true
url: "https://github.com/radix29/gossms"
homepage: "https://github.com/radix29/gossms"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["golang", "sqlserver", "ssms", "linux", "macos", "portable", "tui", "sql", "sql-server-management-studio"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 6
createdAt: "2026-06-25T20:46:07Z"
lastCommitAt: "2026-11-07T13:52:25Z"
lastReleaseAt: "2026-09-15T19:43:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 57
maintainers: ["radix29"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1280683033/1138f140-51bc-4042-ae1c-f9bd10a1357b"
discussionCount: 1
---

# goSSMS

goSSMS is a terminal-based SQL Server management application. It is distributed
as a single executable and does not require an installer, SQL client tools, or
separate database drivers.

## Installation

### 1. Install goSSMS

#### Homebrew — macOS and Linux

```bash
brew install radix29/tap/gossms
```

Apple silicon and Intel; `brew upgrade gossms` tracks new releases.

#### APT — Debian, Ubuntu and derivatives

```bash
sudo install -d -m 0755 /etc/apt/keyrings
curl -fsSL https://radix29.github.io/apt/gossms.asc \
  | sudo tee /etc/apt/keyrings/gossms.asc > /dev/null
echo "deb [signed-by=/etc/apt/keyrings/gossms.asc] https://radix29.github.io/apt stable main" \
  | sudo tee /etc/apt/sources.list.d/gossms.list > /dev/null
sudo apt-get update && sudo apt-get install gossms
```

`amd64` and `arm64`. Details at
[radix29.github.io/apt](https://radix29.github.io/apt).

#### Direct download

Download the latest release for your platform:

**https://github.com/radix29/gossms/releases/latest**

Release binaries are available for:

- Windows (amd64 and arm64)
- Linux (amd64 and arm64)
- macOS (Apple silicon/arm64 and Intel/amd64)

Extract the downloaded archive before running the…
