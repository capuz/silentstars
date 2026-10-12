---
repo: "koed-labs/koed"
name: "koed"
description: "Open source, automated memory layer that builds as you work."
readmeQualityOk: true
url: "https://github.com/koed-labs/koed"
homepage: "https://koed.ai/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["ai", "codex", "agent-memory", "agentic-ai", "agentic-workflow", "agents", "local-ai", "rag"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 6
createdAt: "2026-05-15T14:54:47Z"
lastCommitAt: "2026-10-12T11:14:59Z"
lastReleaseAt: "2026-09-12T07:43:47Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 59
maintainers: ["Jeddf", "markbkk", "hill399"]
openGraphImageUrl: "https://opengraph.githubassets.com/2623d58ece1b27ead326195bfaa7efa5d0b8bb6f10972a4dce1e4a9b3e863628/koed-labs/koed"
---

## Make your AI remember the work

Koed helps your AI coding tool remember useful context from previous work, so it
can bring back project decisions, debugging history, and other details when you
need them.

## Quickstart

> [!IMPORTANT]
> Codex, Claude Code, and Pi are independently installed supported AI Client
> integrations. Koed core setup does not require any AI Client. Koed does not
> bundle AI Client runtimes or provider credentials; configure each client only
> after core services are ready.

### Requirements

- macOS, Linux, or WSL.
- Node.js and pnpm.
- Homebrew for the source-checkout bundled-local runtime install. Packaged
  Desktop can use packaged native runtime assets; external dependency mode does
  not require Homebrew.
- No AI Client is required for core Koed readiness.
- Optionally, install and authenticate Codex, Claude Code, or Pi before
  explicitly configuring that client. Claude Code requires `2.1.227` or newer;
  Pi requires `0.84.2` or newer. Claude synthesis reuses the local Claude Code
  subscription through the pinned Agent SDK. Pi synthesis reuses Pi-managed
  local authentication through isolated RPC.

If you are on Windows, run Koed inside WSL as…
