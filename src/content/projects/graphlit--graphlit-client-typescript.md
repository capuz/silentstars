---
repo: "graphlit/graphlit-client-typescript"
name: "graphlit-client-typescript"
description: "TypeScript client for Graphlit Platform"
url: "https://github.com/graphlit/graphlit-client-typescript"
homepage: "https://www.graphlit.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["api-client", "chatbot", "copilot", "document-parser", "graphlit", "pdf-to-json", "rag", "api-client-typescript"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-21T02:37:48Z"
lastCommitAt: "2026-06-27T06:24:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 84
maintainers: ["kirk-marple"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0daa082f7937bf42b1114de41f8731c26488c922405d4294351c2019288a920/graphlit/graphlit-client-typescript"
---

# Graphlit TypeScript Client SDK

The official TypeScript/JavaScript SDK for the [Graphlit Platform](https://www.graphlit.com) - build AI-powered applications with knowledge retrieval in minutes.

## 🚀 What is Graphlit?

Graphlit is a cloud platform that handles the complex parts of building AI applications:

- **Ingest any content** - PDFs, websites, audio, video, and more
- **Chat with your data** - Using RAG (Retrieval-Augmented Generation)
- **Extract insights** - Summaries, entities, and metadata
- **Build knowledge graphs** - Automatically connect related information

## What's New

### OpenAI Responses API Support

- **Automatic Responses API Routing** - GPT-5.4 and eligible OpenAI models are automatically routed through the [OpenAI Responses API](https://platform.openai.com/docs/api-reference/responses) for improved intelligence, fewer reasoning tokens, higher cache hit rates, and lower latency. Disable with `useResponsesApi: false` in `StreamAgentOptions`.
- **Reasoning Effort** - Reasoning effort (e.g. `medium`, `high`) is read from the specification's `openAI.reasoningEffort` field and passed through to the Responses API.
- **GPT-5.4 Temperature Handling** -…
