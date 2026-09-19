---
repo: "dfridkin/clawops"
name: "clawops"
description: "clawops is a provider-agnostic command-line tool for deploying, configuring, and operating self-hosted OpenClaw instances across AWS, GCP, Azure, and local VMs"
readmeQualityOk: true
url: "https://github.com/dfridkin/clawops"
homepage: "https://clawops.fyi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 5
forks: 0
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-05-04T13:17:32Z"
lastCommitAt: "2026-09-19T01:37:10Z"
lastReleaseAt: "2026-07-28T13:59:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 76
undervaluedScore: 48
maintainers: ["dfridkin"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ef8de79ccab4fd6451542224250433e99ecac2c8f1a24f587083b6ed4d42e87/dfridkin/clawops"
---

# clawops

MCP-native infrastructure ops for OpenClaw, with read-only mode, destructive-action confirmation, and audit logs built in.

**clawops** is a CLI and [MCP](https://modelcontextprotocol.io/) server for deploying and operating
self-hosted [OpenClaw](https://github.com/openclaw/openclaw) instances. Provision on AWS, GCP,
Azure, or any Linux VM, then manage day-to-day operations from the terminal, or let Claude Code
and Cursor drive them through typed MCP tools with explicit safety controls.

---

## What's new in 2.0.1

A patch release, and a large one: in 2.0.0 no cloud deploy succeeded by any path. Every item
below is a fix or an addition in 2.0.1. The reasoning behind each one is in its commit message,
and the decisions that came out of them are in [`docs/decisions/`](https://github.com/dfridkin/clawops/blob/HEAD/docs/decisions/).

### Deploying to a cloud

- `clawops plan` → `clawops apply` provisions a cloud stack and deploys OpenClaw onto it.
- `clawops up` deploys to AWS, GCP and Azure, running the same path as `plan` → `apply`.
- clawops installs the Pulumi CLI it needs into `~/.clawops/.pulumi-cli`, or uses a compatible
  one already on `$PATH` ([ADR…
