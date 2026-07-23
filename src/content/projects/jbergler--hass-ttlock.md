---
repo: "jbergler/hass-ttlock"
name: "hass-ttlock"
description: "Home Assistant integration for TTLock locks"
readmeQualityOk: true
url: "https://github.com/jbergler/hass-ttlock"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "homeassistant", "ttlock", "integration", "home-assistant", "cielsa", "e-lok"]
stars: 145
forks: 30
openIssues: 11
closedIssues: 118
watchers: 7
contributors: 11
recentReleases: 0
createdAt: "2023-04-01T19:50:55Z"
lastCommitAt: "2026-07-23T06:14:18Z"
lastReleaseAt: "2023-04-21T23:28:20Z"
status: "thriving"
tags: ["needs_contributors", "community_hub"]
healthScore: 85
undervaluedScore: 44
maintainers: ["jbergler", "Copilot", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c7f65bb8d524a9a2f93850f7bca67728209c9027eeddfe9d78fcfd83c9f9175/jbergler/hass-ttlock"
discussionCount: 50
---

# hass-ttlock

Home Assistant integration for TTLock based locks.

[<img src="https://img.shields.io/github/v/release/jbergler/hass-ttlock?style=for-the-badge" />](https://github.com/jbergler/hass-ttlock/releases/latest)
<picture><img src="https://img.shields.io/github/downloads/jbergler/hass-ttlock/total?style=for-the-badge" /></picture>
<picture><img src="https://img.shields.io/github/downloads/jbergler/hass-ttlock/latest/total?style=for-the-badge" /></picture>
[<img src="https://img.shields.io/codecov/c/github/jbergler/hass-ttlock?style=for-the-badge&token=EJI902TDWE" />](https://app.codecov.io/gh/jbergler/hass-ttlock)

## Overview

This integration uses the TTLock Cloud to communicate with your lock. It supports the following features:

- Locking and unlocking
- Discovery of locks on startup
- Real-time updates via a webhook (no periodic polling which wastes battery)
- Additional sensors for battery, last operator + reason
- Add new pass codes
- Delete expired pass codes
- List passcodes
- List records history (lock, unlock etc)

## Known working locks

> If this integration is working for you, please leave a comment [here](https://github.com/jbergler/hass-ttlock/issues/1)

-…
