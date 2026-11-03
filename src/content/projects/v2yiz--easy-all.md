---
repo: "v2yiz/easy_all"
name: "easy_all"
description: "this is the way"
originalDescription: "this is the way"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/v2yiz/easy_all"
language: "Shell"
languages: ["Shell"]
languagePcts: [88]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-24T09:27:06Z"
lastCommitAt: "2026-11-03T12:47:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/064f825c82bfd90ae299f12d8770f617ba6ba746dc4e9e8df7e02ff4f5da39c6/v2yiz/easy_all"
---

# easy_all

Current source version: [2.4.6](https://github.com/v2yiz/easy_all/blob/HEAD/CHANGELOG.md#246-更新说明2026-11-03).

`easy_all` is a single-node installer for fresh Debian 12/13 VPS servers (all modes support amd64, and Bunny additionally supports arm64). It configures Xray, Nginx, subscriptions, UFW, Fail2ban, and TCP acceleration in one pass (Skyline Speeder is installed and enabled by default).

All installation parameters are provided at once through a JSON dictionary (see [Installation parameters](#安装参数)). The installer does not prompt for anything during installation.

IPv4 only. Only one mode can be installed on a given VPS, and it should be a dedicated server that does not host other workloads.

## Before you start: configure SSH keepalive

The installation runs `apt`, kernel, and TCP acceleration steps continuously for more than ten minutes. An SSH idle disconnect will interrupt the installation directly and may leave the machine in a half-configured state.

```bash
# Local ~/.ssh/config (write once; applies to all VPS servers)
Host *
    ServerAliveInterval 30
    ServerAliveCountMax 6
    TCPKeepAlive yes
```

Temporary usage: `ssh -o ServerAliveInterval=30 -o…
