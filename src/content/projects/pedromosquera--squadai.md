---
repo: "PedroMosquera/squadai"
name: "squadai"
description: "The agent config you can verify. Declare it once, apply it to seven agent harnesses, fail CI on drift, leaks or overspend."
readmeQualityOk: true
url: "https://github.com/PedroMosquera/squadai"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai-agents", "bubbletea", "claude-code", "cli", "cursor", "developer-tools", "github-copilot", "golang", "homebrew", "mcp"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-12T13:12:51Z"
lastCommitAt: "2026-10-23T08:46:28Z"
lastReleaseAt: "2026-07-06T14:13:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 39
maintainers: ["PedroMosquera"]
openGraphImageUrl: "https://opengraph.githubassets.com/cac685c061d8139efc214a41083bd9b4effe8908e5746c8a689bfbf1e91eb353/PedroMosquera/squadai"
---

# SquadAI

The agent config you can verify. Declare it once, apply it to every harness, and fail CI when it drifts, leaks, or overspends.

---

A repo that uses coding agents carries config for each one: OpenCode, Claude Code, Cursor, Windsurf, VS Code Copilot, Pi and Codex. Each has its own instruction file, MCP file, hooks and skills. The copies drift apart, a token lands in a committed MCP file, a hook runs an unpinned `npx` package, and nobody sees the token bill until it arrives.

SquadAI keeps one declaration in `.squadai/project.json` and writes each harness's native files from it. Then it checks the committed result: drift from the declaration, a security scan of hooks, MCP servers, settings and skills, policy allow-lists, and token budgets enforced inside agent sessions.

---

## Verify in CI

Commit the files `squadai apply` writes, then fail pull requests that drift from `.squadai/project.json` or carry risky agent config:

```yaml
name: squadai
on: pull_request
jobs:
  squadai:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: PedroMosquera/squadai@v0.9.0
        with:
          version: v0.9.0          # squadai release to install…
