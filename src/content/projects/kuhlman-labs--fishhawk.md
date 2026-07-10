---
repo: "kuhlman-labs/fishhawk"
name: "fishhawk"
description: "The opinionated workflow engine and governance layer for agent-driven software development."
readmeQualityOk: true
url: "https://github.com/kuhlman-labs/fishhawk"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["ai-agents", "audit", "claude-code", "devops", "governance", "llm", "llmops", "opensource", "sdlc", "workflow"]
stars: 5
forks: 0
openIssues: 94
closedIssues: 842
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-30T14:24:55Z"
lastCommitAt: "2026-07-10T07:02:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 54
maintainers: ["fishhawk-dev[bot]", "dependabot[bot]", "kuhlman-labs"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cee2fe42d944c208d6560d5c896a301ac316361b349acdc476ff583dac27397/kuhlman-labs/fishhawk"
discussionCount: 0
---

# fishhawk

The governed, auditable workflow for agent-driven software development.

Agents do the work. Your team approves the work. Fishhawk holds the record.

## Status

Pre-alpha. The v0 build has largely landed, and Fishhawk now develops itself through Fishhawk:

- **Backend control plane (`fishhawkd`)** — REST API, run/stage state machine on Postgres, signed audit log, policy evaluator, approval gating with SLA timeouts, retry semantics, GitHub App webhook receiver. ([`backend/`](https://github.com/kuhlman-labs/fishhawk/blob/HEAD/backend/README.md))
- **Runner action (`fishhawk/runner`)** — runs the agent (Claude Code or Codex) on the customer's CI, captures the signed trace, and validates the plan against its schema. Published as `kuhlman-labs/fishhawk/runner@runner/vX.Y.Z`; cosign-signed releases with SBOMs. ([`runner/`](https://github.com/kuhlman-labs/fishhawk/blob/HEAD/runner/README.md))
- **CLI (`fishhawk`)** — `validate`, `run` (start/status/open), `plan`, `audit`, `export`, `doctor`. ([`cli/`](https://github.com/kuhlman-labs/fishhawk/blob/HEAD/cli/README.md))
- **MCP server (`fishhawk-mcp`)** — exposes run, plan, and audit state to Claude Code (and any MCP client)…
