---
repo: "dayfinggg/openai-codex-agent-skills"
name: "openai-codex-agent-skills"
description: "Current Codex instructions, 22 engineering skills, and portable settings with Windows and Linux installers."
readmeQualityOk: true
url: "https://github.com/dayfinggg/openai-codex-agent-skills"
language: "Shell"
languages: ["Shell", "PowerShell", "Python"]
languagePcts: [38, 34, 20]
topics: ["agent-skills", "ai-agents", "codex", "codex-cli", "developer-tools", "dotfiles", "openai", "prompt-engineering", "ai-coding", "codex-config"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-19T20:30:30Z"
lastCommitAt: "2026-11-11T11:18:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 44
maintainers: ["dayfinggg"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfe5c7042ca9288510ef939b737b1ddf25f5e0f399b31d3b9e13aad1c7b6f85d/dayfinggg/openai-codex-agent-skills"
---

# Codex instructions and skills

A portable configuration for GPT-6.1 Sol, GPT-6.1 Terra, GPT-6 Astra, and GPT-6 Luna, synchronized with the current local setup.

The payload contains 22 engineering skills, the Concise operating instructions, and portable settings. Each skill keeps its entry point in `SKILL.md`, guidance in `references`, runnable helpers in `scripts`, and reusable examples in `assets`. Source attribution and redistribution terms live in the distribution `LICENSE`. No custom agent definitions are installed. Codex supplies its own system skills and discovers available tools at runtime.

The skills and operating rules follow Concise 0.30.5, including its complete writing style and configured Russian response language. The base starts from the GPT-6.1 Sol instruction template shipped to Codex 0.167.1 on November 11, 2026. Targeted replacements remove conflicting presentation defaults and adapt Claude tools and paths to Codex. Skill descriptions, entry points, references, scripts, and assets retain the source workflows, with Codex-specific invocation guidance.

One set of writing rules covers every text written for people, including subagent reports unless their task…
