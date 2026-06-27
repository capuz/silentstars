---
repo: "web3infra-foundation/libra"
name: "libra"
description: "Libra is evolving into an AI agent–native version control tools"
url: "https://github.com/web3infra-foundation/libra"
homepage: "https://libra.tools"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["rust", "vcs", "git", "jj", "pijul"]
stars: 74
forks: 161
openIssues: 10
closedIssues: 104
watchers: 2
contributors: 84
recentReleases: 0
createdAt: "2025-09-12T14:23:27Z"
lastCommitAt: "2026-06-27T00:48:02Z"
lastReleaseAt: "2026-03-28T13:40:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 53
maintainers: ["genedna"]
openGraphImageUrl: "https://opengraph.githubassets.com/881528057ed64b416963d5be642bfc26900ac546c24d367619b97f8ce6023bcf/web3infra-foundation/libra"
---

Libra is a partial implementation of a **Git** client, developed in **Rust**. The goal is **not** to build a perfect, 100% feature-complete reimplementation of Git (if you want that, take a look at [gitoxide](https://github.com/Byron/gitoxide)). Instead, Libra is evolving into an **AI agent–native version control system**.

The `libra code` command starts an interactive TUI (with a background web server and an MCP stdio surface) that is designed to be driven collaboratively by AI agents and humans. Libra also ships AI-native subcommands not found in Git: `code-control`, `automation`, `agent`, `usage`, `graph`, `sandbox`, and `publish`.

---

# AI Features

The AI surface is what makes Libra different from a vanilla Git client. The sections below cover where AI data lives, how to drive the AI runtime (`libra code`), which providers are supported, and the Libra-only subcommands that orchestrate the agent.

## AI Data Storage

Libra persists AI threads, runs, tasks, decisions, validation reports, tool-invocation events, patchset snapshots, automation history, captured external-agent sessions, and the live context window into the same repository storage directory that holds Git…
