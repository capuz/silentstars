---
repo: "sunglasses-dev/sunglasses"
name: "sunglasses"
description: "Open source input firewall for AI agents, beta. A local scanner checks text, code, PDFs, images, QR codes, audio and video with 1,554 patterns across 118 categories and reports findings and incomplete scans. A Claude Code hook blocks credential leaks and policy violations before tools run."
readmeQualityOk: true
url: "https://github.com/sunglasses-dev/sunglasses"
homepage: "https://sunglasses.dev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-security", "ai-agents", "ai-security", "cybersecurity", "llm-security", "open-source-ai", "prompt-injection", "supply-chain-security", "ai-agent-security", "ai-safety"]
stars: 9
forks: 3
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-03-30T07:21:22Z"
lastCommitAt: "2026-10-06T10:42:34Z"
lastReleaseAt: "2026-08-01T17:11:31Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 86
undervaluedScore: 58
maintainers: ["azrollin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1195908149/3f120293-e7a2-40a1-8ce9-34565efca112"
discussionCount: 1
---

# SUNGLASSES

**Open source input firewall for AI agents, beta.** A local scanner checks text, code, PDFs, images, QR codes, audio and video with 1,567 patterns across 117 categories and reports findings and incomplete scans. A Claude Code hook blocks secret material in tool calls and the paths and hosts your policy lists, before a tool runs, best effort under its 10 second timeout.

**What works today**
- Scan text, files, PDFs, images and QR codes from the CLI or from Python
- An MCP server your agent calls, and a GitHub Action that scans every pull request
- A Claude Code hook that blocks the credential paths and policy violations your policy lists, before a tool runs
- A local MCP proxy that refuses every `tools/list` and `tools/call` until a person
  approves the server at an interactive terminal. **Once approved, it withholds a
  credential in a tool call or in a tool result, which is the credential lane and not
  general inspection of everything a tool returns.** Installing it is not protection
  on its own. See [What the proxy enforces](#what-the-proxy-enforces).
- Outside that lane this reads input, so a clean result is a confidence floor and not a guarantee

Sunglasses…
