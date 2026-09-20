---
repo: "bestagentkits/cloud-harness-mcp"
name: "cloud-harness-mcp"
description: "Remote coding harness exposed as a secure Streamable HTTP MCP server"
readmeQualityOk: true
url: "https://github.com/bestagentkits/cloud-harness-mcp"
homepage: "https://harness.agentkit.best/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [74]
topics: ["ai-agents", "cloud", "harness", "harness-engineering"]
stars: 9
forks: 1
openIssues: 20
closedIssues: 45
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-16T12:26:12Z"
lastCommitAt: "2026-09-20T08:47:14Z"
lastReleaseAt: "2026-08-18T07:06:36Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 59
maintainers: ["mrgoonie", "semantic-release-bot", "therichardngai-code"]
openGraphImageUrl: "https://opengraph.githubassets.com/354c30321626a79975b21695e4b0a1ad24879036d60d8128752739873d9175b6/bestagentkits/cloud-harness-mcp"
---

# Cloud Harness MCP

Cloud Harness MCP is an MIT-licensed remote coding harness exposed through
authenticated Streamable HTTP MCP. It opens an isolated clone in a
TTL-limited Docker executor and gives a trusted owner or named mutually trusted
operators structured workspace,
file, code-intelligence, command, shell, session, dependency-task, Git,
worktree, skill, hook, memory, and repository-defined deployment tools.

> [!WARNING]
> This is a private service for one security domain. Its operators must trust
> one another because it is intentionally capable of arbitrary command
> execution inside a shared-kernel executor. Principal isolation is not a
> hostile multi-tenant sandbox. Read the [security model](https://github.com/bestagentkits/cloud-harness-mcp/blob/HEAD/docs/security-model.md)
> before operating it.

The Managed OAuth MCP URL is:

```text
https://harness.zuey.me/mcp
```

Static-header clients use dashboard-managed API keys at the separate gateway:

```text
https://api.harness.zuey.me/mcp
```

## Architecture

MCP is the northbound control protocol; the harness is the execution runtime.
The split keeps Internet-facing request handling away from Docker authority and
keeps…
