---
repo: "turfbuild/turf"
name: "turf"
description: "Turf — a drop-in replacement for Terraform with agentic superpowers. Alpha binary releases (turf CLI + turf-mcp-server)."
readmeQualityOk: true
url: "https://github.com/turfbuild/turf"
homepage: "https://turf.build"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["ai-agents", "devops", "infrastructure-as-code", "mcp", "mcp-server", "opentofu", "terraform"]
stars: 11
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-01T00:08:25Z"
lastCommitAt: "2026-11-26T23:38:45Z"
lastReleaseAt: "2026-07-08T15:48:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 38
maintainers: ["EronWright", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe8cc086457ec65a77c341fd41c549d3809e4c158c31e57b8b6f4b3014a293f9/turfbuild/turf"
---

# turf

An AI-powered infrastructure management CLI built on the **turf MCP
server** — the Terraform-compatible infrastructure engine built for AI
agents: full support for Terraform HCL and the module registry, driven by
an AI agent and governed by the plan. `turf` drives the server through
[cagent](https://github.com/docker/docker-agent) to plan and apply changes against
any OpenTofu provider.

It is intended as a showcase: a small, readable example of how to wrap the
turf MCP server in a polished UX. The server is the product; this CLI is one
way to consume it. Here's the CLI in action:

## Install

### npx: the MCP server, in the agent you already use

```sh
npx add-mcp@2 @turfbuild/turf-mcp-server --name turf -g
# the first start downloads Turf: about a minute
npx -y @turfbuild/turf-mcp-server license accept
```
