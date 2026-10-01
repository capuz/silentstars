---
repo: "aterrylu/autonomOS"
name: "autonomOS"
description: "Multi-agent harness for CLI coding agents — orchestrate Claude Code, Codex, and more."
readmeQualityOk: true
url: "https://github.com/aterrylu/autonomOS"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["agent-orchestration", "ai-agents", "claude", "claude-code", "developer-tools", "mcp", "mission-control", "self-hosted"]
stars: 8
forks: 3
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2026-03-04T07:55:47Z"
lastCommitAt: "2026-10-01T10:24:31Z"
lastReleaseAt: "2026-09-19T08:33:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 59
maintainers: ["aterrylu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1172350055/29bda840-8734-429f-99c8-0ee7d60dacfc"
---

# autonomOS

**Multi-agent harness for CLI coding agents — orchestrate Claude Code, Codex, and Gemini CLI.**

**[autonomos.terrylu.cloud](https://autonomos.terrylu.cloud)**

</div>

## Why autonomOS

Running several coding-CLI agents today means a grid of terminal tabs you babysit — copy-pasting context between them, relaying every hand-off by hand. autonomOS turns them into a **team**: one shared message bus, one shared MCP toolbelt, and an org chart of who reports to whom, so agents coordinate *directly* across whichever CLI they run.

- **A message bus for coding agents** — a URI gateway (`agent://reviewer`) routes messages between running sessions, and tells the sender whether the message actually landed; a Claude Code agent hands off to a Codex one with no human relay.
- **Cross-CLI by design** — Claude Code, Codex, and Gemini CLI share one MCP toolbelt and one address space, so orchestration is written once and works across every runtime.
- **An org chart, like a company** — agents organize into managers and reports; work delegates *down* the tree and escalates *up* it, on a hierarchy you shape at runtime — not a flat pool of tabs.
- **Coordination you can watch** —…
