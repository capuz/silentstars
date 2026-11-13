---
repo: "martinffx/atelier"
name: "atelier"
description: "An atelier for your Agent: spec-driven workflows, deep thinking, and code quality."
readmeQualityOk: true
url: "https://github.com/martinffx/atelier"
homepage: "https://github.com/martinffx/atelier"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-skills", "agentic-coding", "claude-code", "code-review", "opencode", "prompt-engineering", "sdd", "spec-driven-development", "anthropic", "claude-skills"]
stars: 51
forks: 5
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-11T15:09:37Z"
lastCommitAt: "2026-11-13T11:26:44Z"
lastReleaseAt: "2026-07-27T20:17:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 49
maintainers: ["martinffx", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4306ba50c46480d1ac39334ff66d7ffc0c75bafbc8e0844d2377222a74894b5b/martinffx/atelier"
---

# Atelier

> A personal development toolkit for AI agents. It covers spec-driven development, code quality, and deep thinking.

Atelier gives coding agents a disciplined way to move from an idea to reviewed, verified code without taking control away from the developer.

```bash
npx @martinffx/atelier@latest init --harness <claude|opencode|codex>
```

Install the skills separately:

```bash
npx skills add martinffx/atelier
```

Update installed skills with:

```bash
npx skills update martinffx/atelier
```

For OpenCode, installing skills first also creates slash commands for every installed skill
marked `user-invocable: true`. If you initialized OpenCode before installing the skills, run:

```bash
npx @martinffx/atelier@latest update --harness opencode
```

## How Atelier works

Atelier uses as much process as each request needs. Bounded work gets a concise plan in the conversation. Substantial work gets a durable spec, an implementation plan, and tracked execution. The developer approves the plan before implementation begins.

```mermaid
flowchart TD
    R[Request] --> O[atelier-orchestrator]

    O -->|Bounded work| IP[spec-plan: Inline Plan]
    IP --> IA{Developer approval}…
