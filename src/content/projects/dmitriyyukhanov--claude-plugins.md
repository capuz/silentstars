---
repo: "DmitriyYukhanov/claude-plugins"
name: "claude-plugins"
description: "Personal collection of Claude Code plugins and skills: development workflows, cross-model review, issue-to-PR automation. The same marketplace installs in Codex CLI."
readmeQualityOk: true
url: "https://github.com/DmitriyYukhanov/claude-plugins"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [48, 29]
topics: ["ai", "anthropic", "claude", "claude-code", "claude-code-marketplace", "claude-code-plugin", "developer-tools", "llm", "plugins", "skills"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 25
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-27T12:13:00Z"
lastCommitAt: "2026-08-28T14:35:39Z"
lastReleaseAt: "2026-04-24T11:35:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 46
maintainers: ["DmitriyYukhanov"]
openGraphImageUrl: "https://opengraph.githubassets.com/41cf89e4a42df4b260443cfc0f69f55ce5da50a3ea1a63f3ba3cf5f3ea8d1eae/DmitriyYukhanov/claude-plugins"
---

# Custom Claude Code plugins and skills

Personal collection of Claude Code plugins and skills for structured, high-quality development workflows. Augments the official Claude plugins marketplace. Claude Code is the target these are built and tested against; Codex installs the same marketplace and picks up the skills.

## Installation

### Claude Code

Add this marketplace:

```bash
/plugin marketplace add DmitriyYukhanov/claude-plugins
```

Then install plugins by name. The `@` suffix is the marketplace name `dmitriy-claude-plugins` (from this repo's `marketplace.json`), not the GitHub path:

```bash
/plugin install issue-to-pr@dmitriy-claude-plugins
/plugin install codex-collaboration@dmitriy-claude-plugins
```

You can also run `/plugin` to browse and install interactively.

### Codex CLI

Codex reads this repo's `.claude-plugin/marketplace.json` as-is, so the same marketplace installs there. Needs Codex CLI 0.146 or newer:

```bash
codex plugin marketplace add DmitriyYukhanov/claude-plugins
codex plugin add humanizer@dmitriy-claude-plugins
codex plugin list                  # what each marketplace offers, and what is installed
codex plugin marketplace upgrade   # refresh the…
