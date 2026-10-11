---
repo: "andromanpro/1c-ai-connector"
name: "1c-ai-connector"
description: "ИИкона — AI connector for 1С:Предприятие 8.3: LLM providers, agent loop (function calling), RAG, MCP server, error monitoring with AI analysis, diagram generator"
originalDescription: "ИИкона — AI-коннектор для 1С:Предприятие 8.3: LLM-провайдеры, агентская петля (function calling), RAG, MCP-сервер, мониторинг ошибок с ИИ-анализом, генератор диаграмм"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/andromanpro/1c-ai-connector"
homepage: "https://androman.pro"
language: "1C Enterprise"
languages: ["1C Enterprise"]
languagePcts: [100]
topics: ["1c-edt", "1c-enterprise", "ai", "bsl", "claude", "connector", "gemini", "gpt", "integration", "llm"]
stars: 99
forks: 20
openIssues: 0
closedIssues: 1
watchers: 7
contributors: 1
recentReleases: 6
createdAt: "2026-01-06T20:50:20Z"
lastCommitAt: "2026-10-11T10:10:34Z"
lastReleaseAt: "2026-09-23T13:01:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 33
maintainers: ["andromanpro"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4921d3f9b3a352ce75ecaa8b7432d6ddc942ccfefec8f2fd99636f4aedccdad/andromanpro/1c-ai-connector"
discussionCount: 0
---

# ИИкона — AI connector for 1С:Предприятие

> Extension for integrating large language models (LLMs) into 1С:Предприятие 8.3 configurations:
> a unified connector to providers, an agent loop with tools, RAG, an MCP server,
> error monitoring with AI analysis, and a diagram generator.

[ИИкона на Инфостарте — статья и обсуждение](https://infostart.ru/1c/articles/2585691/).

## Release 1.6.3

All 392 previous public signatures of the product and 29 connector signatures are preserved.
The search model for the selected knowledge base is substituted using its saved index.
Qdrant results are read from 1С in a single batch without unpacking vectors: on a test set of 5000 fragments, the median dropped from 40.4 to 22.4 ms compared with 1.6.2.
Embedding generation is not included in these numbers. Fixed numeric counters in Yandex responses, copy handlers, and the triaged product feedback items.

[Changes, installation and verification limits](https://github.com/andromanpro/1c-ai-connector/blob/HEAD/RELEASE_NOTES_1.6.3.md) ·
[Repeat RAG measurement](https://github.com/andromanpro/1c-ai-connector-guide/blob/main/rag/measurements-2026-10-11.md).

## Interface 1.6.2

In the ИИкона section,…
