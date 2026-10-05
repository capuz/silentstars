---
repo: "zernio-dev/zernio-python"
name: "zernio-python"
description: "Zernio's Official Python SDK"
readmeQualityOk: true
url: "https://github.com/zernio-dev/zernio-python"
homepage: "https://zernio.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 4
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-12-11T17:56:11Z"
lastCommitAt: "2026-10-05T10:46:37Z"
lastReleaseAt: "2026-01-23T10:10:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 71
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aceda5ad61052261c5b16099ced88bc5f3b2a4b1a9845092a1be02c3247ccc5d/zernio-dev/zernio-python"
---

The official Python SDK for the [Zernio API](https://zernio.com) — schedule and publish social media posts across Instagram, TikTok, YouTube, LinkedIn, X/Twitter, Facebook, Pinterest, Threads, Bluesky, Reddit, Snapchat, Telegram, WhatsApp, and Google Business Profile with a single integration.

## Installation

```bash
pip install zernio-sdk
```

## Quick Start

```python
from zernio import Zernio

# Reads ZERNIO_API_KEY from environment (or pass explicitly)
client = Zernio()

# Publish to multiple platforms with one call
post = client.posts.create(
    content="Hello world from Zernio!",
    platforms=[
        {"platform": "twitter", "accountId": "acc_xxx"},
        {"platform": "linkedin", "accountId": "acc_yyy"},
        {"platform": "instagram", "accountId": "acc_zzz"},
    ],
    publish_now=True,
)

print(f"Published to {len(post['post']['platforms'])} platforms!")
```

## Configuration

```python
client = Zernio(
    api_key="your-api-key",  # Or set ZERNIO_API_KEY env var
    base_url="https://zernio.com/api",  # Optional, this is the default
    timeout=30.0,  # Optional, request timeout in seconds
)
```

## Examples

### Schedule a Post

```python
post =…
