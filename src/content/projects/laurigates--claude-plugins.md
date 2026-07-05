---
repo: "laurigates/claude-plugins"
name: "claude-plugins"
description: "Claude Code plugins for development workflows"
readmeQualityOk: true
url: "https://github.com/laurigates/claude-plugins"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [59, 38]
topics: ["claude-code", "managed-by-opentofu", "plugins"]
stars: 43
forks: 7
openIssues: 22
closedIssues: 282
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-16T11:24:04Z"
lastCommitAt: "2026-07-05T06:33:58Z"
lastReleaseAt: "2025-12-28T06:21:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 40
maintainers: ["laurigates", "laurigates-release-please[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c32fc258e8b7eacf58fd2db052e75040cdfb0a0831efbf71656636a0f0bfd9e/laurigates/claude-plugins"
---

# Claude Plugins

> Experimental testing harness lives under experiments/claude-probe/.

A curated collection of 44 Claude Code plugins providing 380+ skills and 21 agents for development workflows.

## Install the Marketplace

Install the full plugin collection as a marketplace:

```bash
claude plugin install laurigates/claude-plugins
```

This registers all 44 plugins. You can then enable individual plugins as needed.

### Install Individual Plugins

If you prefer to install plugins one at a time:

```bash
claude plugin install laurigates-claude-plugins/<plugin-name>
```

For example:

```bash
claude plugin install laurigates-claude-plugins/git-plugin
claude plugin install laurigates-claude-plugins/python-plugin
claude plugin install laurigates-claude-plugins/testing-plugin
```

## Getting Started

1. **Install the marketplace** using the command above
2. **Run a health check** — `/health:check` then `/health:audit` to diagnose your setup and get plugin recommendations for your stack
3. **Follow the tiered setup** — The [Plugin Map](https://github.com/laurigates/claude-plugins/blob/HEAD/docs/PLUGIN-MAP.md) provides a recommended install order (Tier 0 foundation through Tier 3+…
