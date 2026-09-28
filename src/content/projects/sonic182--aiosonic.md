---
repo: "sonic182/aiosonic"
name: "aiosonic"
description: "A very fast Python asyncio http and websockets client"
readmeQualityOk: true
url: "https://github.com/sonic182/aiosonic"
homepage: "https://aiosonic.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["python", "http", "http-client", "asyncio", "websockets"]
stars: 171
forks: 23
openIssues: 0
closedIssues: 50
watchers: 5
contributors: 12
recentReleases: 0
createdAt: "2019-07-17T05:55:24Z"
lastCommitAt: "2026-09-28T10:05:56Z"
lastReleaseAt: "2020-11-21T23:10:56Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 39
maintainers: ["sonic182", "dependabot[bot]", "deathaxe"]
openGraphImageUrl: "https://opengraph.githubassets.com/8db09c274526b45db7b1a41cb8f0c51dbbd7272ebb68fb1e54cec5bcf32725fc/sonic182/aiosonic"
discussionCount: 1
---

# aiosonic - lightweight Python asyncio HTTP/WebSocket client

A very fast, lightweight Python asyncio HTTP/1.1, HTTP/2, and WebSocket client.

The repository is hosted on [GitHub](https://github.com/sonic182/aiosonic).

For full documentation, please see [aiosonic docs](https://aiosonic.readthedocs.io/en/latest/).

## Features

- Keepalive support and smart pool of connections
- Multipart file uploads
- Handling of chunked responses and requests
- Connection timeouts and automatic decompression
- Automatic redirect following
- Fully type-annotated
- WebSocket support
- HTTP proxy support
- Sessions with cookie persistence
- Elegant key/value cookies
- (Nearly) 100% test coverage
- HTTP/2 (enabled with a flag)

## Requirements

- Python >= 3.10 (or PyPy 3.11+)

## Installation

```bash
pip install aiosonic
```

## Getting Started

Below is an example demonstrating basic HTTP client usage:

```python
import asyncio
import aiosonic
import json

async def run():
    client = aiosonic.HTTPClient()

    # Sample GET request
    response = await client.get('https://www.google.com/')
    assert response.status_code == 200
    assert 'Google' in (await response.text())

    # POST data as…
