---
repo: "devoidfury/hotdog"
name: "hotdog"
description: "AI agent with zero dependencies, bring your own bun"
readmeQualityOk: true
url: "https://github.com/devoidfury/hotdog"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agents", "ai-agent", "ai-agents", "coding-agent", "llm", "hotdog-agent", "agent-framework", "ai-coding"]
stars: 23
forks: 7
openIssues: 2
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-31T03:31:50Z"
lastCommitAt: "2026-10-31T09:53:04Z"
lastReleaseAt: "2026-07-24T22:49:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 45
maintainers: ["devoidfury"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a4b6ec0a15e4fb34e0de59b5a968057d1c427de49c29d95bf0e75163c83790a/devoidfury/hotdog"
fundingLinks: ["GITHUB:https://github.com/devoidfury"]
---

# hotdog

**agent harness built for local, open-weight models.** Point it at llama.cpp, llama-swap, vllm, or any OpenAI-compatible endpoint and run your entire agent stack on your own hardware. No cloud, no API bills, no telemetry or data harvesting.

**Zero dependencies** - bring your own [Bun](https://bun.sh) and hotdog will run from source code. No `npm install`, no `node_modules`, no build step, no postinstall hooks. The whole runtime is the TypeScript in this repo. Prefer a package manager? The same source tree is published as [`@read-receipt/hotdog`](https://www.npmjs.com/package/@read-receipt/hotdog) -- still zero dependencies, see [Install from npm](#install-from-npm-optional).  
*More info @ [supply chain rationale](https://github.com/devoidfury/hotdog/blob/HEAD/docs/supply-chain.md).*

## Quick Start

First, get your bun ready - you can snag one here if you don't have one already: [Bun](https://bun.sh)  
(make sure it's version >= 1.4.2)

```sh
git clone https://github.com/devoidfury/hotdog.git && cd hotdog
# initialize your config in the user-wide location hotdog always finds.
# (hotdog never auto-loads a config from the current directory; point
#  HOTDOG_CONFIG_DIR or…
