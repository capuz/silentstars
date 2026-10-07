---
repo: "typesense/typesense-python"
name: "typesense-python"
description: "Python client for Typesense: https://github.com/typesense/typesense"
readmeQualityOk: true
url: "https://github.com/typesense/typesense-python"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 247
forks: 66
openIssues: 20
closedIssues: 41
watchers: 5
contributors: 26
recentReleases: 0
createdAt: "2018-01-30T20:29:12Z"
lastCommitAt: "2026-10-07T10:31:24Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 38
maintainers: ["tharropoulos", "phanirithvij", "santichausis"]
openGraphImageUrl: "https://opengraph.githubassets.com/620e5ca803d619f14e5d27926e84d8c082351dda28676ce8088885ed6caa50af/typesense/typesense-python"
fundingLinks: ["GITHUB:https://github.com/typesense"]
---

# Typesense Python Client

Python client for the Typesense API: https://github.com/typesense/typesense

## Installation

```
$ pip install typesense
```

You can also add `typesense` to your project's `requirements.txt`.

## Usage

You can find some examples [here](https://github.com/typesense/typesense-python/blob/master/examples/collection_operations.py).

See detailed [API documentation](https://typesense.org/api).

## Async usage

Use `AsyncClient` when working in an async runtime:

```python
import asyncio
import typesense

async def main() -> None:
    client = typesense.AsyncClient({
        "api_key": "abcd",
        "nodes": [{"host": "localhost", "port": "8108", "protocol": "http"}],
        "connection_timeout_seconds": 2,
    })

    print(await client.collections.retrieve())
    await client.api_call.aclose()

if __name__ == "__main__":
    asyncio.run(main())
```

See `examples/async_collection_operations.py` for a fuller async walkthrough.

## Using httpx2

The client sends requests with [httpx](https://www.python-httpx.org/) by default. On Python 3.10+ you can pass an [httpx2](https://github.com/pydantic/httpx2) client instead. httpx2 is Pydantic's maintained…
