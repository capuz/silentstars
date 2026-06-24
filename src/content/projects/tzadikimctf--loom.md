---
repo: "Tzadikimctf/loom"
name: "loom"
description: "Obsidian plugin turning notes into runnable, typed, and reproducible polyglot workspaces"
url: "https://github.com/Tzadikimctf/loom"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["obsidian", "plugin", "workspace"]
stars: 22
forks: 2
openIssues: 6
closedIssues: 15
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-06-20T15:19:02Z"
lastCommitAt: "2026-06-24T23:40:11Z"
lastReleaseAt: "2026-06-24T23:40:11Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 43
maintainers: ["Thomy-G", "23384"]
openGraphImageUrl: "https://opengraph.githubassets.com/db328e134e5468c4571545a806580830344b855707aa2e0d2343d110a9f64695/Tzadikimctf/loom"
---

# loom

Obsidian plugin for executing ordinary fenced Markdown code blocks.

loom is intended for research and exploratory notes where code, proofs, solver queries, and runtime output should stay readable in the document. It adds execution controls to normal fenced code blocks and renders transient output beneath the block. The source block is not rewritten into a plugin-specific format.

## Model

loom treats a fenced block as executable when the fence info string resolves to a supported language alias. The parser walks the active Markdown buffer, skips managed loom output sections, normalises the fence language, and creates a stable block descriptor.

Each block receives an ID derived from these values:
- Vault-relative file path
- Supported block ordinal
- Normalised language
- Source content hash

That ID is used for output replacement and toolbar state. Rerunning a block updates the existing output panel instead of appending another panel.

## Installation

### Via Community Plugins
loom isn't in the plugin repository by design. It is intended for users that plan to run code in their vaults, therefore we expect them to at least be able to install it manually.

### Manual…
