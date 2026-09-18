---
repo: "berkayturanci/ai-jury"
name: "ai-jury"
description: "Stdlib-only Python CLI that orchestrates universal AI agent providers (Claude Code, Codex, Antigravity, OpenRouter, DeepSeek, Groq, local models, Aider) into a multi-agent PR review jury — debate, verify, synthesize one verdict. Local-first, secure by default."
readmeQualityOk: true
url: "https://github.com/berkayturanci/ai-jury"
homepage: "https://ai-jury.dev"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["antigravity", "claude-code", "code-review", "codex", "llm", "multi-agent", "open-source", "orchestration", "pypi-package", "python"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 270
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-30T07:23:35Z"
lastCommitAt: "2026-09-18T14:03:22Z"
lastReleaseAt: "2026-06-11T18:12:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 62
maintainers: ["berkayturanci", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/69393d335c2cb7e1e45584a1947ef65b1cd074b45bc3fc210f502934c16cc877/berkayturanci/ai-jury"
---

# <img src="website/favicon.svg" alt="" height="30" align="top"> ai-jury

> Convene a **cross-vendor multi-agent review jury**: native coding-agent CLIs from
> different vendors review the *same* diff, PR, or issue, cross-examine each other,
> verify, and reach **one verdict** — a chair's synthesis or a **panel vote**.

<picture>
  <source media="(prefers-color-scheme: light)" srcset="docs/assets/hero-light.png">
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/hero.png">
</picture>

> **Install once. Run a cross-vendor review jury anywhere.**

Most "multi-model review" tools call models at the **API level**. This one drives **any AI agent provider**: vendor native CLI agents (`claude`, `codex`, `agy`), hosted API providers (Anthropic, OpenAI, Gemini, OpenRouter, DeepSeek, Groq, Mistral), free local open-weight models (Ollama, llama.cpp, vLLM, LM Studio), and arbitrary coding-agent CLIs (`vendor = "cli"` like Aider, Goose, OpenHands) — so every reviewer runs in its own environment with its own tooling. Each agent runs headless; the orchestrator owns the round structure.

```
        ┌──────── round 1 ────────┐   ┌─ round 2 (adaptive) ─┐   ┌─ verify + synthesis ─┐…
