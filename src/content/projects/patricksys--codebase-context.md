---
repo: "PatrickSys/codebase-context"
name: "codebase-context"
description: "Codebase Context gives AI agents understanding of your codebase through semantic code search, team conventions, patterns, and memory, so they use fewer tokens, spend less time, and produce better, more familiar output."
readmeQualityOk: true
url: "https://github.com/PatrickSys/codebase-context"
homepage: "https://www.npmjs.com/package/codebase-context"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["ai-coding", "claude", "cursor", "developer-tools", "mcp", "model-context-protocol", "semantic-search", "copilot", "mcp-server", "code-intelligence"]
stars: 68
forks: 12
openIssues: 4
closedIssues: 10
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-11-24T21:32:52Z"
lastCommitAt: "2026-11-06T11:24:18Z"
lastReleaseAt: "2026-03-05T22:33:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 48
maintainers: ["PatrickSys", "aolin480", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae059c87b774a476666782f38083d2dfb1aa7c288a016397aec7342c78db7b70/PatrickSys/codebase-context"
---

# Codebase Context

Local repository maps, code search and symbol references for coding agents. Codebase Context exposes these through MCP and a CLI so an agent can inspect the repository before editing it.

## Published beta: 2.3.1-beta.0 (stable: 2.2.0)

As checked on **4 November 2026**, npm `beta` points to **`2.3.1-beta.0`**, while npm `latest` remains **`2.2.0`**. The beta requires **Node.js 22 or newer**. An unpinned `npx -y codebase-context` may use an already installed local version; without one, it resolves npm `latest` (currently the stable `2.2.0`). To select the published beta explicitly, use `npx -y codebase-context@2.3.1-beta.0 --version`. A source checkout or a local tarball is separate from a verified registry release.

**Fresh beta indexes use keyword search without downloading an embedding or reranker model.** Existing indexes keep their recorded mode. Semantic indexing is an explicit option; its optional runtimes and model downloads are separate from the default path.

### Try the beta or a local build from the terminal

Use an explicitly installed `2.3.1-beta.0`, a built checkout (`pnpm install`, then `pnpm build` in the CBC checkout) or an installed local…
