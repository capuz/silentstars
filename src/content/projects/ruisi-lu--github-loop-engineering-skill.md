---
repo: "Ruisi-Lu/github-loop-engineering-skill"
name: "github-loop-engineering-skill"
description: "GitHub-native Loop Engineering skill: evidence-gated Issues and Projects workflows over the official GitHub MCP Server."
readmeQualityOk: true
url: "https://github.com/Ruisi-Lu/github-loop-engineering-skill"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-skills", "agentic-coding", "ai-agents", "github-mcp", "github-projects", "loop-engineering", "project-management"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-17T12:25:49Z"
lastCommitAt: "2026-10-30T10:22:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 24
maintainers: ["Ruisi-Lu"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bab7ecaa1b7f34a951e0262a231832cc1031199dd40d4ca40905c73f7328f52/Ruisi-Lu/github-loop-engineering-skill"
---

# GitHub Loop Engineering Skill

> The GitHub-native control plane for Loop Engineering.

An Agent Skill that turns GitHub Issues and GitHub Projects into durable state, evidence, and handoff for repeatable agent work—all through the official [GitHub MCP Server](https://github.com/github/github-mcp-server).

Loop Engineering is about designing the repeatable system around an agent: what it discovers, which bounded transition it attempts, how the result is verified, what gets persisted, and when the loop continues or stops. This skill applies that discipline to the work lifecycle.

```mermaid
flowchart LR
    D["Discover state"] --> F["Frame transition"]
    F --> A["Act once"]
    A --> V{"Verify evidence"}
    V -->|Pass| P["Persist state"]
    V -->|Fail or partial| R["Recover or stop"]
    R --> D
    P --> N{"Continue?"}
    N -->|Next bounded step| D
    N -->|Done or human gate| S["Stop and hand off"]
```

## The project board as loop memory

GitHub is more than the task list in this loop:

| Loop stage | What the skill does | Durable artifact |
|:--|:--|:--|
| Discover | Read live repository, issue, hierarchy, Project fields, and policy | Current world state |
| Frame |…
