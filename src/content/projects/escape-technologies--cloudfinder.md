---
repo: "Escape-Technologies/cloudfinder"
name: "cloudfinder"
description: "Detect the cloud / hosting provider of a given host. Fast, static & offline"
url: "https://github.com/Escape-Technologies/cloudfinder"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 14
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2024-09-20T13:14:35Z"
lastCommitAt: "2026-06-27T00:36:14Z"
lastReleaseAt: "2024-10-04T00:11:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 71
maintainers: ["actions-user"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/860453036/453efe98-70fe-49da-ab14-7edffcc99eae"
---

# cloudfinder  

Detect the cloud / hosting provider of a given host. Fast, static & offline.  
Cloudfinder offers both a cli and a golang package.
Cloud provider ranges are also tracked and can be found in `./ranges`.

## CLI Usage

### Installation

Run install script: `curl -sSL https://raw.githubusercontent.com/Escape-Technologies/cloudfinder/main/install.sh | sh`
Or directly download a [release](https://github.com/Escape-Technologies/cloudfinder/releases/latest).

### Usage

```bash
cloudfinder [flags] <ip, host, domain, url> <ip, host, domain, url> ...
Flags:
  -debug
        enable debug mode
  -h    print help
  -help
        print help
  -json
        output json
  -raw
        output raw provider string
  -v    print version number
  -version
        print version number
```

## Examples

```bash
cloudfinder escape.tech
[15:06:39.755] INFO: escape.tech (13.39.28.216): Aws
[15:06:39.756] INFO: escape.tech (13.37.196.127): Aws
[15:06:39.756] INFO: escape.tech (13.36.180.15): Aws
```

You can provide multiple inputs:

```bash
cloudfinder escape.tech jobs.escape.tech
[15:31:34.602] INFO: escape.tech (13.39.28.216): Aws
[15:31:34.603] INFO: escape.tech (13.37.196.127): Aws…
