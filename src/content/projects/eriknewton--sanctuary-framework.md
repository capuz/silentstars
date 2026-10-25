---
repo: "eriknewton/sanctuary-framework"
name: "sanctuary-framework"
description: "Open source security for AI agents: an OS-enforced egress wall on macOS, and on Ubuntu 24.04 x86-64 via a separate package; keys only the operator holds; a hash-chained audit record. One command wraps Claude Code, Cursor, Hermes, OpenClaw or Cline on tested config paths. No vendor in the path. Claims trace to the Assurance Matrix."
readmeQualityOk: true
url: "https://github.com/eriknewton/sanctuary-framework"
homepage: "https://sanctuaryprotocol.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["agent-infrastructure", "ai-agents", "decentralized-identity", "open-standard", "privacy", "ai-agent-security", "claude-code", "egress-control", "endpoint-security", "mcp"]
stars: 9
forks: 0
openIssues: 5
closedIssues: 11
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-22T19:21:45Z"
lastCommitAt: "2026-10-25T09:02:00Z"
lastReleaseAt: "2026-04-27T01:40:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 54
maintainers: ["eriknewton", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5fb0cbc7edf556309a8fca96e687e4729eca6dd3fea1b40d7abd63ce2289057/eriknewton/sanctuary-framework"
discussionCount: 1
---

# Sanctuary

**Your agent will know you better than you know yourself. Make sure that data stays between you.**

An AI agent running on your machine can do anything your account can do. It holds your credentials, reads your files, and talks to the whole internet, and a single poisoned web page can turn that into exfiltration. Every sandbox on offer today is one the agent, or its vendor, chooses to run inside. That is not a wall. That is a request.

Sanctuary is the wall under the agent, imposed by the operating system under a policy you sign, and it does not depend on the agent's cooperation. The keys never leave hardware you control. What the agent did is written to a hash-chained record you can read. No vendor, including us, sits in the path or can decrypt your state. It works with the harness you already run: Claude Code, Cursor, Hermes, OpenClaw, Cline, or Mastra (fixture-tested only; no live Mastra-agent drill is recorded), on your own machine today, any number of wrapped harnesses behind one persistent dashboard, with wrapping tested on representative harness paths and not proven for every harness version (Assurance Matrix, Agent wrapping, partial); another MCP-compatible…
