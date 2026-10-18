---
repo: "michaelarnauts/aiocomfoconnect"
name: "aiocomfoconnect"
description: "Python AsyncIO Zehnder ComfoConnect LAN C library to interface with ComfoAir Q350/450/600 units. "
readmeQualityOk: true
url: "https://github.com/michaelarnauts/aiocomfoconnect"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 108
forks: 34
openIssues: 3
closedIssues: 50
watchers: 6
contributors: 15
recentReleases: 0
createdAt: "2022-11-30T10:48:23Z"
lastCommitAt: "2026-10-18T08:18:21Z"
lastReleaseAt: "2024-04-02T09:43:14Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 86
undervaluedScore: 48
maintainers: ["michaelarnauts", "PrzemyslawKlys", "blauret"]
openGraphImageUrl: "https://opengraph.githubassets.com/f77d1931ee1ee38493dd9893a94067883c0411737ea686121c66ed63d656b43f/michaelarnauts/aiocomfoconnect"
fundingLinks: ["GITHUB:https://github.com/michaelarnauts", "KO_FI:https://ko-fi.com/michaelarnauts"]
discussionCount: 9
---

# aiocomfoconnect

`aiocomfoconnect` is an asyncio Python 3 library for communicating with a Zehnder ComfoAir Q350/450/600 ventilation system. It's the successor of
[comfoconnect](https://github.com/michaelarnauts/comfoconnect).

The [home-assistant-comfoconnect](https://github.com/michaelarnauts/home-assistant-comfoconnect) is using this library.

It's compatible with Python 3.13 and higher.

## Installation

```shell
pip3 install aiocomfoconnect
```

## CLI Usage

```shell
$ python -m aiocomfoconnect --help

$ python -m aiocomfoconnect discover

$ python -m aiocomfoconnect register --host 192.168.1.213
$ python -m aiocomfoconnect deregister --host 192.168.1.213  # List the registered apps
$ python -m aiocomfoconnect deregister --host 192.168.1.213 <uuid>  # Deregister an app

$ python -m aiocomfoconnect set-speed away --host 192.168.1.213
$ python -m aiocomfoconnect set-speed low --host 192.168.1.213
$ python -m aiocomfoconnect set-mode auto --host 192.168.1.213
$ python -m aiocomfoconnect set-speed medium --host 192.168.1.213
$ python -m aiocomfoconnect set-speed high --host 192.168.1.213
$ python -m aiocomfoconnect set-boost on --host 192.168.1.213 --timeout 1200

$ python -m…
