---
repo: "svayatta/agent-custody"
name: "agent-custody"
description: "Proof of what your AI agents did: signed receipts for every tool call, Cedar policy at an MCP gateway, a tamper-evident log, and a browser verifier"
readmeQualityOk: true
url: "https://github.com/svayatta/agent-custody"
homepage: "https://agent-custody.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai-agents", "audit", "cedar", "mcp", "provenance", "python", "transparency-log", "typescript"]
stars: 8
forks: 0
openIssues: 14
closedIssues: 47
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-04T06:48:29Z"
lastCommitAt: "2026-10-23T09:32:47Z"
status: "newborn"
tags: ["hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 52
maintainers: ["ch4r10t33r", "0xAnto", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3af3f9573dc0b008a12420eb5572d1a35436f26a0af06999577bc4cb93c7cd8/svayatta/agent-custody"
---

# agent-custody

Proof of what your AI agents did. Every tool call an agent makes through the gateway becomes a signed record of who authorized it, what the agent saw, what it did, and what depended on it, checkable by anyone with the public keys. What each check proves, and against whom, is [a table](https://github.com/svayatta/agent-custody/blob/HEAD/packages/receipts/README.md#what-a-receipt-proves-and-what-it-does-not), not a slogan.

It is a chain of custody for both what an agent does and what it believes: authorize, execute, record, verify, trace, remediate. The agent is not trusted. The layer around it is, and every record says exactly how far that trust extends.

## Packages

| package | what it is | status |
| --- | --- | --- |
| [`@agent-custody/receipts`](https://github.com/svayatta/agent-custody/blob/HEAD/packages/receipts/README.md) | Signed receipts for tool calls: an MCP gateway with Cedar policy and a Merkle transparency log, an in-process SDK with framework adapters, and an offline verifier | working, thirty runnable tutorials |
| [`agent-custody` on PyPI](https://github.com/svayatta/agent-custody/blob/HEAD/packages/python/README.md) | The Python client of the…
