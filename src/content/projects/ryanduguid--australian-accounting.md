---
repo: "ryanduguid/australian-accounting"
name: "australian-accounting"
description: "Local engines for ATO benchmarks, Payday Super and Division 7A loans, served by the aus-accounting-mcp server. Synthetic data only."
readmeQualityOk: true
url: "https://github.com/ryanduguid/australian-accounting"
homepage: "https://duguid.com.au/tools/australian-tax-ai-agents/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["ato-benchmarks", "australian-tax", "payday-super", "ato", "python", "accounting-ai", "agent-skills", "claude-code", "codex", "mcp"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 7
createdAt: "2026-08-21T12:21:05Z"
lastCommitAt: "2026-11-27T16:30:10Z"
lastReleaseAt: "2026-09-02T13:18:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["ryanduguid", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1341781147/8ae39863-9783-4236-a795-b7b1b1870cc9"
---

[Try one contribution](#try-one-contribution) · [Next examples](#choose-the-next-example) · [MCP server](#use-aus-accounting-mcp) · [Components](#components) · [Licence](#licence)

```bash
claude mcp add --scope user aus-accounting -- uvx --from 'aus-accounting-mcp==0.13.0' aus-accounting-mcp
```

That connects Claude Code; it needs Python 3.14+ and [uv](https://docs.astral.sh/uv/), and no API key. The tax worksheets also need the [australian-tax-calculators 1.4.0 executable](https://github.com/ryanduguid/australian-accounting/releases/tag/australian-tax-calculators/v1.4.0) on `PATH` ([how](https://github.com/ryanduguid/australian-accounting/blob/HEAD/apps/aus-accounting-mcp/README.md#install)); every other tool works without it. For Claude Desktop, download the `.mcpb` file from the [bundle releases](https://github.com/ryanduguid/australian-accounting/releases?q=aus-accounting-mcp-bundle&expanded=true) and open it with Claude Desktop. The server runs on your machine, so ChatGPT connectors and the Claude.ai web app, which accept only remote servers, cannot run it.
