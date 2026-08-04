---
repo: "ushironoko/octorus"
name: "octorus"
description: "Review GitHub PRs and local diff in your terminal, with AI-powered automated review & fix cycles"
readmeQualityOk: true
url: "https://github.com/ushironoko/octorus"
homepage: "https://crates.io/crates/octorus"
language: "C"
languages: ["C", "Rust"]
languagePcts: [51, 48]
stars: 220
forks: 14
openIssues: 2
closedIssues: 18
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-01-20T05:44:19Z"
lastCommitAt: "2026-08-04T06:11:04Z"
lastReleaseAt: "2026-01-26T09:35:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 30
maintainers: ["ushironoko", "taspelund", "dacuna-ic"]
openGraphImageUrl: "https://opengraph.githubassets.com/5eb83e036a79f0c09b60bc277abaac063ac174a58c63d1bbab325ee416ede143/ushironoko/octorus"
---

# octorus

</p>

High-performance code review in your terminal for GitHub PRs, issues, local diffs, CI status, and Git operations. Includes an integrated AI-powered review cycle.

## Key Features
- **Fast and smooth**: Handles 1,000,000+ diff lines and 6,000+ files
- **Multifunctional**: Repository browsing, PR review, issue view, local diff view, CI status, and Git operations are integrated into one system with search, filters, comments, suggestions, and more.
- **Code intelligence without an LSP**: tree-sitter symbol index powers file outlines, repository-wide symbol search, and Go to Definition — no language server to install, nothing to configure
- **Automatic Review and Code Fix**: Automated review and fix workflows for Claude and Codex, while keeping the process under your control
- **Customization**: Customize all settings, including keybindings, themes, and agent prompts

## Requirements

- [GitHub CLI (gh)](https://cli.github.com/) - Must be installed and authenticated
- Rust 1.95+ (for building from source)
- **For AI Rally feature** (optional, choose one or both):
  - [Claude Code](https://claude.ai/code) - Anthropic's CLI tool
  - [OpenAI Codex…
