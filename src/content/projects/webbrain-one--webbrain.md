---
repo: "webbrain-one/webbrain"
name: "webbrain"
description: "Open-source AI browser agent for Chrome and Firefox (monorepo) 🧠 "
readmeQualityOk: true
url: "https://github.com/webbrain-one/webbrain"
homepage: "https://webbrain.one"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [64, 34]
topics: ["ai-agent", "ai-tools", "browser-extension", "chrome-extension", "firefox-addon"]
stars: 173
forks: 22
openIssues: 14
closedIssues: 24
watchers: 3
contributors: 7
recentReleases: 10
createdAt: "2026-04-06T15:17:01Z"
lastCommitAt: "2026-07-04T22:52:23Z"
lastReleaseAt: "2026-04-15T07:07:17Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 92
undervaluedScore: 33
maintainers: ["esokullu", "github-actions[bot]", "webbrain-one"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1202954853/8ae7df80-428f-42f0-88d2-f8c9847c1db5"
---

# WebBrain

Open-source AI browser agent for Chrome and Firefox. Chat with any web page, automate browser tasks, and run multi-step agent workflows — powered by your choice of LLM.

## Features

- **Page Reading** — Extracts text, links, forms, tables, and interactive elements from any page
- **Browser Actions** — Click, type, scroll, navigate, and interact with page elements
- **Ask / Act Modes** — Read-only mode by default, full agent mode with confirmation
- **Plan before Act** — Act mode can generate a structured plan, show it for approval, then pin the approved plan to the scratchpad before tools run
- **Multi-Step Agent** — Autonomous task execution with tool-use loops (configurable, default 130 steps)
- **Continue from Limit** — When the agent hits the step limit, click Continue to keep going
- **Multi-Provider LLM** — Supports local and cloud models:
  - **WebBrain Cloud 1.0** (cloud, default) — Built-in managed cloud option; no local setup required
  - **llama.cpp** (local) — No API key needed. Also **Ollama**, **LM Studio**, **Jan**, **vLLM**, and **SGLang**
  - **OpenAI** (GPT-5.5, etc.)
  - **Anthropic Claude** (native API)
  - **Google Gemini**, **Mistral AI**,…
