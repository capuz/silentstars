---
repo: "dash0hq/dash0-cli"
name: "dash0-cli"
description: "Command line utility to interact with Dash0"
readmeQualityOk: true
url: "https://github.com/dash0hq/dash0-cli"
homepage: "https://www.dash0.com"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["cli", "observability"]
stars: 17
forks: 6
openIssues: 29
closedIssues: 87
watchers: 3
contributors: 30
recentReleases: 0
createdAt: "2025-03-09T18:40:19Z"
lastCommitAt: "2026-09-24T08:41:34Z"
lastReleaseAt: "2026-02-24T07:33:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 69
maintainers: ["mmanciop", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd3ed36f837c0304a82e2cfbb79f643ea9f55a83806d55539f52753e68e63069/dash0hq/dash0-cli"
---

# Dash0 CLI

A command-line interface designed for humans, agentic AIs and CI/CD to interact with the [Dash0](https://www.dash0.com) observability platform.
Humans authenticate interactively via OAuth 2.0 with `dash0 login`; CI/CD and agent workflows use static auth tokens — see the [quick start](#quick-start).

## An ergonomic CLI for agentic AI

The `dash0` CLI is designed to be driven by AI coding agents as naturally as by humans.
Its capabilities are discoverable via `--help`, alongside a comprehensive [command reference](https://github.com/dash0hq/dash0-cli/blob/HEAD/docs/commands.md) with detailed flags, expected outputs, and ready-to-use workflow examples.
Authentication and connection settings can be configured entirely through profiles and environment variables, avoiding the need to pass secrets as command-line arguments.
Commands use consistent naming conventions and flags.
Structured and parseable output formats (`--output json`, `--output yaml`, `--output csv`).
[Agent mode](#agent-mode) makes all of this automatic: JSON output, structured help, JSON errors, no prompts, and no colors — with zero configuration.
Run `dash0 skill install` in a project to add a local…
