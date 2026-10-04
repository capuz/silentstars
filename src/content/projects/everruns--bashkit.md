---
repo: "everruns/bashkit"
name: "bashkit"
description: "Virtual Bash interpreter with a virtual file system for multi-tenant environments."
readmeQualityOk: true
url: "https://github.com/everruns/bashkit"
homepage: "https://bashkit.sh/"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [65, 21]
topics: ["agents", "bash", "everruns"]
stars: 289
forks: 29
openIssues: 0
closedIssues: 563
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-01-31T00:05:52Z"
lastCommitAt: "2026-10-04T10:03:19Z"
lastReleaseAt: "2026-03-15T03:18:23Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 33
maintainers: ["chaliy", "dependabot[bot]", "claude[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5bff2457bc3d0f3ab34c8e444dd105d5038ee4f55d1d3e0fce1890e90e9235b/everruns/bashkit"
fundingLinks: ["GITHUB:https://github.com/chaliy"]
---

# Bashkit

Awesomely fast virtual sandbox with bash and file system. Written in Rust.

Homepage: [bashkit.sh](https://bashkit.sh)

## Features

- **Secure by default** - No process spawning, no filesystem access, no network access unless explicitly enabled. [280+ threats](https://github.com/everruns/bashkit/blob/HEAD/knowledge/security/threat-model.md) analyzed and mitigated
- **POSIX compliant** - Substantial IEEE 1003.1-2024 Shell Command Language compliance
- **Sandboxed, in-process execution** - All 167 commands reimplemented in Rust, no `fork`/`exec`
- **Virtual filesystem** - InMemoryFs, OverlayFs, MountableFs with optional RealFs backend (`realfs` feature)
- **Resource limits** - Command count, loop iterations, function depth, output size, filesystem size, parser fuel
- **Network allowlist** - HTTP access denied by default, per-domain control
- **Multi-tenant isolation** - Each interpreter instance is fully independent
- **Custom builtins** - Extend with domain-specific commands
- **LLM tool contract** - `BashTool` with discovery metadata, streaming output, and system prompts
- **Script analysis** - Inspect commands, arguments, and file writes *before* running, to drive…
