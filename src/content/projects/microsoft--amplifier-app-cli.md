---
repo: "microsoft/amplifier-app-cli"
name: "amplifier-app-cli"
description: "Reference implementation of CLI interface for Amplifier project"
readmeQualityOk: true
url: "https://github.com/microsoft/amplifier-app-cli"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 18
forks: 28
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 10000
recentReleases: 0
createdAt: "2025-10-08T20:03:06Z"
lastCommitAt: "2026-08-03T06:45:26Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 63
maintainers: ["bkrabach", "sadlilas", "colombod"]
openGraphImageUrl: "https://opengraph.githubassets.com/932db97257e3e522f87505e1570e25165ccdf66f447f38a743920f109d20e756/microsoft/amplifier-app-cli"
---

# Amplifier CLI

Command-line interface for the Amplifier AI-powered modular development platform.

> **Note**: This is a **reference implementation** of an Amplifier CLI. It works with [amplifier-core](https://github.com/microsoft/amplifier-core) and demonstrates how to build a CLI around the kernel. You can use this as-is, fork it, or build your own CLI using the core.

## Installation

### For Users

```bash
# Try without installing
uvx --from git+https://github.com/microsoft/amplifier amplifier

# Install globally
uv tool install git+https://github.com/microsoft/amplifier
```

## Quick Start

```bash
# First-time setup — opens a combined dashboard to add providers,
# select a routing matrix, and verify configuration (auto-runs if no config)
amplifier init

# Tip: Set environment variables for faster setup
# export ANTHROPIC_API_KEY="your-key"
# The dashboard detects env vars and shows them as defaults

# Install shell completion (optional, one-time setup)
amplifier --install-completion

# Single command (uses anchors bundle by default)
amplifier run "Create a Python function to calculate fibonacci numbers"

# Single command via stdin (useful for scripts/pipelines)
echo…
