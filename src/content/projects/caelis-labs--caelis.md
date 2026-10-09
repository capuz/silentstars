---
repo: "caelis-labs/caelis"
name: "caelis"
description: "A local-first multi-agent coding harness that connects model providers and ACP agents, binds them to specialized roles, and coordinates them in a shared session."
readmeQualityOk: true
url: "https://github.com/caelis-labs/caelis"
homepage: "https://caelis.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["acp", "agent-client-protocol", "agent-harness", "ai-agent", "ai-agents", "coding-agent", "multi-agent"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 23
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-14T12:09:51Z"
lastCommitAt: "2026-10-09T10:50:50Z"
lastReleaseAt: "2026-08-30T16:42:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["OnslaughtSnail", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1334142979/ab3cf5f4-7d3b-43e2-977d-5cf77a2b3322"
---

# Caelis

**A collaboration workspace for AI agents.**

[English](https://github.com/caelis-labs/caelis/blob/HEAD/README.md) · [简体中文](https://github.com/caelis-labs/caelis/blob/HEAD/README.zh-CN.md)

Any [ACP-compatible agent](https://agentclientprotocol.com/) can join the same
Caelis collaboration network. The built-in runtime, native collaborators, and
external ACP agents work as **participants** with shared mailbox and messaging
semantics—not just isolated subtasks that report back once.

Use Caelis to explore repositories, implement changes, run tests, and review
work with one agent or several working together. Participants can discover and
message each other, keep their own conversations, and continue working when new
input arrives. You follow their progress and send input from a terminal workspace,
or use Caelis through a one-shot command or ACP client.

The collaboration network is scoped to a local Caelis Session, not a hosted or
cross-Session messaging service. External agents connect through ACP stdio; their
support for injected MCP tools, steering, and history determines which
collaboration features are available.

[Website](https://caelis.dev) ·…
