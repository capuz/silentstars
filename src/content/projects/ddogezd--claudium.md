---
repo: "DdogezD/claudium"
name: "claudium"
description: "The free build of Claude Code."
readmeQualityOk: true
url: "https://github.com/DdogezD/claudium"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 28
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-06T04:26:58Z"
lastCommitAt: "2026-07-14T05:55:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 42
maintainers: ["DdogezD", "paoloanzn"]
openGraphImageUrl: "https://opengraph.githubassets.com/01d1db482971399a3e4167c361d4765127561e01bbaf540b0acbbb4b1da292e9/DdogezD/claudium"
---

# Claudium

All Anthropic OAuth stripped. All telemetry stripped. All injected security-prompt guardrails removed. All experimental features unlocked. One binary, zero callbacks home.

```bash
curl -fsSL https://raw.githubusercontent.com/DdogezD/claudium/main/install.sh | bash
```

> Checks your system, installs Bun if needed, clones, builds with all features enabled, installs `claudium`, and creates a `claudium-bypass` launcher that starts in bypass permission mode. See [API Configuration](#api-configuration) for API setup.

</p>

---

## What is this

This is a clean, buildable fork of Anthropic's [Claude Code](https://docs.anthropic.com/en/docs/claude-code) CLI -- the terminal-native AI coding agent. The upstream source became publicly available on March 31, 2026 through a source map exposure in the npm distribution.

This fork applies six categories of changes on top of that snapshot:

### 1. Privacy-First

Eliminates all tracking and remote-control mechanisms present in the original Claude Code:

- No telemetry -- No unnecessary data is transmitted to Anthropic servers
- No analytics -- No usage tracking or event logging
- No fingerprinting -- No user or environment…
