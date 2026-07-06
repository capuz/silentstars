---
repo: "metravod/zymi-core"
name: "zymi-core"
description: "Event-sourced agent engine — CLI and Python bindings for auditable AI workflows"
readmeQualityOk: true
url: "https://github.com/metravod/zymi-core"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["agent-framework", "ai-agents", "declarative", "llm", "multi-agent-systems", "python", "rust", "agents", "ai", "generative-ai"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-02T11:46:07Z"
lastCommitAt: "2026-07-06T07:03:33Z"
lastReleaseAt: "2026-05-06T16:05:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 63
maintainers: ["metravod"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1199479145/2d63221c-7879-41fc-a304-5a65857186e7"
discussionCount: 1
---

</p>

<h1 align="center">zymi-core</h1>

</p>

---

## Why zymi-core?

Agent frameworks compete for the *front* of the stack — the loop, the planner, the IDE. zymi owns the **back**: the tools your agent calls.

[`zymi mcp serve`](#zymi-as-an-mcp-server--pipelines-as-tools-for-any-agent) exposes declarative YAML pipelines as MCP tools to any host — Claude Code, Claude Desktop, Cursor, or any framework with an MCP adapter (LangGraph, CrewAI, OpenAI Agents SDK). Unlike a script behind an endpoint, a zymi tool is:

- **Declarative, like dbt.** Agents, pipelines, tools, connectors, approvals — all YAML. The engine validates and runs them as a DAG.
- **Event-sourced.** Every state change is an immutable, hash-chained event. Runs are replayable, resumable, and auditable without extra logging.
- **Boundary-safe — interactively.** Steps emit *intentions* (run shell, write file, call HTTP) that pass through policy + contracts + optional human approval before execution. Over MCP the approval renders as an approve/deny form right in the calling agent's UI; the risky thing doesn't happen until someone says yes.
- **Self-debuggable.** Serve with `--expose-observability` and the agent can…
