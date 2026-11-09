---
repo: "wmentor/go-magnetar"
name: "go-magnetar"
description: "An AI chat agent (harness) with integrated tools, skills and an optional knowledge base. Chat with any OpenAI-compatible LLM, use built-in integrations (web search, Confluence, JIRA, GitHub, GitLab and more), index documents and web pages into a local vector database (RAG), and get answers grounded in your own content."
readmeQualityOk: true
url: "https://github.com/wmentor/go-magnetar"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai-agent", "ai-assistant", "cli", "golang", "indexer", "llm", "qdrant", "rag", "ai-tools", "confluence"]
stars: 27
forks: 24
openIssues: 14
closedIssues: 113
watchers: 1
contributors: 24
recentReleases: 9
createdAt: "2026-06-04T16:19:27Z"
lastCommitAt: "2026-11-09T04:35:38Z"
lastReleaseAt: "2026-11-08T07:51:45Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 98
undervaluedScore: 57
maintainers: ["wmentor", "duongynhi000005-oss", "Vamsi-2581"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c52f4ea81a9bacb759ee7bd5a4cbdf289ed470d60263493b4ff52194ac06673/wmentor/go-magnetar"
discussionCount: 0
---

# go-magnetar

An AI chat agent with an integrated knowledge base and customizable skills. A single standalone binary with everything included — no dependencies to install, no go install needed. Just download, run, and start chatting with any OpenAI-compatible LLM, indexing documents and web pages into a local vector database, and get answers grounded in your own content.

## What it does

- **Chat** — interactive REPL with multi-turn conversation and automatic context compaction
- **Index** — `/index <file|url>` adds documents to your RAG knowledge base (optional)
- **Fetch** — `/fetch <url>` retrieves and displays web content as Markdown
- **Skills** — customize agent behavior with reusable skill files for specialized tasks
- **Subagents** — spawn specialized agents for complex tasks (exploration, research, parallel work)
- **Integrations** — Confluence, JIRA, GitHub, GitLab (all optional, disabled by default)

Supported file formats: `.md`, `.txt`, `.csv`, `.tsv`, `.docx`, `.pdf`, `.pages`, `.odt`, `.pptx`, `.xlsx`, `.html`, `.eml`.

For a complete list of supported formats and their available modes, see…
