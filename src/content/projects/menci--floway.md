---
repo: "Menci/Floway"
name: "Floway"
description: "Serverless LLM API gateway with telemetry, full protocol translation and Stateful Responses support. Use any LLM from any client and get OpenAI/Anthropic 1P-like experience of Codex/Claude on 3P API providers!"
readmeQualityOk: true
url: "https://github.com/Menci/Floway"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 57
forks: 25
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2026-03-09T11:22:54Z"
lastCommitAt: "2026-07-19T06:12:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 38
maintainers: ["Menci", "yyyr-p", "M1k0t0"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1d783a8a383cb29881b86435afa1b84ce94927709a9254163d9047d999cff99/Menci/Floway"
---

# Floway

Floway is an LLM API gateway that fronts multiple model upstreams behind one
set of standard APIs. Point a coding agent at Floway and it can use a
GitHub Copilot account, a ChatGPT subscription via Codex CLI, a Claude.ai
Pro / Max subscription via Claude Code CLI, a custom OpenAI- or
Anthropic-compatible provider, an Azure deployment, or an Ollama server
(ollama.com or self-hosted) through whichever API shape the agent already
speaks.
Cloudflare Workers is the production deployment target; a Node.js deployment
target ships in the same repo for self-hosting on a long-lived process.

## Client APIs

| Source API                              | Path                          |
| --------------------------------------- | ----------------------------- |
| OpenAI Completions                      | `POST /v1/completions`        |
| Anthropic Messages                      | `POST /v1/messages`, `POST /v1/messages/count_tokens` |
| OpenAI Responses                        | `POST /v1/responses`, `POST /v1/responses/compact`, `GET /v1/responses` WebSocket |
| OpenAI Chat Completions                 | `POST /v1/chat/completions`   |
| OpenAI Embeddings                       | `POST…
