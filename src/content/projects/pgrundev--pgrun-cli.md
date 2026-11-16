---
repo: "pgrundev/pgrun-cli"
name: "pgrun-cli"
description: "Create, use, and delete disposable PGRun Postgres branches — the pgrun CLI + MCP server for coding agents"
readmeQualityOk: true
url: "https://github.com/pgrundev/pgrun-cli"
homepage: "https://pgrun.dev"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-09-03T19:41:22Z"
lastCommitAt: "2026-11-16T04:29:51Z"
lastReleaseAt: "2026-10-22T00:20:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 48
maintainers: ["alexshapalov"]
openGraphImageUrl: "https://opengraph.githubassets.com/21edb84a9e98f7ce44a58976f98e728750201bab07f78d2f54199810c73bb8c1/pgrundev/pgrun-cli"
---

# pgrun

Create, use, and delete disposable [PGRun](https://pgrun.dev) Postgres
branches — from the command line or as an MCP tool. One static Go binary,
stdlib only, no external dependencies.

A branch is a real, connectable Postgres: copy-on-write off a project's base
branch, ready in about the time a normal database takes to boot, gone the
moment you delete it or its TTL expires.

Full guide — Safe Copy setup, connecting, limits, CI, troubleshooting:
[pgrun.dev/docs/branches](https://pgrun.dev/docs/branches).

## Quickstart

The agent-first path — three commands, then hand the work to Claude Code:

```sh
pgrun auth login       # opens your browser to authorize; --paste to paste a token instead
pgrun setup            # installs the pgrun-branching skill and PgBot (idempotent; --json for agents)
claude                 # then: "Add an index to users.email and test it on a pgrun branch"
```

`pgrun setup` is the one install path, whether you run it or the skill asks an agent to:
it installs or refreshes the skill (`--agent claude,codex`, `--project`, `--dir`), makes
[PgBot](https://github.com/pgrundev/pgbot) available (keeps a compatible `pgbot` already on
your PATH, else downloads…
