---
repo: "sandbox0-ai/sandbox0"
name: "sandbox0"
description: "Sandbox for background agents."
readmeQualityOk: true
url: "https://github.com/sandbox0-ai/sandbox0"
homepage: "https://sandbox0.ai/docs"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["agent", "sandbox", "gvisor", "background-agents"]
stars: 87
forks: 6
openIssues: 4
closedIssues: 211
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-09T05:32:44Z"
lastCommitAt: "2026-10-01T10:24:44Z"
lastReleaseAt: "2026-03-22T21:08:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 39
maintainers: ["laotoutou", "langyi-ship-it"]
openGraphImageUrl: "https://opengraph.githubassets.com/a37a3f7a67f4cc684e0a2ab93089f79ec99a9e86138c1abd7797ca7e54407afe/sandbox0-ai/sandbox0"
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
| **Optional memory checkpoints** | Explicit experimental `memory: true` pause and resume can retain…
