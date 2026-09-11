---
repo: "GrayCodeAI/hawk"
name: "hawk"
description: "Sandbox AI coding agent for your terminal — reads code, edits files, runs tests, manages git. Model-agnostic, privacy-first."
readmeQualityOk: true
url: "https://github.com/GrayCodeAI/hawk"
homepage: "https://graycodeai.com/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai", "cli", "code-review", "coding-agent", "developer-tools", "go", "llm", "mcp", "productivity", "terminal"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-04-30T05:33:47Z"
lastCommitAt: "2026-09-11T08:15:16Z"
lastReleaseAt: "2026-07-13T10:52:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["Patel230"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fb2f10d199e544710789329da63342e6fb8d79b2f7b2144abf613687ee40d94/GrayCodeAI/hawk"
---

<h1 align="center">AI Coding Agent for Your Terminal</h1>

  AI coding agent for your terminal — built for <strong>developers</strong>, not teams or enterprises (yet).
</p>

</p>

</p>

---

## Why hawk

hawk is an AI-powered coding agent that lives in your terminal. It reads your codebase, writes and edits files, runs tests, and manages git — all through natural language. Unlike IDE-bound tools, hawk works over SSH, in containers, and on any machine with a shell.

**Developer path:** one machine, keychain credentials, local memory. Run `hawk path` to check readiness.

- **Model-agnostic** — supports many first-class providers through [eyrie](https://github.com/GrayCodeAI/eyrie) (the exact count is dynamic — see `hawk --help`), including Anthropic, OpenAI, Gemini, Fireworks AI, Concentrate AI (pay-as-you-go), DeepSeek, and Ollama
- **Zero CGO** — single static binary, cross-compiled for linux/darwin/windows on amd64/arm64
- **Privacy-first** — your code never leaves your machine except to the LLM API you choose
- **Docker-only execution** — agent commands run in an isolated container and
  fail closed when Docker is unavailable
- **Extensible** — 40+ built-in tools, MCP server…
