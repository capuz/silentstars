---
repo: "blitzcrieg1/agentmetry"
name: "agentmetry"
description: "Open-source security for AI coding agents: record, detect and block at the tool boundary, with a verifiable audit trail in the SIEM you already run."
readmeQualityOk: true
url: "https://github.com/blitzcrieg1/agentmetry"
homepage: "https://agentmetry.ai"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["ai-agents", "audit-log", "mcp", "agent-monitoring", "ai-security", "claude-code", "cursor", "devsecops", "dlp", "llm-security"]
stars: 47
forks: 5
openIssues: 65
closedIssues: 47
watchers: 2
contributors: 7
recentReleases: 5
createdAt: "2026-07-02T14:57:41Z"
lastCommitAt: "2026-11-24T14:10:26Z"
lastReleaseAt: "2026-10-08T14:17:10Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 40
maintainers: ["blitzcrieg1", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d05e69011848771271ea1ff51f4d5c4e5c0323d1cd014952d8c5b21d1b21797/blitzcrieg1/agentmetry"
fundingLinks: ["GITHUB:https://github.com/blitzcrieg1"]
discussionCount: 6
---

Agentmetry records tool events reported by supported agent hooks and wrapped stdio MCP servers. It flags risky sequences, can block calls at supported hooks when you enable blocking, and keeps a verifiable audit trail you can forward to your SIEM.</p>

---

Public alpha. Capture, sequence detection, and SIEM forwarding work. APIs and hook payloads can still change.

## Who it is for

Security engineers and developers who want a record of what a coding agent did at the tool boundary: which agent, which session, which call, in what order.

It is a sensor. The open-source package is not a console. `agentmetry dashboard` reads the trail on this machine. Fleet questions are answered in the SIEM you forward to. A hosted fleet console is allowed for Agentmetry Enterprise. It exists as a prototype that runs on localhost and is not offered as a hosted service. The sensor never needs that service to record or to forward. See [open-core split](https://github.com/blitzcrieg1/agentmetry/blob/HEAD/docs/commercial/open-core-split.md).
