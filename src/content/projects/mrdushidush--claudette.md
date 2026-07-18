---
repo: "mrdushidush/claudette"
name: "claudette"
description: "Your AI never leaves your laptop. Claudette is a personal AI assistant and coding agent that runs entirely on local hardware - REPL, fullscreen TUI, one-shot CLI, and a Telegram bot, all driving one local model through Ollama or LM Studio. No cloud brain. No API key. No subscription. No telemetry. One Rust binary. "
readmeQualityOk: true
url: "https://github.com/mrdushidush/claudette"
homepage: "https://github.com/mrdushidush/claudette"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["cli", "llm", "local-first", "ollama", "rust", "ai-agent", "local-llm", "personal-assistant", "telegram-bot", "coding-agent"]
stars: 11
forks: 0
openIssues: 3
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-18T11:39:39Z"
lastCommitAt: "2026-07-18T05:46:55Z"
lastReleaseAt: "2026-05-15T21:56:22Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 94
undervaluedScore: 57
maintainers: ["mrdushidush", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d60c9d7168be4e90bcf69eb6b3b658dd3fefda8139b21253f8946dc95debacbb/mrdushidush/claudette"
discussionCount: 0
---

# Claudette

**An air-gapped AI coding agent in one Rust binary — run it `--offline` and your code physically cannot leave the machine.** It drives a model *you* run locally through [Ollama](https://ollama.com) or [LM Studio](https://lmstudio.ai/); there is no cloud-brain code in the binary at all.

*Claudette in her own repo on a local 35B model - editing the code, clearing the full `cargo fmt` / `clippy` / `cargo test` gate, then opening a genuine pull request. No cloud; nothing leaves the machine.*

## Get started in 2 minutes

```sh
# 1. Install (prebuilt binary, SHA256-verified)
curl -fsSL https://raw.githubusercontent.com/mrdushidush/claudette/main/install.sh | sh   # Linux / macOS
iwr -useb https://raw.githubusercontent.com/mrdushidush/claudette/main/install.ps1 | iex  # Windows (PowerShell)

# 2. Pull the default local brain (3.4 GB, one-time — install Ollama from ollama.com first)
ollama pull qwen3.5:4b

# 3. Guided setup: detects your GPU, offers the right brain, ends in a green check
claudette --setup

# 4. Talk to it
claudette "hello — what can you do?"
```

**Pick your path:** 🛠️ **Local coding agent** →…
