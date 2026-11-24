---
repo: "Vit129/agy-plugin-cc"
name: "agy-plugin-cc"
description: "Claude Code plugin for Google's Antigravity (agy) CLI — job tracking, background execution, code review, and a stop-time review gate for Antigravity workflows. Built from scratch by Vit129."
readmeQualityOk: true
url: "https://github.com/Vit129/agy-plugin-cc"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["agy", "antigravity", "antigravity-ide", "claude-code", "claude-code-plugin", "google-antigravity", "google-agy"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-05-27T13:42:32Z"
lastCommitAt: "2026-11-24T14:04:23Z"
lastReleaseAt: "2026-11-24T12:57:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 60
maintainers: ["Vit129", "sambatia", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f05ff5f19c9213cdd561ef1e12d870d0d7556c3676e35998790a714aaf2a311/Vit129/agy-plugin-cc"
---

# agy-plugin-cc

> Unofficial community project. Not affiliated with, sponsored or endorsed by Google. "Antigravity" and "Google" are trademarks of Google LLC.

A Claude Code plugin that integrates **Google's Antigravity (agy) CLI** and **Antigravity IDE** developer tools into Claude Code.

This companion extension follows the same design patterns as [`codex-plugin-cc`](https://github.com/openai/codex-plugin-cc), providing full job tracking, background execution, code review, and a session-aware stop-time review gate for **Google Antigravity** workflows.
The same plugin tree also installs into OpenAI Codex CLI (see [Codex](#codex)); it replaces the separate `agy-plugin-codex` repository, which is no longer developed.

## Prerequisites

The Antigravity CLI must be installed and authenticated before using this plugin.

1. **Install agy CLI:**

   **Mac/Linux:**
   ```bash
   curl -fsSL https://antigravity.google/cli/install.sh | bash
   ```

   **Windows PowerShell:**
   ```powershell
   irm https://antigravity.google/cli/install.ps1 | iex
   ```
