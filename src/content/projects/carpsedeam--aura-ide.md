---
repo: "CarpseDeam/Aura-IDE"
name: "Aura-IDE"
description: "An AI coding harness that shaped itself - Planner/Worker agents, repo awareness, surgical edits, validation, recovery, and safe diff approvals."
url: "https://github.com/CarpseDeam/Aura-IDE"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ai", "ai-agents", "deepseek", "desktop-app", "developer-tools", "llm", "openrouter", "pair-programming", "pyside6", "python"]
stars: 45
forks: 6
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-05T12:57:26Z"
lastCommitAt: "2026-06-26T21:32:36Z"
lastReleaseAt: "2026-05-14T11:58:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 44
maintainers: ["CarpseDeam"]
openGraphImageUrl: "https://opengraph.githubassets.com/55d291ae4d945cd3bf97cd10559004a6806844c1b686c68dfe82dec45e156de3/CarpseDeam/Aura-IDE"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/snowballkori"]
discussionCount: 4
---

# Aura

<p>
  </a>
</p>

**Aura is a local-first AI coding workspace that turns prompts into reviewed, validated code changes.**

Aura gives AI a real workbench — not just a chat box. It runs a Planner/Worker loop: the Planner reads your repo and writes a structured technical spec; the Worker executes the spec through controlled file tools, proposes every change as a diff for your approval, runs validation, and commits the result. The architecture is model-agnostic: use DeepSeek, OpenAI, Anthropic, Gemini, or OpenRouter through your own keys, or use Aura Credits for hosted models without key management. Reusable Drones, Workbay automation, AST repo maps, BM25 codebase search, git integration, and a mobile companion ship with the desktop app.

## See it in action

</p>

## What Aura does

The workflow is a tight loop you stay in control of:

1. **Prompt** — Describe the change you want, in your own words.
2. **Planner spec** — The Planner reads your workspace (AST repo map, BM25 index, dependency graph) and writes a structured technical spec. You review and edit it before anything runs.
3. **Dispatch** — When the spec looks right, you dispatch it.
4. **Worker edits** — The Worker…
