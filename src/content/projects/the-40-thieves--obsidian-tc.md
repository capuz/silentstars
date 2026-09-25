---
repo: "The-40-Thieves/obsidian-tc"
name: "obsidian-tc"
description: "Obsidian Turbocharged — governed, agent-ready Obsidian MCP server. 163 tools across 31 domains, multi-vault native, pluggable embeddings. TypeScript + Rust. AGPL-3.0-only."
readmeQualityOk: true
url: "https://github.com/The-40-Thieves/obsidian-tc"
homepage: "https://github.com/The-40-Thieves/obsidian-tc/wiki"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai-agents", "mcp", "model-context-protocol", "obsidian", "obsidian-md", "rust", "typescript", "knowledge-base", "mcp-server", "obsidian-plugin"]
stars: 5
forks: 1
openIssues: 2
closedIssues: 45
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-05-18T22:15:05Z"
lastCommitAt: "2026-09-25T09:01:39Z"
lastReleaseAt: "2026-07-14T03:09:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 71
maintainers: ["suavecito585"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fd73d8741b067ea45f901cda09a8360c113d706eb6a06915cefa0cf9913d723/The-40-Thieves/obsidian-tc"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/suavecito585"]
---

# obsidian-tc

> Obsidian Turbocharged — governed, agent-ready vault access over MCP.

## What it is

obsidian-tc is a governed, agent-ready [Model Context Protocol](https://modelcontextprotocol.io)
server for [Obsidian](https://obsidian.md) vaults, for humans and autonomous agents alike. Instead
of raw filesystem access to years of notes, every tool call runs through one pipeline — auth,
folder ACLs, a read-only kill switch, human-in-the-loop confirmation on destructive operations, and
an audit log. It also adds fused retrieval (full-text, vector, graph) and a memory tier — episodes,
activation decay, explicit forgetting — living *inside* your vault under that same ACL.
**163 tools across 31 domains**, via a 3-tool facade. Pitch: [docs/WHY.md](https://github.com/The-40-Thieves/obsidian-tc/blob/HEAD/docs/WHY.md).

## 60-second start

No install:

```sh
npx obsidian-tc /path/to/vault
```

Lexical search and every note tool work immediately. Semantic/graph retrieval need an embeddings
backend (local [Ollama](https://ollama.com) by default) — see
[When NOT to use](#when-not-to-use-obsidian-tc) below.

For multi-vault, auth, or ACLs, use a config file:

```bash
npm install -g…
