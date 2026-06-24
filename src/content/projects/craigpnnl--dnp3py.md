---
repo: "craigpnnl/dnp3py"
name: "dnp3py"
description: "Pure Python DNP3 implementation (IEEE 1815-2012)"
url: "https://github.com/craigpnnl/dnp3py"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2025-12-20T02:12:40Z"
lastCommitAt: "2026-06-24T00:19:16Z"
lastReleaseAt: "2026-06-24T00:21:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 49
maintainers: ["craigpnnl", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7965e7ac8aac20a33fddd8c212641708086452f0addd0138a50def3989ec2a5/craigpnnl/dnp3py"
---

# dnp3py

A pure Python implementation of the DNP3 (IEEE 1815-2012) protocol.

## Features

- **Pure Python** - No C/C++ dependencies, works anywhere Python runs
- **Level 2 Subset** - RTU-class functionality for SCADA applications
- **Async I/O** - Built on asyncio for efficient network communication
- **Type Safe** - Full type annotations with strict mypy compliance
- **Well Tested** - Comprehensive test suite with 98%+ code coverage

## Installation

```bash
pip install dnp3py
```

Or with [pixi](https://pixi.sh):

```bash
pixi add dnp3py
```

## Quick Start

### Outstation (Server)

```python
import asyncio
from dnp3.database import Database, BinaryInputConfig, AnalogInputConfig
from dnp3.outstation import Outstation
from dnp3.transport_io import TcpServer

async def main():
    # Create database with points
    database = Database()
    database.add_binary_input(0, BinaryInputConfig())
    database.add_analog_input(0, AnalogInputConfig())

    # Update values
    database.update_binary_input(0, value=True)
    database.update_analog_input(0, value=25.5)

    # Create outstation
    outstation = Outstation(database=database)

    # Start TCP server
    server =…
