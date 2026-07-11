---
repo: "Vaskivskyi/asusrouter"
name: "asusrouter"
description: "API wrapper for communication with ASUSWRT-powered routers using HTTP protocol"
readmeQualityOk: true
url: "https://github.com/Vaskivskyi/asusrouter"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["asus", "asus-routers", "asuswrt", "asuswrt-merlin"]
stars: 121
forks: 20
openIssues: 12
closedIssues: 13
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2022-02-12T15:25:23Z"
lastCommitAt: "2026-07-11T05:56:43Z"
lastReleaseAt: "2022-04-27T11:28:05Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 89
undervaluedScore: 42
maintainers: ["Vaskivskyi", "dependabot[bot]", "asusrouter-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3209a51d3870f481414531944209df8cbc49e6eaff635ae645a2b15894dbe8c/Vaskivskyi/asusrouter"
fundingLinks: ["GITHUB:https://github.com/Vaskivskyi", "BUY_ME_A_COFFEE:https://buymeacoffee.com/Vaskivskyi", "PATREON:https://patreon.com/Vaskivskyi"]
discussionCount: 13
---

<a href="https://www.buymeacoffee.com/vaskivskyi" target="_blank"><img src="https://asusrouter.vaskivskyi.com/BuyMeACoffee.png" alt="Buy Me A Coffee" style="height: 28px !important;" align="right" /></a>

## AsusRouter

**AsusRouter** is an API wrapper for communication with ASUSWRT-powered routers using HTTP(S) protocols. The library supports both the stock AsusWRT firmware and AsusWRT-Merlin.

Up till now, it is mostly used for the [custom AsusRouter Home Assistant integration](https://github.com/Vaskivskyi/ha-asusrouter) and from recently by the core Home Assistant AsusWRT integration. But I am always open to making it suitable for any other use.

## Installation

Installation of the latest release is available from PyPI:

```
pip install asusrouter
```

## Usage

Once installed, you can import the `AsusRouter` class from the module. Example shows the default parameters except for `host`, `username` and `password`.

```python
import aiohttp
import asyncio
from asusrouter import AsusRouter, AsusData

# Create a new event loop
loop = asyncio.new_event_loop()

# Create aiohttp session
session = aiohttp.ClientSession(loop=loop)

router = AsusRouter(                #required - both…
