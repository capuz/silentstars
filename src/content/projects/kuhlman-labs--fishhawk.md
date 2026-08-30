---
repo: "kuhlman-labs/fishhawk"
name: "fishhawk"
description: "A governed, auditable workflow engine for an agent-driven software factory."
readmeQualityOk: true
url: "https://github.com/kuhlman-labs/fishhawk"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["ai-agents", "audit", "claude-code", "devops", "governance", "llm", "llmops", "opensource", "sdlc", "workflow"]
stars: 8
forks: 0
openIssues: 375
closedIssues: 1296
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-30T14:24:55Z"
lastCommitAt: "2026-08-30T00:44:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 48
maintainers: ["fishhawk-dev[bot]", "dependabot[bot]", "kuhlman-labs"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd4ee8917c425f6e61fe2ffcd8669088b5c3d202d8f2f84f32874ac0635bcc73/kuhlman-labs/fishhawk"
discussionCount: 0
---

# fishhawk

The governed, auditable workflow for agent-driven software development.

Fishhawk is an opinionated workflow engine for agent-driven software changes: it defines the stages a change moves through (plan → implement → review), enforces policy on what an agent can and cannot do, gates the work behind human approvals, and keeps an immutable, signed audit trail of every plan, approval, and outcome. It is tool-agnostic and agent-agnostic — it is **not** a coding agent, a CI/CD platform, or a general-purpose workflow engine.

Fishhawk develops itself through Fishhawk: since Day 22 of the v0 build (2026-05-21), substantive changes flow through a workflow run defined by [`.fishhawk/workflows.yaml`](https://github.com/kuhlman-labs/fishhawk/blob/HEAD/.fishhawk/workflows.yaml), and the audit log behind that development is published in [`docs/compliance/`](https://github.com/kuhlman-labs/fishhawk/blob/HEAD/docs/compliance/).

> **Status: alpha.** The v0 control plane, runner, CLI, MCP server, and Web UI have landed. See [Documentation](#documentation) for the full component map. Feature PRs are not yet being accepted while the v0 abstractions settle — see…
