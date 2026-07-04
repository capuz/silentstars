---
repo: "aduermael/herm"
name: "herm"
description: "Terminal-native AI coding agent running in containers."
readmeQualityOk: true
url: "https://github.com/aduermael/herm"
homepage: "https://hermagent.com"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["ai", "ai-agents", "coding-agent", "containerization", "sandbox", "terminal"]
stars: 216
forks: 9
openIssues: 13
closedIssues: 0
watchers: 5
contributors: 5
recentReleases: 5
createdAt: "2026-03-03T16:16:24Z"
lastCommitAt: "2026-07-04T22:20:17Z"
lastReleaseAt: "2026-05-26T18:21:01Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 77
undervaluedScore: 26
maintainers: ["aduermael", "gdevillele", "Patel230"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b07b7dbf54c8eeeb0af595681d4d45d8b2a42835dd08584c8366db715c6e6e3/aduermael/herm"
---

# herm

A coding agent CLI that's containerized by default. Every command runs inside a Docker container, nothing touches your host. No approval prompts, no "are you sure?" dialogs. Just let it work.

## Why herm?

**Containerized by default** — The agent runs inside Docker containers with full control: installing packages, editing files, running builds. Your host machine stays untouched. No permission prompts, ever.

**Multi-provider** — Use Anthropic, OpenAI, Gemini, Grok, OpenRouter, Ollama, Azure OpenAI, Vertex AI, or Bedrock. Switch canonical models on the fly while herm resolves the configured deployment.

**Self-building dev environments** — Need Python but it's not installed? herm extends its own container by writing Dockerfiles dynamically. Dev environments are scoped per project (git repo) and survive container restarts — the rebuilt image persists across sessions.

**100% open-source** — Everything is open, including the system prompts. No hidden instructions, no black boxes. Read them, fork them, change them.

## Requirements

- macOS or Linux (arm64 and amd64)
- Docker installed and running for the default container backend
- For CPSL local sandbox mode: native build…
