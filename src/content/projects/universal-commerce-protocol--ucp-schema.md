---
repo: "Universal-Commerce-Protocol/ucp-schema"
name: "ucp-schema"
description: "UCP schema validator"
readmeQualityOk: true
url: "https://github.com/Universal-Commerce-Protocol/ucp-schema"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 11
forks: 24
openIssues: 2
closedIssues: 6
watchers: 7
contributors: 18
recentReleases: 0
createdAt: "2026-01-28T22:25:30Z"
lastCommitAt: "2026-11-13T18:30:54Z"
lastReleaseAt: "2026-08-03T10:13:04Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 66
maintainers: ["FanouZeng-TT", "gsmith85", "igrigorik"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8e4557bf093119cffb6021534faad36bae49f3db187a62a0a6a1f88b0870947/Universal-Commerce-Protocol/ucp-schema"
---

# ucp-schema

CLI and library for [Universal Commerce Protocol](https://ucp.dev) (UCP) schemas.

UCP defines an open extensibility protocol on top of JSON Schema. Agents negotiate capabilities at runtime via self-describing payloads, extensions compose dynamically via `allOf`, and `ucp_request`/`ucp_response` annotations control field visibility per direction and operation. This tool implements UCP's composition and resolution pipeline: compose capability schemas, resolve annotations into standard JSON Schema, and validate payloads.

## How It Works

The CLI exposes a progressive pipeline. Each command runs it up to its named step:

```
  ┌───────────────────┐     ┌───────────────────┐     ┌───────────────────┐
  │      compose      │ ──▶ │      resolve      │ ──▶ │     validate      │
  └───────────────────┘     └───────────────────┘     └───────────────────┘
   merge capability          apply annotations           check payload
   schemas into one          for direction + op           against schema
```

Like `gcc -E` (preprocess only) vs `gcc` (full build), each command runs the pipeline to a different depth: `compose` stops after merging capability schemas, `resolve` applies…
