---
repo: "UiPath/uipath-langchain-python"
name: "uipath-langchain-python"
description: "Python SDK that enables developers to build and deploy LangGraph agents to the UiPath Cloud Platform"
readmeQualityOk: true
url: "https://github.com/UiPath/uipath-langchain-python"
homepage: "https://uipath.github.io/uipath-python/langchain/quick_start/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["langchain", "langgraph", "uipath", "python"]
stars: 74
forks: 35
openIssues: 21
closedIssues: 33
watchers: 6
contributors: 110
recentReleases: 0
createdAt: "2025-04-07T04:51:00Z"
lastCommitAt: "2026-11-23T09:28:58Z"
lastReleaseAt: "2026-04-23T11:30:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 52
maintainers: ["apetraru-uipath", "radu-mocanu", "ionut-mihalache-uipath"]
openGraphImageUrl: "https://opengraph.githubassets.com/6721889340ce7e2d82803b7f16e4ab22c02288c132da3cea49123ebbff482a54/UiPath/uipath-langchain-python"
---

# UiPath LangChain Python SDK

A Python SDK that enables developers to build and deploy LangGraph agents to the UiPath Cloud Platform. It provides programmatic interaction with UiPath Cloud Platform services and human-in-the-loop (HITL) semantics through Action Center integration.

This package is an extension to the [UiPath Python SDK](https://github.com/UiPath/uipath-python) and implements the [UiPath Runtime Protocol](https://github.com/UiPath/uipath-runtime-python).

This [quickstart guide](https://uipath.github.io/uipath-python/) walks you through deploying your first agent to UiPath Cloud Platform.

Check out these [sample projects](https://github.com/UiPath/uipath-langchain-python/tree/main/samples) to see the SDK in action.

## Requirements

-   Python 3.11 or higher
-   UiPath Automation Cloud account

## Installation

```bash
pip install uipath-langchain
```

using `uv`:

```bash
uv add uipath-langchain
```

## Configuration

### Environment Variables

Create a `.env` file in your project root with the following variables:

```
UIPATH_URL=https://cloud.uipath.com/ACCOUNT_NAME/TENANT_NAME
UIPATH_ACCESS_TOKEN=YOUR_TOKEN_HERE
```
