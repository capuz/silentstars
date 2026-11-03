---
repo: "DocRoms/Kronn"
name: "Kronn"
description: " Self-hosted control plane for AI coding agents (Claude Code, Codex, Gemini, Ollama). Shared MCPs, reusable workflows, AI audit that makes any repo AI-friendly. Engineering, not prompting : smaller prompts, fewer hallucinations, lower token bill."
readmeQualityOk: true
url: "https://github.com/DocRoms/Kronn"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [62, 29]
topics: ["ai-tools", "claude-code", "code-audit", "codex", "developer-tools", "developer-tools-ai-agent", "gemini", "llm-tooling", "model-context-protocol", "ollama"]
stars: 18
forks: 2
openIssues: 170
closedIssues: 98
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-05T20:40:56Z"
lastCommitAt: "2026-11-03T12:47:56Z"
lastReleaseAt: "2026-04-07T21:11:59Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 44
maintainers: ["DocRoms", "tarussio", "barberemi"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b08a6530ed754151f9f205178b0457ea92538c7e3a63d11291b8fed706fd5ef/DocRoms/Kronn"
fundingLinks: ["KO_FI:https://ko-fi.com/docroms"]
---

&nbsp;

**Run your CLI coding agents (Claude Code, Codex, Gemini CLI, OpenCode…), local models with Ollama, and HTTP providers such as LiteLLM, NVIDIA and OpenRouter from one self-hosted dashboard, with shared MCPs, secrets and repeatable workflows.**

**Smaller prompts, more code where code is enough: fewer hallucinations, lower token bill, eco-design by default.**

> **Status: 0.15.1 (current release).** Functional but pre-1.0. Breaking changes happen between minor versions; patch versions are safe.
> **License: AGPL-3.0.** Using Kronn locally to build *your own* product is fine; the copyleft only kicks in if you distribute a modified Kronn to others. See [License notes](#license-notes-agpl-3-0).

## What's new in 0.15.1

0.15.1 makes the AI-doc audit trustworthy, lets you test prompt and skill
versions on real runs before shipping them, and gives agents local media.

- **Versions and shadow runs:** custom skills keep a version history like
  Quick Prompts, and a step can pin the skill or Quick Prompt version it
  loads. A workflow can run a shadow alongside each normal run, on the same
  inputs with other versions, skipping everything that acts outside Kronn;
  the run list…
