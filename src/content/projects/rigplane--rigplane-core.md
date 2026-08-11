---
repo: "rigplane/rigplane-core"
name: "rigplane-core"
description: "Python library for controlling Icom transceivers over LAN (UDP) — no wfview/hamlib required"
readmeQualityOk: true
url: "https://github.com/rigplane/rigplane-core"
homepage: "https://rigplane.github.io/rigplane-core/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [60, 30]
topics: ["amateur-radio", "asyncio", "ci-v", "ham-radio", "ic-705", "icom", "radio-control", "sdr", "transceiver", "ic-7610"]
stars: 18
forks: 5
openIssues: 12
closedIssues: 1191
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-02-25T06:47:17Z"
lastCommitAt: "2026-08-11T04:48:40Z"
lastReleaseAt: "2026-03-27T23:38:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 52
maintainers: ["morozsm"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f8f5a4a4e6f499e0881f0c54794640f07cd93ef5facfd66d5ee5dd7678c6591/rigplane/rigplane-core"
discussionCount: 1
---

# rigplane

> **v2.0.0 — renamed from `icom-lan`.** The package, console script, repo,
> and docs now ship as `rigplane`. Existing `from icom_lan import ...` calls
> keep working through a deprecation shim. Migration guide:
> [rigplane.dev/migrate](https://rigplane.dev/migrate).

**rigplane** is a multi-vendor radio control library and Web UI — Python
asyncio core plus a self-contained browser front-end. It has native providers
for rich Icom CI-V and Yaesu CAT paths, and is moving long-tail serial CAT
coverage toward a Hamlib-backed provider with assisted discovery. A
capability-driven runtime renders the same Web UI and `rigctld`-compatible
network bridge across every backend that honours the public `Radio` protocol.
Tested in production against WSJT-X, fldigi, and JS8Call.

</p>

## Quickstart

```bash
pip install rigplane
rigplane web                # auto-discovers a radio on the LAN
# open http://localhost:8080
```

Or as a library:

```python
import asyncio
from rigplane import create_radio, LanBackendConfig

async def main():
    async with create_radio(LanBackendConfig(host="192.168.1.100",
                                             username="user",…
