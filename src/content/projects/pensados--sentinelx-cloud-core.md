---
repo: "pensados/sentinelx-cloud-core"
name: "sentinelx-cloud-core"
description: "SentinelX agent: outbound-only agent that exposes your Linux, macOS, and Windows servers as MCP tools to Claude.ai and ChatGPT"
readmeQualityOk: true
url: "https://github.com/pensados/sentinelx-cloud-core"
homepage: "https://mcp.sentinelx.app"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent", "chatgpt", "claude", "devops", "infrastructure", "linux", "llm-tools", "mcp", "sentinelx", "websocket"]
stars: 8
forks: 5
openIssues: 7
closedIssues: 33
watchers: 2
contributors: 4
recentReleases: 4
createdAt: "2026-05-01T06:27:26Z"
lastCommitAt: "2026-09-19T01:16:35Z"
lastReleaseAt: "2026-08-13T19:18:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 68
maintainers: ["CarolusX74", "Galactus-Prime", "rogal73"]
openGraphImageUrl: "https://opengraph.githubassets.com/3be898444f74ed92a3caeefff2d971dd5481a887035044de59c8e1d926ebea2f/pensados/sentinelx-cloud-core"
discussionCount: 3
---

# sentinelx-cloud-core

Operate your Linux, macOS, and Windows servers from Claude.ai or ChatGPT — safely. SentinelX gives
your LLM an **allowlisted, auditable** shell: it can only run commands you've
explicitly permitted, filesystem access is gated by a per-path allowlist, and
every action is recorded. No inbound ports — just a single outbound WebSocket.

The security model is the point. Handing an LLM unrestricted shell on a server
you care about is the thing SentinelX is designed to avoid: the allowlist is the
real trust boundary, so the agent can't run — or invent — anything you didn't
allow. This is the agent you install on the host; structured file edits and
service management come with it.

  <br>
  <sub><i>SentinelX in ChatGPT &mdash; it reads the allowlist, runs only what's permitted (<code>df -h</code>, <code>/proc/meminfo</code>), and reports back.</i></sub>
</p>

## Install

Most people start with the one-liner — it auto-detects Linux or macOS:

```bash
curl -fsSL https://get.sentinelx.app | bash
```

**Windows** (PowerShell — needs Python 3.12+ and `git` on `PATH`):

*Service install* — runs as LocalSystem at boot; needs an **elevated** PowerShell:

```powershell
iwr…
