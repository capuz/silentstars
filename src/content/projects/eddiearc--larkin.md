---
repo: "eddiearc/larkin"
name: "larkin"
description: "Local runtime host connecting coding agents to Feishu"
readmeQualityOk: true
url: "https://github.com/eddiearc/larkin"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [60, 39]
stars: 5
forks: 0
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-26T17:14:53Z"
lastCommitAt: "2026-08-01T06:14:29Z"
lastReleaseAt: "2026-07-31T17:09:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 49
maintainers: ["eddiearc"]
openGraphImageUrl: "https://opengraph.githubassets.com/c62cbf57dd050c4c3cc804343aa8102722dc6697fbec94c90b42fc89089a7843/eddiearc/larkin"
---

# Larkin

Larkin connects Codex, Claude Code, and Pi agent runtimes to Feishu. It provides a local runtime host, persistent sessions, reminders, interactive messages, and a local dashboard.

## Requirements

- A supported macOS or Linux system
- `lark-cli`
- At least one supported agent runtime and its authentication
- Bun 1.3.14 when building from source

## Usage

```bash
larkin setup
larkin start
larkin status
```

Run `larkin --help` or `larkin config --help` for the available commands and configuration options. Local configuration is stored under `~/.larkin` by default; set `LARKIN_CONFIG_DIR` to use another directory.

## Development

```bash
bun install --frozen-lockfile
bun run build
bun test
```

Use `bun run publication:check:tree` to verify the repository publication boundary and `bun run licenses:check` to verify the runtime-only third-party notice generator.

## License and security

Larkin is licensed under the [Apache License 2.0](https://github.com/eddiearc/larkin/blob/HEAD/LICENSE). Runtime dependency notices are generated and included with every release. See [CONTRIBUTING.md](https://github.com/eddiearc/larkin/blob/HEAD/CONTRIBUTING.md) before submitting changes…
