---
repo: "make0-official/brain-oss"
name: "brain-oss"
description: "AI memory for Claude Code, Cursor, Codex, Windsurf, and every MCP agent: one shared, versioned memory in a local MCP server. Offline, no API key."
readmeQualityOk: true
url: "https://github.com/make0-official/brain-oss"
homepage: "https://make0.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-memory", "ai-agents", "ai-memory", "claude", "claude-code", "codex", "coding-agents", "context-engineering", "cursor", "llm-memory"]
stars: 15
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-27T06:46:21Z"
lastCommitAt: "2026-11-23T10:25:22Z"
lastReleaseAt: "2026-11-14T05:55:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 36
maintainers: ["exa-s"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1435355852/cbc25e1d-3ac1-4b57-bf45-05fc444f2821"
---

# Make0 Brain: shared AI memory for every agent

**One AI memory for every agent you use.** Claude Code, Claude Desktop, Cursor, Codex, Windsurf, VS Code, Gemini CLI, Hermes Agent, and OpenClaw all read and write the same memory, and every change is versioned.

A local-first, open-source AI memory server for [MCP](https://modelcontextprotocol.io). After a one-time model download it runs offline with no API key, keeps everything in one SQLite file on your machine, and speaks the same 7 tools as the hosted [Make0](https://make0.ai) Brain. It can also start full: one command imports the sessions 41 coding agents already keep on disk.

[Make0](https://make0.ai) · [SWE-ContextBench results](https://make0.ai/benchmarks/swe-contextbench) · [LongMemEval results](#longmemeval)

```bash
npx @make0-ai/brain init
```

Only using Cursor or VS Code? These buttons add the server to that one app. Run `init` too if you want it to download the models up front and write the custom instruction.

---
