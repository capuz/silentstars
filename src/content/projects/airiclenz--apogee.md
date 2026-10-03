---
repo: "airiclenz/apogee"
name: "apogee"
description: "Terminal coding agent for local LLMs (llama.cpp, Ollama, vLLM) and any OpenAI-compatible API. OS-sandboxed autonomy, MCP, sessions. Go."
readmeQualityOk: true
url: "https://github.com/airiclenz/apogee"
homepage: "https://airiclenz.com"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["agentic-ai", "ai-agents", "cli", "coding-agent", "coding-assistant", "developer-tools", "golang", "llama-cpp", "llm", "lm-studio"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-22T15:13:31Z"
lastCommitAt: "2026-10-03T09:23:03Z"
lastReleaseAt: "2026-08-25T16:37:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["airiclenz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1277089670/84b4f669-7fdd-4f74-9123-d9916949e06b"
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/apogee-logo-light.svg">
    <source media="(prefers-color-scheme: light)" srcset="graphics/apogee-logo-dark.svg">
  </picture>
</p>

# apogee — an open-source AI coding agent for local LLMs, in your terminal

</p>

**apogee is an open-source AI coding agent that runs in your terminal and works with
local LLMs.** Point it at a local model server — llama.cpp, Ollama, LM Studio, vLLM — and
your code never leaves your machine: no API key, no cloud, works offline. Point it at any
OpenAI-compatible endpoint, at OpenRouter, or at Claude over the Anthropic API, and the
same agent runs there. One binary for Windows, macOS and Linux.

</p>

Either way you get a real coding agent: it reads your code, edits files, runs commands
and tests, uses git, searches the web, and hands work to sub-agents — in a loop, until the
task is done. It runs in any terminal, including the one inside VS Code, Zed or your IDE.

## Why apogee

Three things set it apart from other AI coding assistants.

- **Small local models do real work here.** Most agents quietly assume a frontier model.
  apogee gives every model a *floor*: seven…
