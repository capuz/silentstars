---
repo: "alexgetmancom/signal-forge"
name: "signal-forge"
description: "Evidence-first monitoring for AI model releases, catalog changes, arenas, packages, docs, incidents, and platform signals."
readmeQualityOk: true
url: "https://github.com/alexgetmancom/signal-forge"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai", "ai-observability", "anthropic", "bun", "change-detection", "developer-tools", "discord-bot", "llm", "mcp", "model-monitoring"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-08T22:29:40Z"
lastCommitAt: "2026-10-04T10:01:26Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["alexgetmancom", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/f368c9e2111bb1db7cd6d986a23126703e89085faa28e093ddbe3e5fd348c825/alexgetmancom/signal-forge"
---

# Signal Forge

**Know what changed in AI before it's announced, with the receipts to prove it.**

Models show up in API catalogs before the blog post goes live. Arena codenames appear weeks before
anyone names them. Docs pages, package releases and pricing tables change quietly, and by the time
it's news, somebody else already has the story.

Signal Forge watches those surfaces for you. It keeps the before/after evidence for every change,
labels how far the source can be trusted, and sends a card to Discord or Telegram only when it's
worth reading.

Built with Bun, TypeScript and SQLite. One process, one database file, no cloud services required.
MIT licensed.

```text
🆕 New model available · GPT-5
OpenRouter · OpenAI

What changed
Listed and selectable.

Reader impact
Available to use from this catalogue.

Confirmed · availability catalogue
Detected a few minutes ago
```

## Why use it

- **Early.** It reads the places things show up first: provider model catalogs, arenas, package
  registries, GitHub, Hugging Face, docs, changelogs, status pages, and new pages on vendor sites.
- **Honest.** Every event carries a confidence label taken from its source. An arena codename stays…
