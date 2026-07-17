---
repo: "VangelisTech/archetype"
name: "archetype"
description: "An AI-Native ECS Simulation Engine combining the composibility of Pydantic with the distributed processing power of Daft Dataframes and Multi-Modal Big Data storage with LanceDB"
readmeQualityOk: true
url: "https://github.com/VangelisTech/archetype"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["big-data", "daft", "dataframes", "ecs", "lance", "pydantic", "simulation"]
stars: 23
forks: 5
openIssues: 59
closedIssues: 94
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2025-03-29T18:37:46Z"
lastCommitAt: "2026-07-17T05:59:33Z"
lastReleaseAt: "2026-07-17T03:20:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 67
maintainers: ["everettVT"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f34bfac382ef891fc9c601226ddadf378ed305b869c71ef148c296d7e8e68d3/VangelisTech/archetype"
discussionCount: 2
---

# Archetype

Archetype is a dataframe-first ECS runtime for simulations and agent workflows.
Define state with components, transform populations with processors, and keep
each tick as queryable history. Use a fork to continue from an earlier state
without overwriting the original run.

It is built on [Daft](https://www.daft.ai/) and LanceDB. The default Python
entry point is `ArchetypeRuntime`; HTTP services and the CLI use the same
command layer when you need a multi-user host.

## Install

```bash
pip install archetype-ecs
```

For a checkout, install the development environment with `make sync-dev`.

## Run a simulation

```python
import asyncio

from daft import DataFrame, col

from archetype import ArchetypeRuntime, AsyncProcessor, Component

class Position(Component):
    x: float = 0.0
    y: float = 0.0

class Velocity(Component):
    dx: float = 0.0
    dy: float = 0.0

class Move(AsyncProcessor):
    components = (Position, Velocity)

    async def process(self, df: DataFrame, **_) -> DataFrame:
        return df.with_columns(
            {
                "position__x": col("position__x") + col("velocity__dx"),
                "position__y": col("position__y") +…
