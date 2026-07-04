---
repo: "Szpadel/codex-mcp-code-review"
name: "codex-mcp-code-review"
description: "Run Codex app-server reviews of uncommitted changes via an MCP tool."
readmeQualityOk: true
url: "https://github.com/Szpadel/codex-mcp-code-review"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-05T20:16:40Z"
lastCommitAt: "2026-07-04T23:12:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 13
maintainers: ["Szpadel"]
openGraphImageUrl: "https://opengraph.githubassets.com/0687694534faa8dd928fda5d130e32b6378fe362a70e5aaf7a9d9b89bd2bf3be/Szpadel/codex-mcp-code-review"
---

# Codex MCP Code Review

Run Codex app-server reviews of uncommitted changes via an MCP tool. Compared to the built-in `/review`, this keeps review context clean while fixes happen in the main session that retains implementation knowledge, reducing regressions and enabling longer autonomous runs with better code quality.

## Requirements

- Codex CLI installed and authenticated.
- uv installed.

## Configure Codex (MCP)

Codex loads MCP servers from `~/.codex/config.toml` and supports configuring them via the `codex mcp` CLI.

### Review profile (recommended)

Profile example (gpt-5.5, medium reasoning effort):

```toml
# ~/.codex/config.toml
[profiles.review]
model = "gpt-5.5"
model_reasoning_effort = "medium"
```

When the MCP server is started with `--profile review`, it reads this profile from
Codex config and applies supported review settings itself. Supported profile keys
are `model`, `model_provider`, `service_tier`, `model_reasoning_effort`, and
`model_reasoning_summary`.

AGENTS.md example instruction:

```text
for verification call `review_uncommitted_changes: runs=1` until no issues
```

### Tool timeout (required)

Set `tool_timeout_sec` for the MCP server in…
