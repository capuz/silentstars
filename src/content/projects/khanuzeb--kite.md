---
repo: "KhanUzeb/kite"
name: "kite"
description: "Kite — lean terminal coding agent: plan/build REPL, 15+ LLM providers (BYOK + subscriptions), subagents, checkpoints, headless CI runs. Python, powered by LiteLLM."
readmeQualityOk: true
url: "https://github.com/KhanUzeb/kite"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-agent", "cli", "coding-agent", "coding-assistant", "litellm", "llm", "python", "agents", "devtools", "terminal"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 13
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-29T11:49:47Z"
lastCommitAt: "2026-09-26T08:47:46Z"
lastReleaseAt: "2026-09-06T09:30:44Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 71
maintainers: ["KhanUzeb", "cursoragent", "cursor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f70cc3f1fb13d8f2708b5d28a5db78c74321be3a1d51fd5796d1b5e41b1ad3d/KhanUzeb/kite"
---

<h1 align="center">Kite</h1>

  A terminal-first coding agent for local repositories
</p>

  </a>
  </a>
  </a>
  </a>
</p>

  Plan, build, review, and automate work across local repositories.
</p>

**Version:** 1.0.2

**Keywords:** coding agent, AI code assistant, terminal coding assistant, agent CLI, SWE-agent style loop, repository automation, code review automation

## Why Kite

Working in a terminal on a real repository means juggling plans, edits, tests, and reviews across many tools. Kite puts that loop in one place: describe the task, watch it inspect code, apply guarded edits, and verify the result — without leaving your shell or handing your repo to a black box.

## Highlights

- **Plan then build** — read-only checklist first (`/plan`), edits when you say so (`/build`)
- **Multi-provider** — OpenAI, Anthropic, Groq, OpenCode Zen/Go, NVIDIA NIM, Ollama, and OpenAI-compatible endpoints
- **Guarded tools** — sandboxing, approval modes, secret redaction, and verification gates on `submit`
- **Memory that persists** — sessions, checkpoints, handoffs, and project notes that survive restarts

## Quick start

```bash
# macOS / Linux / WSL (public repo; private → git clone…
