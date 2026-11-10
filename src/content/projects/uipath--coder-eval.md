---
repo: "UiPath/coder_eval"
name: "coder_eval"
description: "Playwright for coding agents. Test that your skills, MCP servers, and CLIs actually work when an agent uses them — sandboxed YAML suites, A/B experiments, CI gates."
readmeQualityOk: true
url: "https://github.com/UiPath/coder_eval"
homepage: "https://coder-eval.com"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["agent-evaluation", "claude-code", "codex", "coding-agents", "evaluation-framework", "claude", "claude-skills", "agent-testing", "claude-code-skills", "gemini"]
stars: 157
forks: 9
openIssues: 15
closedIssues: 20
watchers: 2
contributors: 58
recentReleases: 3
createdAt: "2026-07-09T06:46:59Z"
lastCommitAt: "2026-11-10T14:49:37Z"
lastReleaseAt: "2026-08-21T16:12:49Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 88
undervaluedScore: 33
maintainers: ["bai-uipath", "akshaylive", "uipreliga"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1294760624/5ab6cfb8-a51f-4442-abe1-be4c54c8bb7b"
discussionCount: 3
---

# Coder Eval — evaluate and benchmark AI coding agents and their skills

  runtime, a real sandbox, and a pass/fail gate in CI.

**Coder Eval** (`pip install coder-eval` / `uv tool install coder-eval`) is an
open-source, **agent-agnostic** framework for **evaluating and benchmarking AI coding
agents and their skills** — built for benchmark authors, CLI builders, and skill
builders — with sandboxing, reproducibility, and data-driven analysis. It runs a real
agent — **Claude Code**, **OpenAI Codex**, **Google Antigravity (Gemini)**,
**OpenCode**, or **Pi** — in a sandbox against declarative YAML tasks, then scores the files and
commands it actually produced. Changing harness is one field (`agent.type`); the
tasks, criteria, scoring, telemetry, and reports stay the same.

Reach for it when you want to **benchmark agents on your own domain tasks**,
**test whether a skill triggers** in the agent you ship for, **A/B-test Claude Code
vs. Codex vs. Gemini vs. OpenCode vs. Pi** (or model vs. model, prompt vs. prompt), or
**gate CI on coding-agent quality**. It is **not a fixed leaderboard**: unlike
SWE-bench or SkillsBench, which rank models on a shared task set, you bring the tasks
and…
