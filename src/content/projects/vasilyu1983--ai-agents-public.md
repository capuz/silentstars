---
repo: "vasilyu1983/AI-Agents-public"
name: "AI-Agents-public"
description: "Production-grade agent skills and Custom GPT prompts for ChatGPT, Claude Code, and Codex. 140 skills, 28 agents, Agent Skills spec compliant."
readmeQualityOk: true
url: "https://github.com/vasilyu1983/AI-Agents-public"
homepage: "https://github.com/vasilyu1983"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [68, 25]
topics: ["agent-skills", "agentic-ai", "ai-agents", "anthropic", "chatgpt-prompts", "claude", "claude-code", "claude-code-skills", "claude-skills", "codex-skills"]
stars: 99
forks: 18
openIssues: 0
closedIssues: 2
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2025-11-14T17:18:48Z"
lastCommitAt: "2026-10-16T08:19:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 32
maintainers: ["vasilyu1983"]
openGraphImageUrl: "https://opengraph.githubassets.com/b58366ecb80abfbe166cf0bb2790143d1b217275cbc206d7b39e0cf27fd5e5ca/vasilyu1983/AI-Agents-public"
discussionCount: 1
---

# AI-Agents

**Ready-made expertise and multi-agent runs for Claude Code and Codex.**

Out of the box, Claude Code works as one assistant in one chat. This repository adds three things:

- **Skills:** instructions the assistant loads by itself when your task needs them, for example a code-review checklist.
- **Subagents:** specialists, such as a security reviewer, that work in a separate context and report back.
- **Saved workflows:** multi-step runs, such as "review my diff with 4 reviewers, then try to disprove each finding". The rules of each run are enforced in code, so an agent cannot skip a step.

Install it as a Claude Code plugin in three commands, or clone it and link it.

| What you get | How many | Where |
|---|---|---|
| Skills: engineering, AI, data, QA, ops, docs, research, applied theory | 140+ | `skills/universal/` |
| Subagents with explicit boundaries | 85 | `agents/claude/`, `agents/codex/` |
| Team recipes | 8 | `agents/teams/` |
| Saved workflows with guarantees in code | 8 | `agents/workflows/` |
| Opt-in hooks: git safety, lint-config guard, notifications | 3 | `hooks/` |
| Language and domain rules | 14 folders | `rules/` |

The exact, current list is in…
