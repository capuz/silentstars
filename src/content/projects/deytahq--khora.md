---
repo: "DeytaHQ/khora"
name: "khora"
description: "Library for creating knowledge repositories from multi-source data and expose a single query substrate"
readmeQualityOk: true
url: "https://github.com/DeytaHQ/khora"
homepage: "https://docs.deyta.ai/khora"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 93
forks: 1
openIssues: 27
closedIssues: 367
watchers: 1
contributors: 9
recentReleases: 4
createdAt: "2026-01-25T21:29:30Z"
lastCommitAt: "2026-07-13T06:38:23Z"
lastReleaseAt: "2026-04-17T10:18:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 39
maintainers: ["probablyrobot", "filippetrovic", "msrdic"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc2a7cbcc1a4f7b382b8757e84d9871cfb182c1094e4b42c5501ca782d6485a9/DeytaHQ/khora"
discussionCount: 0
---

# Khora

> *"Khora is the receptacle, the space, the matrix in which all things come to be."* - Plato, *Timaeus*

A Python library for creating knowledge repositories that ingest unstructured and structured multi-source data and expose a single query substrate, built for integrating into long-horizon AI agents.

## Quickstart

Two supported stacks. Pick by deployment shape - the public API is identical for both.

```bash
uv add khora              # Docker: PostgreSQL + pgvector + Neo4j
uv add khora[embedded]    # Embedded: SQLite + LanceDB, no external services
```

```python
import asyncio
from khora import Khora, context_text

async def main() -> None:
    async with Khora() as kb:  # reads KHORA_DATABASE_URL / KHORA_NEO4J_URL
        ns = await kb.create_namespace()
        await kb.remember(
            "Marie Curie won the Nobel Prize in Physics in 1903.",
            namespace=ns.namespace_id,
            entity_types=["PERSON", "AWARD"],
            relationship_types=["WON"],
        )
        result = await kb.recall("What did Curie win?", namespace=ns.namespace_id)
        print(context_text(result))

asyncio.run(main())
```

For the Docker stack, set…
