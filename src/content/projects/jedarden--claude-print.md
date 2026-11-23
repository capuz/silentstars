---
repo: "jedarden/claude-print"
name: "claude-print"
description: "Drop-in replacement for claude -p that drives the interactive TUI via PTY, preserving subscription billing"
readmeQualityOk: true
url: "https://github.com/jedarden/claude-print"
homepage: "https://jedarden.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["billing", "claude-code", "cli", "headless", "pty", "rust"]
stars: 5
forks: 0
openIssues: 17
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-06-07T19:38:31Z"
lastCommitAt: "2026-11-23T13:20:51Z"
lastReleaseAt: "2026-11-11T07:04:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 69
undervaluedScore: 51
maintainers: ["jedarden"]
openGraphImageUrl: "https://opengraph.githubassets.com/1aadce3cc2c78060f014fa828239a9b6b6bcba7329908c471cd5864d3788f20c/jedarden/claude-print"
---

# claude-print

Drop-in replacement for `claude -p` (print/headless mode) that drives the Claude Code interactive TUI via PTY — keeping sessions on the unlimited subscription pool rather than the per-token Agent SDK credit pool.

## Why this exists

Anthropic routes `claude -p` (headless/SDK mode) through a separate Agent SDK credit pool ($100–$200/month on Max plans). Only the interactive TUI (`cc_entrypoint=cli`) draws from the unlimited subscription.

The billing path is determined by an `isatty` check inside the `claude` binary: when stdout is a TTY, the session is tagged `cc_entrypoint=cli` and billed against the subscription. When stdout is a pipe (as with `claude -p`), it becomes `cc_entrypoint=sdk-cli` and draws from the credit pool instead.

`claude-print` allocates a PTY, drives the interactive TUI over it, auto-dismisses the trust dialog, injects the user prompt via bracketed paste, waits for the Stop hook via a FIFO, reads the JSONL transcript, and emits clean stdout output — giving callers `claude -p` wire-compatible output while billing against the subscription.
