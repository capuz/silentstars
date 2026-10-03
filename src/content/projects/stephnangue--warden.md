---
repo: "stephnangue/warden"
name: "warden"
description: "The secure gateway connecting AI agents to enterprise systems."
readmeQualityOk: true
url: "https://github.com/stephnangue/warden"
homepage: "https://wardengateway.com"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["go", "security", "zero-trust", "ai-agents", "credential-management", "egress-gateway", "ai-governance", "ai-auditing", "ai-compliance", "openbao"]
stars: 175
forks: 9
openIssues: 3
closedIssues: 14
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-11-25T23:50:08Z"
lastCommitAt: "2026-10-03T22:03:27Z"
lastReleaseAt: "2026-03-27T21:47:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 38
maintainers: ["stephnangue"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e6627cc027df4cedb8af8959283e8ace055c818a0882b8e9010fee636578ea2/stephnangue/warden"
discussionCount: 0
---

# Warden

**The secure gateway connecting AI agents to the enterprise systems they need to do real work.**

Agents discover what they're allowed to access. Warden brokers every connection. Operators get one control plane for identity, policy, and audit — across every MCP server, cloud, code-host, observability stack, database, and SaaS the agent reaches.

---

## The problem

Agents are useful only when they reach real systems: cloud accounts, code repositories, observability stacks, databases, ITSM, secrets backends. Today, pointing an agent at production means handing it over-scoped, long-lived credentials, with no per-request policy and no identity-tied audit. Each new system is another credential in the agent's environment, governed by nothing in the request path.

The control gap, not the credential, is the headline. MCP servers make it acute — every server wraps one upstream API and holds one credential in process env, so an agent with a dozen tools has a dozen static secrets scattered across a dozen processes, none of them rotating, none of them governed.

## How Warden works

Warden sits in the request path between an agent and the systems it needs. The agent presents its…
