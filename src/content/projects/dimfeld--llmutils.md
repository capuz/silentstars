---
repo: "dimfeld/llmutils"
name: "llmutils"
description: "Planning tools for managing coding agents"
readmeQualityOk: true
url: "https://github.com/dimfeld/llmutils"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 8
forks: 2
openIssues: 1
closedIssues: 80
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-10T08:28:40Z"
lastCommitAt: "2026-11-25T03:15:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 78
maintainers: ["dimfeld"]
openGraphImageUrl: "https://opengraph.githubassets.com/26f21fa773fa0bebbe70fb10d35619c428dada1f70f2d01269be83546f14ef8b/dimfeld/llmutils"
---

# tim

`tim` is an AI development assistant for turning issues into plans, running agents in isolated workspaces, tracking active sessions in a web UI, and preparing review/PR follow-up work.

## Requirements

`tim` depends on Bun features, including Bun's native SQLite client. It is not a plain Node.js application.

Install the expected local tools:

```bash
brew install oven-sh/bun/bun
bun --version
```

For global CLI installation from this repo, `bun run dev-install` currently uses `pnpm add -g file://...`, so make sure `pnpm` is also available.

Long-running `tim` workflows call an executor such as Claude Code or Codex CLI. Install and authenticate whichever executor your project config uses.

### Recommended Codex configuration

If you use the Codex CLI executor, adding the following entries to your `~/.codex/config.toml` lets Codex run unattended with workspace write access and network enabled, while still routing risky operations through a reviewer subagent:

```toml
sandbox_mode = "workspace-write"
approvals_reviewer = "guardian_subagent"

[sandbox_workspace_write]
network_access = true
writable_roots = [
  # Various global package manager paths
]
```
