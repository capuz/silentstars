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
stars: 90
forks: 15
openIssues: 33
closedIssues: 39
watchers: 0
contributors: 10
recentReleases: 1
createdAt: "2026-02-23T13:42:57Z"
lastCommitAt: "2026-10-02T10:00:22Z"
lastReleaseAt: "2026-07-12T10:19:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 37
maintainers: ["cfal", "yongkangc", "0xSolarPunk"]
openGraphImageUrl: "https://opengraph.githubassets.com/88e4b325c80433df6d72086f2979e0b62634d81b34ea45c72c81acbc7d0a6a63/cfal/garcon"
---

</p>
<h1 align="center">Garcon</h1>

  Garcon is a self-hosted visual workspace for coding agents. Run Claude Code, Codex, Cursor Agent, OpenCode, Amp, Factory Droid, and Pi side by side, coordinate their work, and move from prompt to reviewed commit without leaving the browser.
</p>

</p>

  </a>
</p>

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
- Optional pull request support: an authenticated GitHub CLI on the Garcon host.

Garcon publishes an official multi-platform container image for every commit on `main`:

```bash
docker pull ghcr.io/cfal/garcon:main
```

The [Docker guide](https://github.com/cfal/garcon/blob/HEAD/docs/docker.md) covers running the published…
