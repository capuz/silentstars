---
repo: "vibeke-ai/vibeke"
name: "vibeke"
description: "Run agents in your terminal. Answer from your phone. A workspace for Claude Code, Codex, and other agent CLIs."
readmeQualityOk: true
url: "https://github.com/vibeke-ai/vibeke"
homepage: "https://vibeke.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["agent", "ai", "ai-agents", "ai-agents-platform", "claude-code", "cli", "codex", "coding-agents", "developer-experience", "developer-tool"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-10-06T18:28:11Z"
lastCommitAt: "2026-11-17T14:43:24Z"
lastReleaseAt: "2026-10-10T17:38:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 50
maintainers: ["voldern", "nikodem-wrona"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1407764477/51add0d5-765d-4b59-95f5-2cd312ba4fc6"
discussionCount: 0
---

# Vibeke

**Run agents in your terminal. Answer from your phone.**

Bring Claude Code, Codex, and your other agent CLIs into one workspace.
Run them on your laptop or an SSH host.
Pair your phone to answer supported requests.
Keep using your usual agent commands.

[Install](#install) · [Watch the full tour](https://vibeke.dev/?utm_source=github&utm_medium=readme#tour) · [Documentation](https://vibeke.dev/docs) · [Website](https://vibeke.dev/?utm_source=github&utm_medium=readme)

- **Know which agent needs you.** Keep questions and permission requests in one inbox. Answer through the supported agent integration.
- **Reconnect to work in progress.** Agents keep running after a client disconnect or server restart. A host restart stops the processes.
- **Work across devices.** Use your terminal, the desktop app, or a paired browser. Your host must stay awake and connected.

## Install

The host CLI runs on **macOS 13+** (Apple silicon or Intel) and **Linux** (x86_64 or ARM64).
Install `minisign` first: `brew install minisign` on macOS, or use your Linux package manager.

```sh
curl -fsSL https://vibeke.dev/install.sh | sh
```

The installer verifies the release signature and…
