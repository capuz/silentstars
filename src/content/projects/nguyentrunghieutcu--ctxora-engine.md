---
repo: "nguyentrunghieutcu/ctxora-engine"
name: "ctxora-engine"
description: "CTXORA Engine — Local-first context engine for coding agents. Index once. Ground every agent."
readmeQualityOk: true
url: "https://github.com/nguyentrunghieutcu/ctxora-engine"
homepage: "https://ctxora-landing.vercel.app/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["ai-agents", "claude-code", "codex", "context-engineering", "developer-tools", "mcp", "productivity"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-19T03:56:59Z"
lastCommitAt: "2026-09-07T08:34:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 61
undervaluedScore: 20
maintainers: ["nguyentrunghieutcu"]
openGraphImageUrl: "https://opengraph.githubassets.com/6edf151f5e7ad7e2c5aa826b0fb359da29189b255dd2389671046cec4a861fc4/nguyentrunghieutcu/ctxora-engine"
---

</a>

# CTXORA Engine

### Index once. Ground every agent.

**Local-first context engine for coding agents.**

**English** · [Tiếng Việt](https://github.com/nguyentrunghieutcu/ctxora-engine/blob/HEAD/README.vi.md)

[Website](https://ctxora-landing.vercel.app/) · [Quick start](#quick-start) · [Installation](#installation) · [Agent skills](#agent-skills) · [CLI](#cli-reference) · [MCP](#mcp-tools) · [Security](#privacy-and-security)

</div>

> [!IMPORTANT]
> **Official sources:** use the `ctxora` package on npm or this GitHub repository. The `ctxora-engine` package is not published on PyPI. Third-party packages using the CTXORA name are not maintained or reviewed by this project.

CTXORA Engine builds a reusable, local representation of a repository and supplies the right evidence to Codex, Claude Code, Cursor, GitHub Copilot, or any MCP-compatible agent. Source code, indexes, embeddings, graph data, memory, and handoffs remain on your machine.

## Quick start

```bash
npx ctxora setup --workspace /path/to/your/project
npx ctxora index --workspace /path/to/your/project
npx ctxora explain --workspace /path/to/your/project \
  "Where is authentication implemented?"
```

Expected…
