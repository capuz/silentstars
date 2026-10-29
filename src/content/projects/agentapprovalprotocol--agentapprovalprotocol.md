---
repo: "agentapprovalprotocol/agentapprovalprotocol"
name: "agentapprovalprotocol"
description: "An open protocol for approving AI agent tool calls before they run. Specification, OpenAPI contract, Go adapters and CLI."
readmeQualityOk: true
url: "https://github.com/agentapprovalprotocol/agentapprovalprotocol"
homepage: "https://agentapprovalprotocol.io"
language: "TypeScript"
languages: ["TypeScript", "Go", "Python"]
languagePcts: [34, 30, 28]
topics: ["agent-security", "ai-agents", "approvals", "claude-code", "codex", "golang", "human-in-the-loop", "mcp", "openapi", "specification"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-16T15:34:13Z"
lastCommitAt: "2026-10-29T12:25:14Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 51
maintainers: ["Chrisbattarbee", "ecekyn", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1373258051/6f34bfbe-fe05-497e-8323-f480d02a2308"
---

An open protocol for approving agent actions before they happen.

Agents can write code, issue refunds, send messages and change production systems. Giving them that access means deciding which actions they can take on their own and which need approval.

**Agent Approval Protocol (AAP)** gives agents a common way to request approval before a tool call runs. An adapter connects the software running your agent to an approval provider, which can apply a policy, ask a person to review the action, or combine both.

## One place for approvals across your agents

A coding agent on a developer's laptop, a support agent on an application server and an operations agent on a cloud VM can all use the same approval provider. Your team can manage approval policies, review requests and keep a record of decisions in one place.

The provider can let routine actions proceed automatically and hold riskier ones for review. For example, it might approve looking up a customer's order immediately, but require a person to approve a refund.

Because AAP is an open protocol, you can choose your agents and approval provider independently. Use an existing provider or build one for your own review process.…
