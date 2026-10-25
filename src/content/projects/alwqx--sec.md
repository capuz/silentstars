---
repo: "alwqx/sec"
name: "sec"
description: "Security information CLI"
originalDescription: "Security information CLI"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/alwqx/sec"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["cli", "quote", "stock"]
stars: 13
forks: 2
openIssues: 4
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-09-30T01:49:17Z"
lastCommitAt: "2026-10-25T08:39:59Z"
lastReleaseAt: "2025-05-29T14:22:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 59
maintainers: ["alwqx"]
openGraphImageUrl: "https://opengraph.githubassets.com/8acc9c65a43cff3d3d57f5fc6ea4efabf695d29bacedbef1e8c3a7ef61405b35/alwqx/sec"
---

# sec

Security Information CLI

## Installation

Go to the [releases](https://github.com/alwqx/sec/releases) page and download the binary for your operating system.

On Mac/Linux, place the binary in a directory on your `PATH`.

On Windows, place the binary under `系统环境变量`.

## Commands

### Help

```shell
Usage:
  sec [flags]
  sec [command]

Available Commands:
  bond          Print US Treasury yield curve (1M/3M/6M/5Y/10Y)
  bond-history  Print US Treasury yield curve history
  help          Help about any command
  info          Print basic information of a security/stock
  kline         Print candlestick chart of specific security
  metal         Print quote of precious metal(default au999)
  metal-history Print quote history of precious metal(default au999)
  quote         Security quote root Command
  quote-history Print quote history of specific security
  search        Search code and name of a security/stock
  upgrade       Upgrade sec to the latest version from GitHub releases

Flags:
  -D, --debug     Enable debug mode
  -h, --help      help for sec
  -v, --version   Show version information

Use "sec [command] --help" for more information about a command.
```

###…
