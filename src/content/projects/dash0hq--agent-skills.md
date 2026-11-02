---
repo: "dash0hq/agent-skills"
name: "agent-skills"
description: "OpenTelemetry skills and reference documentation for AI coding assistants - instrumentation patterns, telemetry quality guides, and Dash0 integration "
readmeQualityOk: true
url: "https://github.com/dash0hq/agent-skills"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["ai-skills", "claude-code", "distributed-tracing", "instrumentation", "logs", "mcp", "metrics", "observability", "opentelemetry", "otel"]
stars: 98
forks: 16
openIssues: 2
closedIssues: 82
watchers: 0
contributors: 32
recentReleases: 0
createdAt: "2026-02-24T07:17:47Z"
lastCommitAt: "2026-11-02T13:39:12Z"
lastReleaseAt: "2026-05-01T11:44:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 38
maintainers: ["mmanciop", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af85357678e47ecbba20d9e2a4017e3624b3ef7b43d4e0b5b3a20ecc959e1630/dash0hq/agent-skills"
---

# OpenTelemetry Skills for AI Coding Agents

Vendor-neutral skills that teach AI coding agents how to instrument applications with OpenTelemetry.
Covers SDK setup across languages, semantic conventions, Collector pipelines, and OTTL transformations.
Works with any OTLP-compatible backend.

Skills are packaged instructions and scripts that extend agent capabilities, following the [Agent Skills](https://agentskills.io/) format.
Maintained by [Dash0](https://www.dash0.com).

> [!TIP]
> These skills have been improved using [Tessl](https://tessl.io).
> Try it out for your own agent skills, it's worth it.

## Installation

**Install with [skills](https://skills.sh/) CLI** (universal, works with any [Agent Skills](https://agentskills.io)-compatible tool):

```bash
npx skills add https://github.com/dash0hq/agent-skills --all
# or a single skill:
npx skills add https://github.com/dash0hq/agent-skills --skill otel-semantic-conventions
```

For tool-specific installation instructions (Claude Code, Cursor, Tessl, and others), see [INSTALL.md](https://github.com/dash0hq/agent-skills/blob/HEAD/INSTALL.md).

**Consume programmatically via npm** (for agent runtimes that embed the skills rather…
