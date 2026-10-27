---
repo: "ai-engineers-guild/ai-stp"
name: "ai-stp"
description: "Build, verify, store, select and install complete AI harness setups. Primary consumer is your agent, through the CLI."
readmeQualityOk: true
url: "https://github.com/ai-engineers-guild/ai-stp"
homepage: "https://ai-stp.aiguild.space"
language: "Python"
languages: ["Python", "TypeScript", "Rust"]
languagePcts: [48, 30, 21]
topics: ["agent-tooling", "ai", "ai-agents", "claude-code", "cli", "codex", "cursor", "developer-tools", "mcp", "python"]
stars: 7
forks: 0
openIssues: 37
closedIssues: 166
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-20T15:35:20Z"
lastCommitAt: "2026-10-27T09:16:24Z"
lastReleaseAt: "2026-09-22T18:43:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 62
maintainers: ["rldyourmnd"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f813eaeb1d3c888cc54c10070e4d8b8e297a785afdb46198ea7574b26cc5c47/ai-engineers-guild/ai-stp"
---

# ai-stp

[Русский](https://github.com/ai-engineers-guild/ai-stp/blob/HEAD/README.ru.md) · [Catalog](https://ai-stp.aiguild.space) ·
[CLI releases](https://github.com/ai-engineers-guild/ai-stp/releases?q=cli-v)

ai-stp is a Rust CLI for creating, validating, selecting and installing complete
AI harness configurations. The primary consumer is your coding agent. Local work
needs no account, Python runtime or model key. The web provides accounts and the
public catalog; the CLI remains the engine.

## Start

Download a native archive, verify its checksum and GitHub attestation, and follow
[installation and state setup](https://github.com/ai-engineers-guild/ai-stp/blob/HEAD/apps/cli/README.md#install-and-update).

```sh
ai-stp init --credential-store os_keyring --json
ai-stp task intents --json
ai-stp help --agent --json
```

Existing Python state requires the explicit in-place transfer described in the
[CLI guide](https://github.com/ai-engineers-guild/ai-stp/blob/HEAD/apps/cli/README.md#state-and-first-run). Install from source with
`cargo install ai-stp-cli --locked`, or use `uv tool install ai-stp` /
`pip install ai-stp` for the same executable in a native wheel. The older…
