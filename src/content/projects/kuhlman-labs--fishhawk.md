---
repo: "kuhlman-labs/fishhawk"
name: "fishhawk"
description: "The opinionated workflow engine and governance layer for agent-driven software development."
url: "https://github.com/kuhlman-labs/fishhawk"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["ai-agents", "audit", "claude-code", "devops", "governance", "llm", "llmops", "opensource", "sdlc", "workflow"]
stars: 5
forks: 0
openIssues: 84
closedIssues: 757
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-30T14:24:55Z"
lastCommitAt: "2026-07-03T12:39:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 54
maintainers: ["fishhawk-dev[bot]", "kuhlman-labs", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/57544ecffd0df28958e8e89708afd0e93cfa6a2bcc263cdde233a1f404dd3ce4/kuhlman-labs/fishhawk"
discussionCount: 0
---

# fishhawk

The governed, auditable workflow for agent-driven software development.

Agents do the work. Your team approves the work. Fishhawk holds the record.

## Status

Pre-alpha. The v0 build has largely landed, and Fishhawk now develops itself through Fishhawk:

- **Backend control plane (`fishhawkd`)** — REST API, run/stage state machine on Postgres, signed audit log, policy evaluator, approval gating with SLA timeouts, retry semantics, GitHub App webhook receiver. ([`backend/`](backend/README.md))
- **Runner action (`fishhawk/runner`)** — runs the agent (Claude Code or Codex) on the customer's CI, captures the signed trace, and validates the plan against its schema. Published as `kuhlman-labs/fishhawk/runner@runner/vX.Y.Z`; cosign-signed releases with SBOMs. ([`runner/`](runner/README.md))
- **CLI (`fishhawk`)** — `validate`, `run` (start/status/open), `plan`, `audit`, `export`, `doctor`. ([`cli/`](cli/README.md))
- **MCP server (`fishhawk-mcp`)** — exposes run, plan, and audit state to Claude Code (and any MCP client) over the Model Context Protocol; the surface self-hosted runs are driven through. ([`backend/cmd/fishhawk-mcp/`](backend/cmd/fishhawk-mcp))
- **Web UI** —…
