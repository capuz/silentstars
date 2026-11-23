---
repo: "adudley78/credenzo"
name: "credenzo"
description: "Security scanner for MCP (Model Context Protocol) server configurations. Detects prompt injection, credential exposure, supply chain risks, and more."
readmeQualityOk: true
url: "https://github.com/adudley78/credenzo"
homepage: "https://credenzo.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["security", "mcp", "model-context-protocol", "vulnerability-scanner", "ai-security", "prompt-injection", "supply-chain-security", "devsecops", "cli", "python"]
stars: 7
forks: 4
openIssues: 1
closedIssues: 14
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-11T13:14:53Z"
lastCommitAt: "2026-11-23T12:22:36Z"
lastReleaseAt: "2026-05-02T00:27:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 70
maintainers: ["adudley78", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1207831776/fd68d173-efda-412d-b9a5-238f650d7e57"
fundingLinks: ["GITHUB:https://github.com/adudley78"]
discussionCount: 0
---

# Credenzo

**The taste test for agent tools.** Credenzo (formerly mcp-audit) is an offline security scanner and committable lock for the MCP servers your AI coding tools run.

> In 16th-century Italy, a *credenza* was the act of a servant who tasted a lord's food and drink to check for poison. Credenzo is the taster: it does that for the tools your agent consumes.
>
> **mcp-audit is now Credenzo.** The command is `credenzo`. The old command (`mcp-audit`) and the old package (`mcp-audit-scanner`) continue to work, and nothing you have installed or configured breaks.

```bash
pip install credenzo
```

> The CLI command is `credenzo`. `uv tool install credenzo` and `pipx install credenzo` also work.

## Lock the MCP servers you approved

```bash
credenzo lock                      # Write mcp-lock.json, commit it
git add mcp-lock.json && git commit -m "Lock approved MCP servers"

credenzo lock --verify             # ...someone edits a server's config...
```
