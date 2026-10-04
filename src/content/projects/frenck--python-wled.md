---
repo: "frenck/python-wled"
name: "python-wled"
description: "Asynchronous Python client for WLED"
readmeQualityOk: true
url: "https://github.com/frenck/python-wled"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["wled", "esp8266", "ws2812b", "ledstrip", "python3", "api-client", "asynchronous"]
stars: 156
forks: 43
openIssues: 3
closedIssues: 34
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2019-10-28T22:10:01Z"
lastCommitAt: "2026-10-04T10:01:42Z"
lastReleaseAt: "2021-06-08T17:28:07Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 40
maintainers: ["frenck", "dependabot[bot]", "mik-laj"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b883d8ecc140588b5a6e6c1338a8a0b4b70786688a1db1bba929b197cc07abb/frenck/python-wled"
fundingLinks: ["GITHUB:https://github.com/frenck", "PATREON:https://patreon.com/frenck", "CUSTOM:https://frenck.dev/donate/"]
---

# Python: WLED API Client

Asynchronous Python client for WLED.

## About

This package allows you to control and monitor a WLED device
programmatically. It is mainly created to allow third-party programs to automate
the behavior of WLED.

## Installation

```bash
pip install wled
```

## Usage

```python
import asyncio

from wled import WLED

async def main() -> None:
    """Show example of controlling your WLED device."""
    async with WLED("wled-frenck.local") as led:
        device = await led.update()
        print(device.info.version)

        # Turn strip on, full brightness
        await led.master(on=True, brightness=255)

if __name__ == "__main__":
    asyncio.run(main())
```

### Firmware upgrade release files

`python-wled` can upgrade devices from the official WLED releases, or from your
own GitHub repository if you publish custom WLED builds. This lets vendors,
integrators, and private installations distribute firmware through the same
upgrade flow: the device reports where its firmware lives, `python-wled`
downloads the matching release asset, and the library uploads that file to the
device's `/update` endpoint.

To make a custom GitHub release work with…
