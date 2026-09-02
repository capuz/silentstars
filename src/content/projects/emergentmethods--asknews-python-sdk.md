---
repo: "emergentmethods/asknews-python-sdk"
name: "asknews-python-sdk"
description: "Infusing news into any LLM with a single line of code"
readmeQualityOk: true
url: "https://github.com/emergentmethods/asknews-python-sdk"
homepage: "https://docs.asknews.app"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["llm", "news", "newsapi", "nlp", "rag"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2024-05-11T09:23:01Z"
lastCommitAt: "2026-09-02T08:04:15Z"
lastReleaseAt: "2024-05-31T20:54:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 70
maintainers: ["robcaulk", "th0rntwig", "wagnercosta"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcab35054019178e55b549dac457206fc71fee9978c1d01c604d38b7420e3cd8/emergentmethods/asknews-python-sdk"
---

# AskNews Python SDK

Python SDK for the AskNews API.

## Installation

```bash
pip install asknews
```

## Usage

```python
from asknews_sdk import AskNewsSDK

ask = AskNewsSDK(
    api_key="<YOUR API KEY>"
    scopes=["news", "chat", "stories", "analytics"]
)

query = "Effect of fed policy on tech sector"

# prompt-optimized string ready to go for any LLM:
news_context = ask.news.search_news(query).as_string
```

And you will have a prompt-optimized string ready to go for any LLM. The API doesn't stop there, explore a wide range of endpoints:

- /stories, high level event tracking and state of the art article clustering
- /forecasts, industry leading forecasting on any real-time event
- /analytics, time-series data on finance and politics
- /deepnews, a deep research agent that can explore the new knowledge graph, X, Reddit, Google, Wikipedia and more to build forecasts, reports, analytics, and anything else your system may need.
- /graph, build any news knowledge graph imaginable from the largest news graph on the planet
- /websearch, search the web and get back an LLM distillation of all the relevant web pages

Find full details at the [AskNews API…
