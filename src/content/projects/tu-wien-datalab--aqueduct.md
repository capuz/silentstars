---
repo: "TU-Wien-dataLAB/aqueduct"
name: "aqueduct"
description: "Aqueduct is a simple yet fully-featured AI gateway built on top of the LiteLLM Router SDK using Django."
readmeQualityOk: true
url: "https://github.com/TU-Wien-dataLAB/aqueduct"
homepage: "https://tu-wien-datalab.github.io/aqueduct/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["ai-gateway", "api-gateway", "gateway", "llm", "llm-inference", "openai", "openai-proxy"]
stars: 31
forks: 12
openIssues: 47
closedIssues: 74
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2025-03-31T12:47:09Z"
lastCommitAt: "2026-11-11T11:18:56Z"
lastReleaseAt: "2026-06-03T09:08:04Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 86
undervaluedScore: 60
maintainers: ["meffmadd", "JaeYeonLee0621", "natkam"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/957975362/3abd7552-8949-4c82-acca-d6b4e67b3a0b"
---

# Aqueduct AI Gateway

> [!NOTE]
> This project is still in active development! Contributions welcome!

**Aqueduct AI Gateway** aims to provide a **simple yet fully-featured** AI gateway you can self-host with **MCP server support**:

- no [SSO tax](https://konghq.com/pricing)
- no [observability tax](https://www.litellm.ai/enterprise)
- no [self-hosting tax](https://portkey.ai/pricing)
- no [org management tax](https://www.litellm.ai/enterprise)
- etc.

We aim to achieve this by:

- Building on top of the **LiteLLM Router SDK** to provide enhanced control and routing capabilities, while avoiding re-implementing the entire OpenAI-compatible APIs or every new feature, and
- Using **Django** for a clean, efficient, and maintainable implementation.

For more information, please read the [Documentation](https://tu-wien-datalab.github.io/aqueduct/).

If you don't need user self-service, take a look at [Envoy AI Gateway](https://aigateway.envoyproxy.io) instead!

## Quick Start

The recommended way to get Aqueduct running locally is with Docker Compose. This will start the Django app, a PostgreSQL
database, Celery with Redis as the broker, Tika for text extraction from files, and a…
