---
repo: "nyroway/nyro"
name: "nyro"
description: "Self-hosted AI Gateway — connect Claude Code, Codex, Gemini CLI and any SDK to any model provider with protocol translation."
readmeQualityOk: true
url: "https://github.com/nyroway/nyro"
language: "Rust"
languages: ["Rust", "TypeScript", "Go"]
languagePcts: [46, 31, 20]
topics: ["ai", "ai-gateway", "ai-proxy", "claude-proxy", "gateway", "gemini-proxy", "llm-gateway", "mcp-gateway", "openai-proxy", "llm-router"]
stars: 177
forks: 27
openIssues: 27
closedIssues: 40
watchers: 0
contributors: 29
recentReleases: 3
createdAt: "2026-02-07T05:47:35Z"
lastCommitAt: "2026-07-07T06:38:35Z"
lastReleaseAt: "2026-04-18T16:16:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 31
maintainers: ["shuaijinchao", "Link2Link", "track23"]
openGraphImageUrl: "https://opengraph.githubassets.com/d65a673df4e52e30a812da30bf76304479b07f6fefd4467eab62cbecf36f1319/nyroway/nyro"
---

</p>

<h2 align="center">Nyro AI Gateway</h2>

  Run your AI coding tools on any model, from any provider.<br>
  One gateway. All protocols. No code changes.
</p>

</p>

---

</p>

---

## What is Nyro?

Nyro is a local AI gateway that sits between your AI tools and model providers. It translates protocol formats on the fly — so Claude Code, Codex CLI, Gemini CLI, OpenCode, and any client using OpenAI / Anthropic / Gemini SDKs can all route through any backend model you choose, without changing a single line of code.

Point your clients at `http://localhost:19530`. Nyro handles the rest.

```
Claude Code · Codex CLI · Gemini CLI · OpenCode
     OpenAI SDK · Anthropic SDK · Gemini SDK
              Any HTTP API Client
                      ↓
              Nyro AI Gateway
            (localhost:19530)
                      ↓
    OpenAI · Anthropic · Google · DeepSeek
    MiniMax · xAI · Zhipu · Ollama · ...
```

Nyro ships as a **desktop app** (macOS / Windows / Linux) and a **standalone server binary** for headless and self-hosted deployments.

---

## Why Nyro?

**Use any model with any tool.** Claude Code expects Anthropic protocol. Codex CLI uses OpenAI Responses API. Gemini CLI…
