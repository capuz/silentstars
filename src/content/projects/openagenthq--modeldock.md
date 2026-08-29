---
repo: "OpenAgentHQ/modeldock"
name: "modeldock"
description: "The lightweight, Python-first model manager for local LLMs - the package manager for local AI models. Discover, download, cache, verify, and load models through pluggable runtime adapters (Ollama, LM Studio, llama.cpp, and more). 100+ good-first-issues welcome!"
readmeQualityOk: true
url: "https://github.com/OpenAgentHQ/modeldock"
homepage: "https://openagenthq.github.io/modeldock/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["ai", "clean-architecture", "cli", "developer-tools", "first-contributions", "github-actions", "hacktoberfest", "llama-cpp", "llm", "local-ai"]
stars: 7
forks: 9
openIssues: 110
closedIssues: 40
watchers: 0
contributors: 8
recentReleases: 5
createdAt: "2026-07-17T16:59:49Z"
lastCommitAt: "2026-08-29T17:27:11Z"
lastReleaseAt: "2026-08-28T09:53:16Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 83
undervaluedScore: 69
maintainers: ["himanshu231204", "claude", "Nithin00614"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ea7d05a62c82f7af28bbba7724c52b5987e23b397fbc1f6af6f7f7c19e77883/OpenAgentHQ/modeldock"
---

</p>

<h1 align="center">ModelDock</h1>

  The lightweight, Python-first <strong>model manager for local AI models</strong> — the package manager for local LLMs.
</p>

</p>

---

ModelDock discovers, downloads, caches, verifies, and loads local LLMs through
pluggable runtime adapters. It does **not** run inference itself; it orchestrates
runtimes (starting with Ollama). No more manual `ollama pull` commands — just
write `md.load("llama3")` and ModelDock handles the rest.

</p>

## Features

- **Python-first API** — `md.load("llama3")` auto-installs if missing and returns a ready client.
- **Searchable registry** — browse models, categories, capabilities, and sizes without leaving Python.
- **Bulk installation** — `md.install_category("coding")` pulls recommended models at once.
- **Smart caching** — never re-download installed models; content-addressed offline cache.
- **Extensible runtimes** — Ollama ships first; LM Studio, llama.cpp, Jan AI, GPT4All, vLLM are drop-in adapters.
- **Cross-platform** — Windows, macOS, Linux via `platformdirs`.
- **Zero-config, beginner-friendly** — dynamic catalog from ollama.com with offline caching.

## Quick Start

### Prerequisites

- Python…
