---
repo: "abhayymishraa/webbuilder"
name: "webbuilder"
description: "AI-powered(Lovable clone) React app builder using natural language. Multi-agent system with LangGraph orchestrates code generation in isolated E2B sandboxes. FastAPI backend with WebSocket streaming, Next.js frontend, PostgreSQL storage. Supports OpenAI, Google Gemini, Anthropic & HuggingFace LLMs."
readmeQualityOk: true
url: "https://github.com/abhayymishraa/webbuilder"
homepage: "https://webbuilder.elevenai.xyz"
language: "JavaScript"
languages: ["JavaScript", "Python", "TypeScript"]
languagePcts: [40, 36, 20]
stars: 12
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-23T18:53:54Z"
lastCommitAt: "2026-09-14T09:11:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 63
maintainers: ["abhayymishraa"]
openGraphImageUrl: "https://opengraph.githubassets.com/097f963223118e782f271090947f6e835b702a439b41a766de42efebf8692b83/abhayymishraa/webbuilder"
---

# WebBuilder

Generate and edit React applications with an AI agent. The Next.js frontend uses a
FastAPI backend for authentication, chat history, and WebSocket progress. One bounded
OpenAI coding loop edits files in E2B. The backend runs production-build and browser
checks, allows two targeted repairs, and persists a final outcome. Stop and reconnect
operate on a run independently of its WebSocket connection.

See [orchestration, limits, and verification](https://github.com/abhayymishraa/webbuilder/blob/HEAD/docs/architecture/orchestration.md),
the [original audit](https://github.com/abhayymishraa/webbuilder/blob/HEAD/docs/research/2026-09-12-orchestration-audit.md), and the
[LLM Council decision](https://github.com/abhayymishraa/webbuilder/blob/HEAD/docs/council/council-transcript-2026-09-12-orchestration.md).

Project history retrieval and optional summaries are described in
[context and memory](https://github.com/abhayymishraa/webbuilder/blob/HEAD/docs/context-memory.md). Retrieval uses the existing database;
automatic compaction is disabled pending quality evaluation.

The [runtime skills](https://github.com/abhayymishraa/webbuilder/blob/HEAD/docs/runtime-skills.md) load the…
