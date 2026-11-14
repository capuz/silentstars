---
repo: "perch-code/perch"
name: "perch"
description: "A native app that puts GitHub, a code browser, and Claude/Codex in one window."
readmeQualityOk: true
url: "https://github.com/perch-code/perch"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ai-code-review", "claude-code", "code-review", "codex", "coding-agents", "desktop-app", "developer-tools", "github", "linux", "lsp"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 24
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-09-27T21:01:35Z"
lastCommitAt: "2026-11-14T21:57:36Z"
lastReleaseAt: "2026-11-14T02:44:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["criccomini"]
openGraphImageUrl: "https://opengraph.githubassets.com/84f035827ca053e757d6059b74e82f15a9c8d41f3bef144ab6b86c8c831f3a51/perch-code/perch"
---

# Perch

I got tired of flipping between github.com, VS Code, and Claude/Codex, so I
made Perch to combine them into one native application.

Features:

* Uses `gh`, `claude`, and `codex` CLIs for everything.
* Fully integrated with GitHub's inbox, PRs, and issues.
* Completely browsable codebase for each PR and code review.
* Language server protocol (LSP) support, so you can "find references",
  "open call hierarchy", and so on.
* Threaded GitHub-style conversations with humans and agents.
* Fully integrated client-side Claude/Codex reviews.

## Install

You need:

- A Mac (Apple Silicon or Intel) or Linux (x86_64 or arm64, glibc 2.35+,
  GTK 3), with git
- The [GitHub CLI](https://cli.github.com/), signed in with `gh auth login`
- For agents: [Claude Code](https://claude.com/claude-code) 2.1.223+,
  [Codex CLI](https://github.com/openai/codex) 0.155.1+, and/or
  [Antigravity CLI](https://antigravity.google/docs/cli/reference) (`agy`)
  1.5.5+, signed in

Then install the latest release:

```bash
curl -fsSL https://raw.githubusercontent.com/perch-code/perch/main/install.sh | sh
```

On a Mac, install.sh puts Perch.app in `/Applications`. On Linux, it unpacks Perch
into…
