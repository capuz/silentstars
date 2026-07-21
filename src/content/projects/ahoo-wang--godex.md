---
repo: "Ahoo-Wang/GodeX"
name: "GodeX"
description: "Make every model a CodeX engine through an OpenAI-compatible Responses API gateway"
readmeQualityOk: true
url: "https://github.com/Ahoo-Wang/GodeX"
homepage: "http://godex.ahoo.me/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["claude", "claude-code", "cli", "codex", "llm", "openai"]
stars: 24
forks: 6
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-21T09:14:46Z"
lastCommitAt: "2026-07-21T06:11:50Z"
lastReleaseAt: "2026-05-22T04:43:29Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 42
maintainers: ["Ahoo-Wang", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1245491192/33e95687-87fd-443f-954e-4ca460238455"
---

**Make every model a Codex engine.**

OpenAI-compatible Responses API gateway for Codex, CLI tools and developer agents.

[**English Documentation**](https://godex.ahoo.me/) · [**中文文档**](https://godex.ahoo.me/zh/)
</div>

GodeX lets clients that speak the OpenAI Responses API use providers such as DeepSeek, Xiaomi, MiniMax, and Zhipu through one local server.

## Highlights

- OpenAI-compatible `POST /v1/responses` endpoint with sync and streaming responses.
- `GET /v1/models` aliases so clients can use stable model names while GodeX routes to provider/model targets.
- Built-in bridge providers for DeepSeek, Xiaomi, MiniMax, and Zhipu.
- Provider capability planning for request parameters, tools, `tool_choice`, structured output formats, reasoning, and stream usage.
- Hybrid web search support with provider-native declarations for Zhipu/Xiaomi and GodeX-managed hosted search through the Zhipu Web Search API.
- Responses `previous_response_id` session chains backed by memory or SQLite.
- Trace recording for provider requests, provider responses, stream events, usage, and errors.
- Native Bun runtime, TypeScript source, and compiled platform binaries for releases.

## Built-in…
