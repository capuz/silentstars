---
repo: "mikkovihonen/pa-container"
name: "pa-container"
description: "Containerized environment for running coding agents with auditability on macOS and Linux"
readmeQualityOk: true
url: "https://github.com/mikkovihonen/pa-container"
homepage: "https://mikkovihonen.github.io/pa-container/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["agentic-ai", "agentic-coding", "audit-trail", "containerization", "mitmproxy", "mitmproxy-addons", "pi-coding-agent", "podman", "isolation", "sandbox"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-25T06:07:54Z"
lastCommitAt: "2026-11-13T11:16:59Z"
lastReleaseAt: "2026-07-06T16:06:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 43
maintainers: ["mikkovihonen", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8f9a3e5ec263912904f6729563226accd2bfd331dfa384ef86ee94f8f4b2a24/mikkovihonen/pa-container"
---

# pa-container

A containerized environment for running autonomous coding agents ([Pi](https://pi.dev), [OpenCode](https://github.com/opencode-ai/opencode), [Antigravity](https://antigravity.dev), and [Claude Code](https://claude.com/product/claude-code)) with local large language model (LLM) inference, headless virtual desktop support, and full auditability. A transparent proxy container based on [`mitmproxy`](https://mitmproxy.org) intercepts all HTTP, HTTPS, and DNS traffic from the agent container. It enforces an allowlist and injects secrets when required. It supports macOS, Linux, and WSL2.

## Highlights

- **Sandboxed agent** — The agent container sends all internet traffic **only** through the proxy. It uses an `--internal` network without a gateway. The system denies all other protocols by default.
- **Auditable traffic** — All HTTP, HTTPS, and DNS traffic is intercepted by [`mitmproxy`](https://mitmproxy.org). It uses a hostname **allowlist** and a **token injector**. It saves the traffic to a flow export file for each project.
- **Multi-agent architecture** — Pluggable agent drivers for [Pi](https://pi.dev), [OpenCode](https://github.com/opencode-ai/opencode),…
