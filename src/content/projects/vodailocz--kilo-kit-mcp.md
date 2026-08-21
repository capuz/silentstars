---
repo: "VoDaiLocz/kilo-kit-mcp"
name: "kilo-kit-mcp"
description: "An MCP server for safer coding agents: skill routing, C4 workflow gates, memory checks, and verification before completion."
readmeQualityOk: true
url: "https://github.com/VoDaiLocz/kilo-kit-mcp"
homepage: "https://www.npmjs.com/package/@vodailoc/kilo-kit-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["claude-code", "agent-skills", "agentic-workflow", "skill-md", "ai-agent", "ai-workflows", "codex", "coding-agent", "developer-tools", "gemini-cli"]
stars: 24
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-01-30T11:55:19Z"
lastCommitAt: "2026-08-21T04:10:08Z"
lastReleaseAt: "2026-08-21T03:59:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 23
maintainers: ["VoDaiLocz", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1145929450/5692e634-37c0-4dab-a149-97a9c6e307b0"
---

</p>

</p>

</p>

# Kilo-Kit: MCP Workflow Gates for Coding Agents

> **Version:** 1.4.0
> **Author:** Kilo-Kit Team
> **License:** Apache 2.0

Kilo-Kit is a local-first MCP server and skill library for making coding agents follow safer, repeatable workflows before they touch code.

Use it when your agent skips planning, ignores project workflow rules, forgets useful context, or claims work is done before verification.

It packages a curated `skills/` library, an MCP server, and a C4 workflow gate that turns a user request into an auditable loop:

```text
request -> route -> planning gate -> memory check -> workflow release -> verification gate
```

The published package is `@vodailoc/kilo-kit-mcp`.

## Why Use It

| Problem | Kilo-Kit behavior |
| --- | --- |
| Agent starts coding too early | C4 requires planning/brainstorming before substantive work. |
| Agent forgets repo-specific preferences | Optional memory suggests prior decisions before execution. |
| Agent chooses random instructions | Skill routing returns the workflow and first skill to load. |
| Agent says "done" without proof | Verification gate must be satisfied before completion. |
| Different agents behave…
