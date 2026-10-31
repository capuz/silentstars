---
repo: "i9wa4/tmux-a2a-postman"
name: "tmux-a2a-postman"
description: "tmux agent-to-agent message delivery daemon."
readmeQualityOk: true
url: "https://github.com/i9wa4/tmux-a2a-postman"
homepage: "https://pkg.go.dev/github.com/i9wa4/tmux-a2a-postman"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["agent-orchestration", "ai-agents", "multi-agent", "tmux"]
stars: 6
forks: 0
openIssues: 29
closedIssues: 531
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-30T18:50:15Z"
lastCommitAt: "2026-10-31T15:58:15Z"
lastReleaseAt: "2026-02-21T01:15:05Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 67
maintainers: ["i9wa4", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e73ef0fc99ddcf9797a34665337a78cfcd49962344577b8c9803773c13fbbb71/i9wa4/tmux-a2a-postman"
---

# tmux-a2a-postman

`tmux-a2a-postman` coordinates local AI coding agents in tmux panes through
private workspace mail files and foreground commands. No resident Postman
process is needed.

Any AI coding agent that can run commands in a tmux pane can use the same
`send-heredoc`, `pop`, `get-status`, and `execute-bash` commands. These four
commands derive workspace identity from the native tmux server, session and
pane, then use a configured `postman.md` for roles and Mermaid edges. They do
not require a running Postman daemon.

## 1. Install and configure

Prerequisites are macOS or Linux, Go, and tmux. Install the binary with:

```sh
go install github.com/i9wa4/tmux-a2a-postman@latest
```

For the development branch, create
`$XDG_CONFIG_HOME/tmux-a2a-postman/postman.md`, or use
`~/.config/tmux-a2a-postman/postman.md` when XDG_CONFIG_HOME is unset.
Each of the four commands also accepts an absolute `--config` or
`--postman-md` path. The default and overrides are independent of the
caller's current directory. A missing, unreadable, or ambiguous topology
fails closed.

This is illustrative configuration syntax, not runtime output:

````markdown
## `edges`

```mermaid
graph LR…
