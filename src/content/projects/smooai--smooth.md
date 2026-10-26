---
repo: "SmooAI/smooth"
name: "smooth"
description: "Smooth (th) — a security-first AI agent orchestration platform and CLI."
readmeQualityOk: true
url: "https://github.com/SmooAI/smooth"
homepage: "https://smoo.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["agent-orchestration", "ai-agent", "cli", "developer-tools", "llm", "rust"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-30T00:56:43Z"
lastCommitAt: "2026-10-26T03:03:30Z"
lastReleaseAt: "2026-04-18T17:58:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 44
maintainers: ["brentrager"]
openGraphImageUrl: "https://opengraph.githubassets.com/fce2ef5303503d1126c57e36f10cbd7c598af16ee44a6324e7169acd2a293603/SmooAI/smooth"
---

---

> **Your always-on AI assistant, and the CLI that runs your coding agents.** Big Smooth lives on your machine, remembers what matters, and works with your calendar, reminders and messages. `th` gives Claude Code, Codex and OpenCode shared work tracking, agent-to-agent mail, clean handoffs and a context budget. One Rust binary, no runtime dependencies.

---

## Install

```bash
brew install SmooAI/tools/th      # macOS (Apple Silicon) and Linux
th --version
```

That uses the [SmooAI/homebrew-tools](https://github.com/SmooAI/homebrew-tools) tap; `brew upgrade th` picks up new releases. No Homebrew? `curl -fsSL https://raw.githubusercontent.com/SmooAI/smooth/main/install.sh | sh`. Windows: use WSL for now. Then follow the [Quickstart](https://github.com/SmooAI/smooth/blob/HEAD/docs/Start-Here/Quickstart.md).

### Set up with your coding agent

Paste this into Claude Code, Codex or OpenCode and it does the whole setup for you: install, wire up every harness, verify, choose a model.

```text
Install or update th (Smooth, by Smoo AI) to the latest release on this machine and wire it into Claude Code, OpenCode and Codex.

1. Run `brew update && (brew upgrade smooai/tools/th || brew…
