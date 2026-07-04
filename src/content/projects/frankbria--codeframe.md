---
repo: "frankbria/codeframe"
name: "codeframe"
description: "Think → Build → Prove → Ship. The project delivery system that turns ideas into verified, deployed code. AI agents write the code — CodeFrame owns everything before and after."
readmeQualityOk: true
url: "https://github.com/frankbria/codeframe"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [76, 22]
topics: ["agent-orchestration", "ai-agent", "ai-agent-framework", "ai-agents", "ai-coding", "ai-coding-assistant", "auto-code-generator", "auto-code-review", "automation", "autonomous-agents"]
stars: 17
forks: 5
openIssues: 50
closedIssues: 377
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2025-10-16T02:36:09Z"
lastCommitAt: "2026-07-04T22:19:55Z"
lastReleaseAt: "2026-06-13T23:49:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 60
maintainers: ["frankbria", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2420d50f704c08cd7204027ff0f95e18bf63f564b52a5bb5897fcb3dc88dfd5/frankbria/codeframe"
discussionCount: 2
---

# CodeFRAME™

> [!WARNING]
> **Prerequisite:** CodeFRAME requires an `ANTHROPIC_API_KEY` from [console.anthropic.com](https://console.anthropic.com/). Get your key before running any `cf` command.

---

> **The IDE of the future is not a better text editor with AI autocomplete. It is a project delivery system where writing code is a subprocess.**

---

## The Problem

Coding agents are getting remarkably good at writing code. But shipping software is not the same as writing code.

Before code gets written, someone has to figure out *what* to build, decompose it into tasks that an agent can execute, and resolve ambiguities. After code gets written, someone has to verify it actually works, catch regressions, and deploy with confidence. Today, that "someone" is still you.

CodeFRAME owns the **edges** of the pipeline -- everything that happens before and after the code gets written. The actual coding is delegated to frontier agents (Claude Code, Codex, OpenCode, Kilocode, or CodeFRAME's built-in ReAct agent) that are better at it than any custom agent could be.

## Think. Build. Prove. Ship.

```text
THINK    What are you building? How should it be broken down?
           cf prd…
