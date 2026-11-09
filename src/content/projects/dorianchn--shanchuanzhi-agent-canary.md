---
repo: "DorianChn/shanchuanzhi-agent-canary"
name: "shanchuanzhi-agent-canary"
description: "Agent Canary 3.0: open-source MCP, SDK, and CLI security toolkit with a guarded execution gateway, decoy signals, local tests, and public acceptance evidence."
readmeQualityOk: true
url: "https://github.com/DorianChn/shanchuanzhi-agent-canary"
homepage: "https://dorianchn.github.io/shanchuanzhi-agent-canary/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [54, 27]
topics: ["agent-security", "ai-agents", "canary", "devtools", "honeypot", "llm-security", "mcp", "prompt-injection", "security", "tripwire"]
stars: 103
forks: 5
openIssues: 11
closedIssues: 50
watchers: 8
contributors: 1
recentReleases: 10
createdAt: "2026-09-12T18:24:42Z"
lastCommitAt: "2026-11-09T11:59:53Z"
lastReleaseAt: "2026-09-13T08:58:21Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine", "under_pressure"]
healthScore: 93
undervaluedScore: 37
maintainers: ["DorianChn"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2b8fa5ad35b3688f04f35fb5fceda26912e00b7946fa78c3b1f6674cc4f4761/DorianChn/shanchuanzhi-agent-canary"
fundingLinks: ["CUSTOM:https://dorianchn.github.io/shanchuanzhi-agent-canary/"]
discussionCount: 3
---

# Agent Canary 3.0

Agent Canary 3.0 is an open-source MCP and SDK security toolkit for AI agents. It provides decoy tools, canary tokens, a guarded execution gateway, local self-tests, and an optional risk-policy console.

**Current mainline:** 3.0.0 · MIT · Node.js 20+

- [GitHub release](https://github.com/DorianChn/shanchuanzhi-agent-canary/releases/tag/v3.0.0)
- [Project website and test results](https://dorianchn.github.io/shanchuanzhi-agent-canary/)
- [Getting started from a pinned source snapshot](https://github.com/DorianChn/shanchuanzhi-agent-canary/blob/HEAD/GETTING_STARTED.md)
- [Chinese documentation](https://github.com/DorianChn/shanchuanzhi-agent-canary/blob/HEAD/README.zh-CN.md)
- [Architecture and acceptance report](https://github.com/DorianChn/shanchuanzhi-agent-canary/blob/HEAD/docs/3.0/FINAL_3_0_ACCEPTANCE.md)
- [Source and issues](https://github.com/DorianChn/shanchuanzhi-agent-canary)

## Install

The npm package is published to GitHub Packages. Configure the @dorianchn scope, then authenticate with a GitHub personal access token (classic) that has read:packages:

```sh
npm config set @dorianchn:registry https://npm.pkg.github.com
npm login --scope=@dorianchn…
