---
repo: "wmentor/go-magnetar"
name: "go-magnetar"
description: "An AI chat agent (harness) with integrated tools, skills and an optional knowledge base. Chat with any OpenAI-compatible LLM, use built-in integrations (web search, Confluence, JIRA, GitHub, GitLab and more), index documents and web pages into a local vector database (RAG), and get answers grounded in your own content."
readmeQualityOk: true
url: "https://github.com/wmentor/go-magnetar"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai-agent", "ai-assistant", "cli", "golang", "indexer", "llm", "qdrant", "rag", "web-fetch", "ai-tools"]
stars: 20
forks: 18
openIssues: 16
closedIssues: 84
watchers: 0
contributors: 17
recentReleases: 6
createdAt: "2026-06-04T16:19:27Z"
lastCommitAt: "2026-10-24T08:07:36Z"
lastReleaseAt: "2026-10-18T06:20:20Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 61
maintainers: ["wmentor", "spayder", "bercedev"]
openGraphImageUrl: "https://opengraph.githubassets.com/deebed15f9e341b6493d06e6a4ef5f719add438033b1ab0656c6b36bbe15a49f/wmentor/go-magnetar"
discussionCount: 0
---

# go-magnetar

An AI chat agent with an integrated knowledge base and customizable skills. A single standalone binary with everything included — no dependencies to install, no go install needed. Just download, run, and start chatting with any OpenAI-compatible LLM, indexing documents and web pages into a local vector database, and get answers grounded in your own content.

## What it does

- **Chat** — interactive REPL with multi-turn conversation and automatic context compaction
- **Index** — `/index <file|url>` adds documents to your RAG knowledge base (optional)
- **Fetch** — `/fetch <url>` retrieves and displays web content as Markdown
- **Skills** — customize agent behavior with reusable skill files for specialized tasks
- **Integrations** — Confluence, JIRA, GitHub, GitLab (all optional, disabled by default)

Supported file formats: `.md`, `.txt`, `.csv`, `.tsv`, `.docx`, `.pdf`, `.odt`, `.pptx`, `.xlsx`, `.html`

## Requirements

- Go 1.27.2 (or download a pre-built binary)
- API key for any OpenAI-compatible provider (OpenAI, Azure OpenAI, Ollama, etc.)

**Note:** Qdrant is **no longer required**. The default vector store is **Chromem** (built-in, in-memory with optional…
