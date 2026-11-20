---
repo: "Kromatic-Innovation/athenaeum"
name: "athenaeum"
description: "Open source knowledge management pipeline — passive recall, append-only intake, tiered compilation, configurable schemas"
readmeQualityOk: true
url: "https://github.com/Kromatic-Innovation/athenaeum"
homepage: "https://kromatic.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai", "claude-code", "knowledge-management", "llm", "mcp", "memory", "python"]
stars: 13
forks: 4
openIssues: 59
closedIssues: 1517
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-16T20:45:32Z"
lastCommitAt: "2026-11-20T11:49:01Z"
lastReleaseAt: "2026-07-04T19:57:55Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["hestia-lanes-agent[bot]", "occam-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/20aad8cf9737803811ec13caf22b264ce775f8d7d32b0d94a2d68eaad324513e/Kromatic-Innovation/athenaeum"
---

# Athenaeum

**Compiled, provenance-carrying memory for AI agents whose knowledge has outgrown a flat memory file.**

## Quick start

```bash
uv tool install --python 3.13 'athenaeum[mcp]'
athenaeum --version
athenaeum test-mcp    # smoke-tests remember/recall against a scratch dir
```

**That block needs no API key.** `test-mcp` runs against a scratch directory,
so you can confirm the install works before wiring anything up or spending API
budget. Python 3.13+ is required (`--python 3.13` lets `uv` fetch it if needed)
and `git` must be installed. Compiling later needs either `ANTHROPIC_API_KEY`
set or a logged-in `claude` CLI.
