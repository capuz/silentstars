---
repo: "cfal/garcon"
name: "garcon"
description: "Self-hosted browser workspace to run coding agents in parallel, steer work as it runs, review diffs, and ship."
readmeQualityOk: true
url: "https://github.com/cfal/garcon"
homepage: "https://trygarcon.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [72]
topics: ["claude-code", "codex", "opencode", "ampcode", "factory-ai", "pi-agent", "cursor-ai", "agent-harness", "agent-orchestration", "agentic-ai"]
stars: 101
forks: 18
openIssues: 36
closedIssues: 43
watchers: 0
contributors: 10
recentReleases: 1
createdAt: "2026-02-23T13:42:57Z"
lastCommitAt: "2026-11-07T10:37:23Z"
lastReleaseAt: "2026-11-06T17:37:13Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 38
maintainers: ["cfal", "yongkangc", "0xSolarPunk"]
openGraphImageUrl: "https://opengraph.githubassets.com/c460907d02c7291a6c72fe4ded0998bfd83915799c9b7f539e7340d6d211151e/cfal/garcon"
---

Garcon is a self-hosted visual workspace for coding agents. Run Claude Code, Codex, Cursor Agent, OpenCode, Amp, Factory Droid, and Pi side by side, coordinate their work, and move from prompt to reviewed commit without leaving the browser.

Garcon runs agents, terminals, files, Git, and pull request commands on the host under your account, using the agent logins and model endpoints you configure.

## Quick Start

```bash
git clone https://github.com/cfal/garcon.git
cd garcon
bun run setup
bun run start
```

Open `http://127.0.0.1:8080`. On first launch, create an account at `/setup`, then connect agents and API providers in Settings. Authentication is enabled by default.

Requirements:

- [Bun](https://bun.sh/), `git`, and a modern browser.
- At least one working coding agent or API provider.
- Optional pull request support: an authenticated GitHub CLI on the selected executor, with support for `gh auth status --json hosts` and `gh api --paginate --slurp`.

Garcon publishes an official multi-platform container image for every commit on `main`:

```bash
docker pull ghcr.io/cfal/garcon:main
```

The [Docker guide](https://github.com/cfal/garcon/blob/HEAD/docs/docker.md) covers…
