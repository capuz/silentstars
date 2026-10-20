---
repo: "alex09x/prod-code"
name: "prod-code"
description: "Remote code intelligence and build server for AI coding agents via MCP: semantic navigation, safe refactoring, builds and tests on remote nodes."
readmeQualityOk: true
url: "https://github.com/alex09x/prod-code"
homepage: "https://prod.codes"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["code-intelligence", "developer-tools", "go", "gopls", "language-server", "lsp", "mcp", "model-context-protocol", "rust", "rust-analyzer"]
stars: 8
forks: 0
openIssues: 9
closedIssues: 594
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-19T03:29:40Z"
lastCommitAt: "2026-10-20T08:49:32Z"
lastReleaseAt: "2026-09-25T03:46:53Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["alex09x"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c83ee6ae84a050867d62cedd6fd9670ce571007b0237dc05a31b77ba0639f81/alex09x/prod-code"
---

# ⚡ `prod-code`
### Remote code intelligence for fleets of coding agents

  Your checkout is mirrored to a gateway that keeps a warm analyzer for it (rust-analyzer in
  process; gopls, clangd, TypeScript, pyright, sourcekit-lsp as children) and runs commands
  there. Agents reach it as MCP tools, editors as a drop-in language server.

---

## Why

A language server was designed for one human typing in one checkout. What runs on a machine
now is a fleet: a resident agent in the main checkout, workers in their own worktrees, each
asking the analyzer the kind of question a human asks once a minute and asking it ten times a
second. Every worktree brings its own analyzer and its own `cargo test`, and they share the
cores with your editor.

`prod-code` moves all of it one hop away. Measured on this repository, with nothing compiled
on the laptop:

| | |
|---|---|
| hover on a warm workspace | 1–4 ms |
| tool call over a persistent session | ~10 ms |
| a one-shot CLI command from the laptop, end to end (`prod-code hover …`) | ~0.1 s |
| `cargo clippy --workspace --all-targets` on a 32-core node, one file changed | 1 s |
| `cargo test --workspace` — 565 tests | 5 min |
| the same without…
