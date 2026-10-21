---
repo: "klaasnicolaas/python-gridnet"
name: "python-gridnet"
description: "⚡ Asynchronous Python client for Net2Grid devices"
readmeQualityOk: true
url: "https://github.com/klaasnicolaas/python-gridnet"
homepage: "https://www.net2grid.com/hardware"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "client", "api", "local", "async", "hacktoberfest", "energy", "net2grid"]
stars: 8
forks: 1
openIssues: 3
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-10-08T13:22:14Z"
lastCommitAt: "2026-10-21T23:35:34Z"
lastReleaseAt: "2023-02-11T16:14:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 72
maintainers: ["renovate[bot]", "klaasnicolaas"]
openGraphImageUrl: "https://opengraph.githubassets.com/29998c3cb2b26b829e310f28daf633f043da3b5a9b00d817cee842c43803efe1/klaasnicolaas/python-gridnet"
fundingLinks: ["GITHUB:https://github.com/klaasnicolaas", "KO_FI:https://ko-fi.com/klaasnicolaas"]
discussionCount: 9
---

Asynchronous Python client for Net2Grid devices.

## About

A python package with which you can read the data from a [NET2GRID][net2grid] device
via a local api. Net2Grid supplies energy hardware to brands, that can market it as a
white label product.

## Supported SmartBridges

- SBWF3102 ([Pure Energie][pure-energie])

## Installation

```bash
pip install gridnet
```

## Usage

```py
import asyncio

from gridnet import GridNet

async def main():
    """Show example on getting data from your device."""
    async with GridNet(
        host="127.0.0.1",
    ) as client:
        device = await client.device()
        smartbridge = await client.smartbridge()
        print(device)
        print(smartbridge)

if __name__ == "__main__":
    asyncio.run(main())
```

## Data

You can read the following data with this package, the `power flow` entity can also
give a negative value. The `energy` entities are total values of both low and high
tariff together.

### Device

- ID
- Model
- Batch
- Firmware version
- Hardware version
- Manufacturer

### SmartBridge

- Power Flow (W)
- Energy Consumption (kWh)
- Energy Production (kWh)

## Contributing

This is an active open-source project. We…
