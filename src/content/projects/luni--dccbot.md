---
repo: "luni/dccbot"
name: "dccbot"
description: "IRC XDCC download bot written in python with aiohttp and irc.py."
readmeQualityOk: true
url: "https://github.com/luni/dccbot"
homepage: "https://luni.github.io/dccbot/"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["dcc", "download", "irc", "xdcc", "file-sharing", "irc-bot", "filesharing", "iroffer"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2025-02-25T21:28:56Z"
lastCommitAt: "2026-11-02T17:56:47Z"
lastReleaseAt: "2026-10-21T22:13:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 95
maintainers: ["luni", "dependabot[bot]", "arkancrow"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5471beaaa7a0c057befd094039e422bf42f364047c133faf4b764523b5b8138/luni/dccbot"
---

dccbot
========

An IRC XDCC download bot written in python with aiohttp and [irc.py](https://github.com/jaraco/irc).

Features
--------

* join channels (auto-join on connect, with `also_join` cascades)
* send messages to channels or users
* NickServ authentication
* random nickname generation
* TLS/SSL server connections (with optional certificate verification bypass)
* DCC file transfer support (SEND / RESUME / SSEND)
* SSL DCC (SSEND) support
* passive DCC (incoming connections) with configurable listen IP and port range
* MIME type filtering for received files
* file size limits
* private IP filtering for DCC transfers (peers may advertise IPs or hostnames; hostnames are resolved and checked too)
* transfer cancellation via API
* per-bot send queue throttling `xdcc send` requests to the same bot; numeric `xdcc send`/`xdcc batch` ranges (e.g. `xdcc batch 1-5`) are expanded into individual queued sends, so range requests also work on bots without batch support
* auto-disconnect from idle servers and channels
* automatic reconnect with exponential backoff when the IRC connection drops while work is pending; channels are rejoined and queued sends resume (`reconnect_max_attempts`)…
