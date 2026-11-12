---
repo: "ProjectOpenSea/tool-sdk"
name: "tool-sdk"
description: "SDK to help creators create tools for ERC-8257: Agent Tool Registry"
readmeQualityOk: true
url: "https://github.com/ProjectOpenSea/tool-sdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 26
forks: 17
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-04-24T23:56:30Z"
lastCommitAt: "2026-11-12T05:44:01Z"
lastReleaseAt: "2026-05-08T17:25:44Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 33
maintainers: ["CodySearsOS", "ryanio", "BCLeFevre"]
openGraphImageUrl: "https://opengraph.githubassets.com/289391aac259cc278a0f2a21a1911551d9532696d01f45a738359127d79ed79c/ProjectOpenSea/tool-sdk"
---

# @opensea/tool-sdk

SDK and CLI for building [ERC-8257](https://github.com/ethereum/ERCs/pull/1723) AI agent tools: manifest validation, onchain registration, gating middleware, framework adapters, and project scaffolding.

The onchain side lives in [ProjectOpenSea/tool-registry](https://github.com/ProjectOpenSea/tool-registry), which holds the `ToolRegistry` contract and the example access predicates this SDK reads and writes.

## Quick start

```bash
# 1. Scaffold a new tool project
npx @opensea/tool-sdk init my-tool

# 2. Implement your tool logic
cd my-tool && npm install
# Edit src/handler.ts
# NOTE: If your project sits adjacent to a pnpm workspace, use
# pnpm install --ignore-workspace to prevent pnpm from walking
# up to the parent workspace.

# 3. Deploy
npx vercel  # or wrangler deploy, etc.

# 4. Register onchain
npx @opensea/tool-sdk register \
  --metadata https://my-tool.vercel.app/.well-known/ai-tool/my-tool.json \
  --network base
```

## CLI reference

`npx @opensea/tool-sdk --help` lists the current commands and flags. This section can lag behind it.

Every command that takes `--network` accepts `base` or `mainnet` and defaults to `base`. Commands that sign need…
