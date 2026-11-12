---
repo: "eldermoraes/quarkus-agentic-scaffolding"
name: "quarkus-agentic-scaffolding"
description: "Scaffolding skill + always-on conventions (CLAUDE.md/AGENTS.md) for Quarkus + LangChain4j agentic AI apps: AI services, multi-agent workflows, and RAG. Installable in Claude Code, Codex, Copilot, Cursor, and any Agent Skills-compatible agent."
readmeQualityOk: true
url: "https://github.com/eldermoraes/quarkus-agentic-scaffolding"
homepage: "https://www.skills.sh/eldermoraes/quarkus-agentic-scaffolding"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [66, 34]
topics: ["agent-skills", "ai", "ai-agents", "claude-code", "claude-code-plugin", "claude-skills", "codex-skills", "developer-tools", "java", "langchain4j"]
stars: 27
forks: 2
openIssues: 4
closedIssues: 41
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-01T16:20:45Z"
lastCommitAt: "2026-11-12T11:40:37Z"
lastReleaseAt: "2026-08-10T12:20:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 44
maintainers: ["eldermoraes", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4e1dbd322e48c59a7656b91f2aa4e4d072651b6ca29865096f32b25b8dc0c28/eldermoraes/quarkus-agentic-scaffolding"
---

# Quarkus + LangChain4j + AI Stack
# Version: 0.23.4

## What this repository is

A small, opinionated, distribution-ready artifact for building AI and agent applications on the
Java stack of **Quarkus + LangChain4j**. It pairs drop-in always-on coding conventions
(`CLAUDE.md` for Claude, `AGENTS.md` for Codex, Bob, and Gemini) with three skills that set up the
prerequisites, scaffold new projects and components, and audit existing projects — all from
working templates. The conventions and templates reflect real-world Quarkus + LangChain4j
practice and a baseline of modern Java, so the guidance captures how these systems are actually
built rather than generic boilerplate.

## Quick install — any skills-capable agent

The fastest install on any agent that supports the [Agent Skills](https://agentskills.io) format —
Claude Code, Codex, Gemini CLI, GitHub Copilot, Cursor, Windsurf, opencode, Amp, IBM Bob, and
dozens more:

```
npx skills add eldermoraes/quarkus-agentic-scaffolding
```

The [skills.sh](https://www.skills.sh/) CLI detects your agents and installs all three skills
(`setup-agentic-scaffolding`, `scaffold-project`, `audit-project`) into each of them — IBM Bob
included, as…
