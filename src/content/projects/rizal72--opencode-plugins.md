---
repo: "rizal72/opencode-plugins"
name: "opencode-plugins"
description: "Plugins for OpenCode v2: model prices and credit, live GO usage, plugin auto-update, phone alerts, git status, TPS Meter, session search, and a cup of coffee that keeps your Mac awake ;)"
readmeQualityOk: true
url: "https://github.com/rizal72/opencode-plugins"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["cli", "desktop-app", "opencode", "opencode-plugin", "typescript", "developer-tools", "productivity", "tui"]
stars: 39
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-23T11:57:52Z"
lastCommitAt: "2026-11-23T10:27:10Z"
lastReleaseAt: "2026-11-10T09:42:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["rizal72"]
openGraphImageUrl: "https://opengraph.githubassets.com/62f96ef5e162cfa9988de85f1d5d66024c843434855336f6e66120e93595751c/rizal72/opencode-plugins"
---

# OpenCode plugins

Plugins for OpenCode v2, built for my own workflow and published because they turned out useful to others.
The sources are here to be read and forked.

Each one says what it does in **the terminal**, in **the desktop app**, or in neither (a tool that only the
agent calls). One plugin, one state, two surfaces, GUI and TUI:

| plugin | what it does | TUI | GUI | npm |
|---|---|---|---|---|
| [`@rizal72/oc-models-pro`](https://github.com/rizal72/opencode-plugins/blob/HEAD/plugins/oc-models-pro/README.md) | `/models-pro`: every model with its price, context, intelligence index, tok/s and the Go credit | ✓ | ✓ | ✓ |
| [`@rizal72/oc-budget`](https://github.com/rizal72/opencode-plugins/blob/HEAD/plugins/oc-budget/README.md) | the paying provider's budget: sidebar, footer, `/budget` | sidebar, footer, `/budget` | the Go percentage and its ring in the session header, with a popover | ✓ |
| [`@rizal72/oc-plugin-updates`](https://github.com/rizal72/opencode-plugins/blob/HEAD/plugins/oc-plugin-updates/README.md) | update OpenCode plugins: one by one or all of them at once | a line in the sidebar, and a dialog on `/plugin-updates` | a pill above the composer | ✓ |
