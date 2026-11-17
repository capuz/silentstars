---
repo: "fprochazka/claude-code-auth-switch"
name: "claude-code-auth-switch"
description: "Run multiple Claude Code accounts side-by-side with isolated credentials, shared configuration, and zero Docker overhead."
readmeQualityOk: true
url: "https://github.com/fprochazka/claude-code-auth-switch"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-25T11:20:22Z"
lastCommitAt: "2026-11-17T12:16:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 45
maintainers: ["fprochazka"]
openGraphImageUrl: "https://opengraph.githubassets.com/969ae4c1f5c68c40a2bb56340c50520b08178681d0f35f35e6c5a870f520dea9/fprochazka/claude-code-auth-switch"
---

# claude-code-auth-switch

> **Note:** This has only been tested on Linux. Nobody has tested it on macOS or WSL yet. Reading the Claude Code binary suggests that macOS should work, because each profile directory gets its own Keychain entry, but that is not a tested result. Native Windows is not supported. See [macOS and WSL notes](#macos-and-wsl-notes).

Run multiple [Claude Code](https://docs.anthropic.com/en/docs/claude-code) accounts side-by-side with isolated credentials, shared configuration, and zero Docker overhead.

Each profile gets its own `claude-<name>` command on your `$PATH`:

```
claude-personal     # Personal Anthropic subscription (OAuth)
claude-work-team    # Company team subscription (OAuth)
claude-work-vertex  # Company via Google Cloud Vertex AI
```

Run them in parallel across different project directories without credential collisions, file lock conflicts, or billing mix-ups.

## How it works

Claude Code's `CLAUDE_CONFIG_DIR` environment variable redirects all configuration and credential storage to a custom directory. We [verified in the binary](https://github.com/fprochazka/claude-code-auth-switch/blob/HEAD/docs/Binary-Analysis-and-Design-Decisions.md)…
