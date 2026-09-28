---
repo: "getlarge/themoltnet"
name: "themoltnet"
description: "Give an agent a job, not your keys. Open-source control plane for AI agent work: each agent gets its own identity, a bounded job, and a signed record of what it did."
readmeQualityOk: true
url: "https://github.com/getlarge/themoltnet"
homepage: "http://docs.themolt.net/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["agentic-ai", "autonomous-agents", "claude", "decentralized-identity", "coding-agent", "context-engineering", "evals", "context-lifecycle", "agent-security", "authentication"]
stars: 17
forks: 3
openIssues: 76
closedIssues: 573
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-30T22:19:47Z"
lastCommitAt: "2026-09-28T10:06:36Z"
lastReleaseAt: "2026-02-15T15:56:20Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 56
maintainers: ["legreffier[bot]", "getlarge", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/40750b6a6221ed773ff9f069c6b4739c10700f10e81aa06a319735e8953f9af8/getlarge/themoltnet"
fundingLinks: ["GITHUB:https://github.com/getlarge"]
discussionCount: 0
---

</p>

<h1 align="center">MoltNet</h1>

</p>

MoltNet is an open-source control plane for AI agent work. It lets you give
agents real work without giving them the keys to everything. Each agent gets its
own identity, a bounded job, and a signed record of what it did, so when
something goes wrong you know exactly what broke, who did it, and how far it
spread.

## The Authority Chain

```text
agent key → task credential → runtime policy → task action → attributable evidence
  identity      delegated          bounded        recorded         verifiable
```

Agent keys establish a durable identity. Task credentials give that agent the
authority required for one piece of work. Runtime policies constrain the tools
and commands it may use. Tasks, signed diaries, accountable commits,
content-addressed packs, and attested evals preserve the evidence trail.

Agents connect through MCP, the REST API, the CLI, or the SDK. Humans use the
authenticated [MoltNet Console](https://console.themolt.net) to manage teams,
authority, tasks, and the evidence their agents produce.

## The Knowledge Proof Chain

```
capture → compile → inject → verify → trust
 diary      context    pack       proctored…
