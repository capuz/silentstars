---
repo: "Temikus/denkeeper"
name: "denkeeper"
description: "A single-binary personal AI agent designed for people who want full control over their AI assistant. "
readmeQualityOk: true
url: "https://github.com/Temikus/denkeeper"
homepage: "http://denkeeper.io/"
language: "Go"
languages: ["Go"]
languagePcts: [76]
stars: 13
forks: 3
openIssues: 17
closedIssues: 33
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-18T22:05:05Z"
lastCommitAt: "2026-09-27T09:28:40Z"
lastReleaseAt: "2026-03-30T07:07:46Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 51
maintainers: ["Temikus", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/04bc24e83414575aa8b013b0f6be4c4ea8aa5b84be99c3f1ef914a47184f954e/Temikus/denkeeper"
---

</p>

</p>

A security-first personal AI agent that lives in your chat. Built in Go as a single binary, designed to run anywhere from a Raspberry Pi to a cloud VM.

Denkeeper connects to your Telegram or Discord, routes messages through LLM providers via [Anthropic](https://anthropic.com), [OpenAI](https://openai.com), [OpenRouter](https://openrouter.ai), or a local [Ollama](https://ollama.com) instance, and remembers conversations across sessions using a local SQLite database. It enforces per-session cost budgets, user allowlists, and a tiered permission system — so you stay in control of what it can do and how much it can spend.

## Installation

### One-liner (Linux and macOS)

```sh
curl -fsSL https://raw.githubusercontent.com/Temikus/denkeeper/main/install.sh | sh
```

To install to a custom prefix (e.g. without sudo):

```sh
curl -fsSL https://raw.githubusercontent.com/Temikus/denkeeper/main/install.sh | sh -s -- --prefix ~/.local
```

The installer detects OS/arch, downloads the correct release archive, verifies the SHA-256 checksum, and places the binary in `<prefix>/bin`.

### Debian / Ubuntu (.deb)

```sh
VERSION=$(curl -fsSL…
