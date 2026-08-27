---
repo: "berkayturanci/ai-jury"
name: "ai-jury"
description: "Stdlib-only Python CLI that orchestrates universal AI agent providers (Claude Code, Codex, Antigravity, OpenRouter, DeepSeek, Groq, local models, Aider) into a multi-agent PR review jury — debate, verify, synthesize one verdict. Local-first, secure by default."
readmeQualityOk: true
url: "https://github.com/berkayturanci/ai-jury"
homepage: "https://ai-jury.dev"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["antigravity", "claude-code", "code-review", "codex", "llm", "multi-agent", "open-source", "orchestration", "pypi-package", "python"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 200
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-30T07:23:35Z"
lastCommitAt: "2026-08-27T14:26:41Z"
lastReleaseAt: "2026-06-11T18:12:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 67
maintainers: ["berkayturanci", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/08b4b9c6895c9cd89c234f1cbfa7d6ce49802bac325ff7d6292e4c10418b0bfd/berkayturanci/ai-jury"
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
