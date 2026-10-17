---
repo: "jentic/jentic-one"
name: "jentic-one"
description: "Self-hosted execution layer for AI agents: connect any agent to real APIs, scope exactly what it can touch, and keep credentials out of the agent's hands."
readmeQualityOk: true
url: "https://github.com/jentic/jentic-one"
homepage: "https://jentic.com"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [52, 29]
topics: ["credential-manager", "openclaw", "agent-infrastructure", "agentic", "anthropic", "audit", "broker", "claude", "codex", "credential"]
stars: 186
forks: 24
openIssues: 223
closedIssues: 362
watchers: 1
contributors: 20
recentReleases: 0
createdAt: "2026-03-19T17:47:41Z"
lastCommitAt: "2026-10-17T07:58:30Z"
lastReleaseAt: "2026-07-09T14:00:55Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 91
undervaluedScore: 30
maintainers: ["ren-jentic", "dependabot[bot]", "jentic-one-releaser[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f2032331a4da33501cec56dd18e129e5f6a71d553e5249b65eedfeb74540380/jentic/jentic-one"
discussionCount: 2
---

Connect an agent to any API you need, and enforce exactly what it is allowed to call.

> [!NOTE]
> **Public Beta.** Schemas and CLI commands can change between 0.x releases. Pin a version if
> you need stability. Contributions are welcome: see [CONTRIBUTING.md](https://github.com/jentic/jentic-one/blob/HEAD/CONTRIBUTING.md) and the
> [open issues](https://github.com/jentic/jentic-one/issues).

## What Jentic One is

Giving an agent API access normally means giving it an API key. Jentic One removes that step.
Register the APIs an agent may use, store the credentials once, and the agent makes its calls through the Broker. The Broker checks the agent's permissions, attaches the credential at execution time, and writes an execution record. Your agent never sees your keys.

Agents integrate through the `jentic` CLI, a generated skill, the local `jentic mcp` server,
or plain HTTP. Every path terminates at the credential-injecting Broker: the MCP server runs beside the
agent as a thin client and holds no upstream credentials — those never leave your Broker.

**Who it's for:** developers running a coding agent locally (Claude Code,
Codex, Cursor, Cline, or one you built) that needs real…
