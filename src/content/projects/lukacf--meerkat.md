---
repo: "lukacf/meerkat"
name: "meerkat"
description: "Meerkat - A modular, high-performance agent harness built in Rust."
readmeQualityOk: true
url: "https://github.com/lukacf/meerkat"
language: "Rust"
languages: ["Rust", "TLA"]
languagePcts: [53, 43]
topics: ["agentic", "ai", "ai-agents", "claude", "claude-code", "cli", "codex", "codex-cli", "gemini", "gemini-cli"]
stars: 20
forks: 5
openIssues: 29
closedIssues: 85
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-22T12:38:43Z"
lastCommitAt: "2026-10-01T10:24:24Z"
lastReleaseAt: "2026-03-15T14:50:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 50
maintainers: ["lukacf"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2363f652e8bf888f2f74431d8e3210b86421c64682b34fea6ed323d5d9476ad/lukacf/meerkat"
---

</p>

<h1 align="center">Meerkat</h1>

<strong>A library-first Rust platform for building, hosting, and operating agents.</strong>
</p>

</p>

</p>

Meerkat provides a shared agent runtime, not a fixed agent user experience.
Its Rust crates own agent execution, typed events, providers, tools,
persistence, runtime control, and multi-agent orchestration. The CLI, REST,
JSON-RPC, MCP, Python, TypeScript, and browser/WASM surfaces use those same
contracts.

## Quick Start

```bash
brew install lukacf/meerkat/rkat
export RKAT_OPENAI_API_KEY="sk-..."
rkat run "What is the capital of France? Answer in one sentence."
```

The Homebrew tap supports macOS and Linux. Other installation paths:

```bash
cargo install rkat
pip install meerkat-sdk
npm install @rkat/sdk
npm install @rkat/web
```

Release archives contain `rkat`, `rkat-rpc`, `rkat-rest`, and
`rkat-mcp`. The Python and TypeScript SDKs resolve and can download a
compatible `rkat-rpc` automatically.

<details>
<summary>Provider environment variables</summary>

| Provider | Resolution order |
|----------|------------------|
| Anthropic | `RKAT_ANTHROPIC_API_KEY`, `ANTHROPIC_API_KEY` |
| Public OpenAI | `RKAT_OPENAI_API_KEY`,…
