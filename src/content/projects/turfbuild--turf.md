---
repo: "turfbuild/turf"
name: "turf"
description: "Turf — a drop-in replacement for Terraform with agentic superpowers. Alpha binary releases (turf CLI + turf-mcp-server)."
readmeQualityOk: true
url: "https://github.com/turfbuild/turf"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 7
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-01T00:08:25Z"
lastCommitAt: "2026-08-09T04:46:09Z"
lastReleaseAt: "2026-07-08T15:48:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 45
maintainers: ["EronWright", "renovate[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7b0568dd71c417d7898004b557225d469b6baf2a5901db9b45459e495ddbb70/turfbuild/turf"
discussionCount: 5
---

# turf

A reference AI-powered infrastructure management CLI built on the **turf MCP
server** — a drop-in replacement for
Terraform with agentic superpowers: full support for Terraform HCL and the
module registry, driven by an AI agent. `turf` drives the server through
[cagent](https://github.com/docker/docker-agent) to plan and apply changes against
any OpenTofu provider.

It is intended as a showcase: a small, readable example of how to wrap the
turf MCP server in a polished UX. The server is the product; this CLI is one
way to consume it. Here's the CLI in action:

<video src="https://github.com/user-attachments/assets/49d5d672-1c0e-41e2-a6d8-76c348dc6d5b" poster="https://github.com/user-attachments/assets/66f701a5-37cc-4ef8-9c2b-c1a8da61a21e" controls muted playsinline width="100%"></video>

## Install

### Homebrew (recommended) — macOS and Linux

Installs both the `turf` CLI and the `turf-mcp-server` binary from the alpha
release:

```sh
brew install turfbuild/tap/turf
turf --version
which turf-mcp-server
```

> **Alpha / pre-release.** This is early evaluation software. Expect rough
> edges, and please don't redistribute the binaries.

### From source

Build just the CLI…
