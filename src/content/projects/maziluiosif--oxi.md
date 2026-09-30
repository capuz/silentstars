---
repo: "maziluiosif/oxi"
name: "oxi"
description: "Native, local-first coding-agent desktop app in Rust (egui) — run any model: local GGUF, Ollama/LM Studio, SSH-tunneled runtimes, hosted APIs, or Claude Code / Cursor / Codex over ACP. No Electron, no cloud lock-in."
readmeQualityOk: true
url: "https://github.com/maziluiosif/oxi"
homepage: "https://maziluiosif.github.io/oxi/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["acp", "ai-assistant", "coding-agent", "desktop-app", "eframe", "egui", "gguf", "llama-cpp", "llm", "lm-studio"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 5
recentReleases: 6
createdAt: "2026-04-11T19:41:07Z"
lastCommitAt: "2026-09-30T09:57:40Z"
lastReleaseAt: "2026-07-05T20:23:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 70
maintainers: ["maziluiosif", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/28d932e42205f46541b481c13d4b20515c524d297fc5e8863092cae06530dd4c/maziluiosif/oxi"
---

**Project page: [maziluiosif.github.io/oxi](https://maziluiosif.github.io/oxi/)** · **[Download a release](https://github.com/maziluiosif/oxi/releases)** · [Build from source](#build-and-run-from-source)

**oxi** is a native, local-first coding agent. One Rust binary, no Electron, ~110 MB idle.

- **Light and fast:** Rust + egui, a single native binary with no bundled browser engine.
- **Runs your models for you:** search HuggingFace for GGUF, download it, install a matching `llama-server`, start and stop it, all from the UI, either on this machine or on a GPU box over SSH. It also talks to LM Studio and Ollama.
- **Or use the subscription you already pay for:** drive Claude Code, Cursor, or Codex CLI in-app over ACP, sign in to ChatGPT/Codex directly, or point it at any hosted API.
- **Voice dictation built in:** local Whisper, no cloud round-trip.
- **Web search with no API key:** the agent searches through Bing, DuckDuckGo, or your own self-hosted SearXNG. No search API to sign up for, no key to paste, no per-query billing.





## Install

### Build and run from source

Requirements:

- **Rust 1.92 or newer** (the crate uses edition 2024). Install it with…
