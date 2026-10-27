---
repo: "shopwareLabs/ai-coding-tools"
name: "ai-coding-tools"
description: "Claude Code plugin marketplace for Shopware development. Provides MCP servers, skills, agents, hooks, and commands to integrate development tools directly into your AI coding workflow."
readmeQualityOk: true
url: "https://github.com/shopwareLabs/ai-coding-tools"
language: "Shell"
languages: ["Shell"]
languagePcts: [89]
topics: ["anthropic", "claude", "claude-code", "marketplace", "plugins", "shopware", "code-quality", "productivity", "tooling"]
stars: 45
forks: 6
openIssues: 12
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-22T12:04:27Z"
lastCommitAt: "2026-10-27T12:40:19Z"
lastReleaseAt: "2026-04-09T15:08:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 38
maintainers: ["SpiGAndromeda", "renovate[bot]", "umutdogan4291"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1081167424/7855738b-e345-44ae-850b-1a0ba89d7267"
discussionCount: 0
---

# Shopware AI Coding Tools

> **Experimental Community Project**: This repository is maintained by Shopware Labs and is not an official Shopware product. It is not affiliated with, endorsed by, or sponsored by Anthropic or any other AI provider. "Claude" and "Claude Code" are trademarks of Anthropic. This project is provided as-is without warranty.

A [Claude Code plugin marketplace](https://docs.claude.com/en/docs/claude-code/plugins) for Shopware development. Provides development tools, test generation, code research, and more — integrated directly into your Claude Code workflow.

## ⚡ Quick Start

**Requirements:** [Claude Code](https://docs.claude.com/en/docs/claude-code) installed.

Add the marketplace, then install the plugins you need:

```bash
/plugin marketplace add shopwareLabs/ai-coding-tools
/plugin install dev-tooling@shopware-ai-coding-tools
/plugin install plugin-setup@shopware-ai-coding-tools
```

Restart Claude Code after installing plugins that include MCP servers. Once setup is complete, you can uninstall `plugin-setup` to free up description budget (`/plugin uninstall plugin-setup@shopware-ai-coding-tools`).

On OpenAI Codex, add the same marketplace and…
