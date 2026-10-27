---
repo: "RuriMeiko/whalegate"
name: "whalegate"
description: "🐳 whalegate — OpenAI-compatible gateway into DeepSeek web sessions (Rust): account pool, failover, SSE, native-style tool calling (tool_choice, schema validation, repair retries), vision, PoW solver. Prefer the official paid API."
readmeQualityOk: true
url: "https://github.com/RuriMeiko/whalegate"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["api", "axum", "cdp", "deepseek", "llm", "openai-compatible", "proxy", "rust", "self-hosted", "tool-calling"]
stars: 24
forks: 21
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-23T16:56:53Z"
lastCommitAt: "2026-10-27T09:16:07Z"
lastReleaseAt: "2026-10-25T15:13:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 70
undervaluedScore: 41
maintainers: ["RuriMeiko"]
openGraphImageUrl: "https://opengraph.githubassets.com/9199858f48f023c2cc4c71acbaa9d77c0b65d698bcdc71f4e738d68b57534dc9/RuriMeiko/whalegate"
---

**whalegate** turns your own `chat.deepseek.com` web sessions into a standard OpenAI-style `/v1/chat/completions` endpoint. It pools several accounts, fails over between them, streams over SSE, reads images, and translates OpenAI `tools` to and from DeepSeek's DSML format. Agents like Cline, Continue, LiteLLM, the OpenAI SDKs and `dsh` can use it as if it were the real API.

> [!WARNING]
> **Use the official API for real work.** [platform.deepseek.com](https://platform.deepseek.com/) is cheap, has an SLA, and doesn't risk your account. whalegate exists for learning, protocol research and personal automation on **your own** account. Automating the web app may violate DeepSeek's Terms of Service and get the account locked. Don't resell or share access. You use it at your own risk ([MIT](https://github.com/RuriMeiko/whalegate/blob/HEAD/LICENSE), no warranty).

---

## Contents

- [Features](#features)
- [How it works](#how-it-works)
- [Quick start](#quick-start)
- [Adding accounts](#adding-accounts)
- [Using the API](#using-the-api)
- [Tool calling](#tool-calling)
- [Images (vision)](#images-vision)
- [Reasoning effort](#reasoning-effort)
- [Stateful…
