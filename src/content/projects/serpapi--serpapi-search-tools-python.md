---
repo: "serpapi/serpapi-search-tools-python"
name: "serpapi-search-tools-python"
description: "Real-time web search tools for Python agents, powered by SerpApi with native support for popular agent SDKs."
readmeQualityOk: true
url: "https://github.com/serpapi/serpapi-search-tools-python"
homepage: "https://serpapi.github.io/serpapi-search-tools-python/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2026-07-17T07:29:10Z"
lastCommitAt: "2026-11-12T05:37:13Z"
lastReleaseAt: "2026-11-10T12:10:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 28
maintainers: ["adarshdigievo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/de8674b242fd77ae29c04ad7fc683498ed200b0e912ef7eb5e17172bb3fec53c/serpapi/serpapi-search-tools-python"
---

# SerpApi Search Tools

Give Python AI agents live web, news, maps, image, shopping, video, hotel, and flight search with easy-to-use, customizable tools.

[Read the full documentation](https://serpapi.github.io/serpapi-search-tools-python/) for guides, SDK examples, recipes, and the API reference.

The package creates native [SerpApi](https://serpapi.com) tools for popular Python agent SDKs:

```python
from serpapi_search_tools import maps_search, news_search, web_search

tools = [
    web_search(),
    news_search(),
    maps_search(),
]
```

When one supported agent SDK is installed, the package detects it and creates tools ready for that SDK.

## Install

If your agent SDK is already installed, add only the base package:

```bash
pip install serpapi-search-tools
```

If you want this package to install a compatible agent SDK too, choose its extra. For example:

```bash
pip install "serpapi-search-tools[openai-agents]"
```

Extras are available for all supported SDKs listed below. Install CrewAI and Google ADK in separate virtual environments because they require different versions of OpenTelemetry.

Set a SerpApi key:

```bash
export SERPAPI_API_KEY="your-key"
```…
