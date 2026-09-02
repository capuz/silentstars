---
repo: "sandbox0-ai/sandbox0"
name: "sandbox0"
description: "AI agent sandbox"
readmeQualityOk: true
url: "https://github.com/sandbox0-ai/sandbox0"
homepage: "https://sandbox0.ai/docs"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["agent", "k8s", "sandbox", "gvisor", "managed-agents"]
stars: 82
forks: 6
openIssues: 8
closedIssues: 207
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-09T05:32:44Z"
lastCommitAt: "2026-09-02T08:04:07Z"
lastReleaseAt: "2026-03-22T21:08:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 38
maintainers: ["laotoutou", "langyi-ship-it"]
openGraphImageUrl: "https://opengraph.githubassets.com/802133f1bcc42a4ddac92866c5df2855f3abf1f8fb7eb5d0bcce2d2c1387b814/sandbox0-ai/sandbox0"
---

</p>

</p>

# Sandbox0

**Persistent, encrypted sandboxes for long-running AI agents, scheduled by Nomad and isolated by gVisor.**

Sandbox0 is an open-source runtime for platforms that need to execute untrusted
code without treating every workspace as disposable. A physical runtime
allocation is replaceable; the sandbox identity and writable RootFS are
durable.

Sandbox0 Cloud uses `https://api.sandbox0.ai` for sandboxes, templates,
credentials, and team-scoped API keys.

> Sandbox0 is under active development. Prefer the SDKs and `s0` CLI over
> hardcoded HTTP paths, and check the docs before depending on beta surfaces.

## Why Sandbox0

| Differentiator | What it means |
| --- | --- |
| **Storage and compute are separated** | Writable RootFS generations are application-encrypted and stored in S3-compatible object storage. Compute nodes keep disposable caches, not the durable source of truth. |
| **The sandbox lifetime is policy-controlled** | `ttl` and `hard_ttl` default to `0` (disabled). Pause idle compute and later resume the same sandbox identity, or keep it running. |
| **gVisor isolation** | Stock `runsc` provides a per-sandbox application-kernel boundary on dedicated…
