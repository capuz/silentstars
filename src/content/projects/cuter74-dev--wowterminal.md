---
repo: "cuter74-dev/wowTerminal"
name: "wowTerminal"
description: "A context-aware AI terminal with SSH, SFTP, and local/remote LLM support."
url: "https://github.com/cuter74-dev/wowTerminal"
homepage: "https://wowterminal.oopnwow.com/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [77, 22]
topics: ["terminal", "ai-terminal", "devops", "local-llm", "ollama", "openai", "rust", "sftp", "ssh", "tauri"]
stars: 14
forks: 0
openIssues: 9
closedIssues: 114
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-21T11:17:38Z"
lastCommitAt: "2026-06-29T07:24:10Z"
lastReleaseAt: "2026-06-04T04:51:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 57
maintainers: ["cuter80"]
openGraphImageUrl: "https://opengraph.githubassets.com/962cd1a62e47ad23eb291f26eff8d08814e32622ab1765f8ae5a07f17ebe04ed/cuter74-dev/wowTerminal"
---

# wowTerminal

### Make Your Terminal Smarter & Safer — LLM × SSH × SFTP

A context-aware AI terminal — a chat assistant that reads your terminal,<br/>
an SSH host manager, and a dual-pane SFTP file browser, in one fast desktop app.

[✨ Features](#features) • [🚀 Getting started](#getting-started) • [⌨️ Shortcuts](docs/guide/shortcuts.md) • [🔐 SSH](docs/guide/ssh.md) • [📁 SFTP](docs/guide/sftp.md) • [🤖 AI](docs/guide/ai.md)

<sub>Love this project? A ⭐ on the repo keeps it going.</sub>

</div>

---

## Features

- **AI assistant (multi-backend)**
  - Works with any OpenAI-compatible endpoint — OpenAI, Ollama, vLLM, TGI, self-hosted gateways.
  - Knows the connected system (OS / shell / user / cwd) and can attach the focused pane's
    recent output, so suggestions fit the machine and what you're doing.
  - Extracts commands from responses into cards with a one-click **Send to terminal** button.
  - Per-tab conversations, saved chat history, and session restore.
- **SSH manager**
  - Host profiles (name / host / port / user / auth), groups, tags, search and sort, with
    keyboard navigation (`↑`/`↓` to select, `Enter` to open).
  - SSH key manager: generate or import keys.
  -…
