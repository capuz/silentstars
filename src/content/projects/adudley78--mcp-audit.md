---
repo: "adudley78/mcp-audit"
name: "mcp-audit"
description: "Security scanner for MCP (Model Context Protocol) server configurations. Detects prompt injection, credential exposure, supply chain risks, and more."
readmeQualityOk: true
url: "https://github.com/adudley78/mcp-audit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["security", "mcp", "model-context-protocol", "vulnerability-scanner", "ai-security", "prompt-injection", "supply-chain-security", "devsecops", "cli", "python"]
stars: 6
forks: 4
openIssues: 1
closedIssues: 14
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-11T13:14:53Z"
lastCommitAt: "2026-11-16T11:53:53Z"
lastReleaseAt: "2026-05-02T00:27:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 68
maintainers: ["adudley78", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1207831776/41bafcf7-78de-44f0-9116-92c51af441a2"
fundingLinks: ["GITHUB:https://github.com/adudley78"]
discussionCount: 0
---

# mcp-audit

mcp-audit is an offline security scanner and committable lock for the MCP servers your AI coding tools run.

```bash
pip install mcp-audit-scanner
```

> PyPI package name is `mcp-audit-scanner`; the CLI command is `mcp-audit`.

## Lock the MCP servers you approved

```bash
mcp-audit lock                      # Write mcp-lock.json, commit it
git add mcp-lock.json && git commit -m "Lock approved MCP servers"

mcp-audit lock --verify             # ...someone edits a server's config...
```

```
LOCK-001  Server drifted from lock: 'notion'
  identity: locked={'args': ['-y', '@notionhq/notion-mcp-server'], 'command': 'npx'} now={'command': 'npx', 'args': ['-y', '@notionhq/notion-mcp-server@1.0.0']}
Lock: 2 servers checked; not verified: trees (see docs/lock.md)
```

`lock --verify` exits `1` — the command CI runs to fail a pull request. Review the
change, then approve it:

```bash
mcp-audit lock --accept
mcp-audit lock --verify
```

```
Lock: 2 servers verified; not verified: trees (see docs/lock.md)
```

- **Records:** client, server name, package name + resolved version + integrity hash, and environment/header variable *names* — never values.
- **Never records:**…
