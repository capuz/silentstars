---
repo: "justserpapi/justserpapi-python"
name: "justserpapi-python"
description: "Python SDK for JustSerpAPI Google APIs: Google Search, News, Images, Videos, Maps, Trends, Scholar, Finance, Hotels, Shopping, Jobs, Lens, Patents, Autocomplete, AI Overview, AI Mode, Local, Shorts, and more — ideal for SERP data extraction, SEO, monitoring, and automation."
readmeQualityOk: true
url: "https://github.com/justserpapi/justserpapi-python"
homepage: "https://justserpapi.com/?utm_source=github.com&utm_medium=referral&utm_campaign=justserpapi_justserpapi_python&utm_content=repo_about_link"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["google-images-api", "google-news-api", "google-search-api", "google-serp", "serp", "serp-api", "google-videos-api", "google-maps-api", "google-trends-api", "google-scholar-api"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-02-24T10:33:11Z"
lastCommitAt: "2026-08-24T04:21:55Z"
lastReleaseAt: "2026-06-05T13:21:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 56
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a06014ffa95cb1b80977236664d7d93cda49e7cbc4b1bc9d9ed9e1566ad17831/justserpapi/justserpapi-python"
---

</a>
</p>

<h1 align="center">JustSerpAPI Python SDK</h1>

  </a>
  </a>
  </a>
  </a>
</p>

OpenAPI-driven Python SDK for [JustSerpAPI](https://justserpapi.com/?utm_source=github.com&utm_medium=referral&utm_campaign=justserpapi_justserpapi_python&utm_content=repo_readme) with a stable high-level `Client` as the public entrypoint.

## Platform Overview

The documentation center helps you browse endpoint health, versioned API paths, request parameters, and SERP-specific usage notes.

The console provides API key management, subscription status, credit visibility, request logs, usage trends, and credit consumption analytics.

## Installation

```bash
pip install justserpapi
```

## Quick Start

```python
from justserpapi import Client

with Client(api_key="YOUR_API_KEY") as client:
    response = client.google.search(
        query="coffee shops in New York",
        location="New York, NY",
        language="en",
    )
    print(response)
    print(response["data"])
```

## Generated High-Level API

The high-level surface is generated from OpenAPI and designed to be the default entrypoint:

```python
from justserpapi import Client

client = Client(api_key="YOUR_API_KEY",…
