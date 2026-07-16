---
repo: "Bharath-code/snip"
name: "snip"
description: "A lightweight, cross-platform CLI for saving, searching, sharing, and running reusable code and shell snippets. Built for developers who live in the terminal."
readmeQualityOk: true
url: "https://github.com/Bharath-code/snip"
homepage: "https://bharath-code.github.io/snip/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["cli", "productivity", "tui"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-14T12:06:12Z"
lastCommitAt: "2026-07-16T06:04:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 22
maintainers: ["Bharath-code"]
openGraphImageUrl: "https://opengraph.githubassets.com/7139812f2d489bbb786efdffecfefb451044468f8db70bf813eea8f3cbd986b4/Bharath-code/snip"
discussionCount: 1
---

<h1 align="center">snip</h1>

  <strong>The snippet manager for AI agents.</strong><br>
  Your AI agent shouldn't guess your production commands.<br>
  snip gives Claude Code, Cursor, and any MCP client a verified, safety-checked command library.
</p>

</p>

</p>

---

## Why snip?

AI coding agents are great at writing code and terrible at knowing *your* commands — the exact deploy script, the migration incantation, the `kubectl` flags your team actually uses. Left alone, they guess. Guessing at production commands is how incidents happen.

snip is the layer between your agent and your shell:

- **Verified** — agents pull from a curated library you (or your team) wrote, not from a hallucination.
- **Safety-checked** — execution is dry-run by default; destructive patterns (`rm -rf`, `curl | bash`, fork bombs…) are hard-blocked.
- **Team-shareable** — commit `.snip/snippets.json` to your repo and every teammate's agent uses the same code-reviewed commands.
- **Still a great human CLI** — fuzzy search, TUI, templates, multi-language execution. See [The human CLI](#the-human-cli).

## Quick Start for AI Agents

```bash
# Install
npm install -g snip-manager

# Wire it into your AI…
