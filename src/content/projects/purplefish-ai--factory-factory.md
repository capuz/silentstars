---
repo: "purplefish-ai/factory-factory"
name: "factory-factory"
description: "Workspace-based coding environment for running multiple Claude Code and Codex sessions in parallel."
readmeQualityOk: true
url: "https://github.com/purplefish-ai/factory-factory"
homepage: "https://factoryfactory.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agents", "claude-code", "coding", "ide", "codex", "acp"]
stars: 53
forks: 9
openIssues: 22
closedIssues: 798
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-01-23T21:51:12Z"
lastCommitAt: "2026-11-05T00:22:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 48
maintainers: ["martin-purplefish", "detail-app[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1140879809/d6973514-20eb-4051-aab9-ed5921bf7664"
discussionCount: 1
---

Turn issues into branches, steer multiple agents, review changes, and keep pull requests moving from one local command center.

Factory Factory is a local workspace manager for AI coding agents. Every
workspace gets its own git worktree and branch, so agents can work on separate
tasks without stepping on each other. The UI brings chat, diffs, files,
terminals, issues, and pull request status together in one place.

## Quick start

You will need:

- Node.js 26.12.1+ for the CLI and development (pinned in `.node-version`); the
  desktop app uses Electron 45.0's bundled Node.js 24.22 runtime
- macOS 13 (Ventura) or newer for the macOS desktop app
- A local git repository
- At least one agent provider:
  - Claude (runtime included), authenticated through the setup terminal in
    Settings or with `pnpm dlx factory-factory@latest claude auth login`
  - A ChatGPT/Codex account configured for Codex sessions
- The authenticated [GitHub CLI](https://cli.github.com/) for GitHub issues and
  pull requests

Start Factory Factory without installing it:

```bash
npx factory-factory@latest serve
```

Before starting, `ff serve` checks the Node.js version, Git, and the files
needed for the…
