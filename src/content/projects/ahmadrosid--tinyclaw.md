---
repo: "ahmadrosid/tinyclaw"
name: "tinyclaw"
description: "AI Personal Assistant"
url: "https://github.com/ahmadrosid/tinyclaw"
homepage: "https://ahmadrosid.github.io/tinyclaw"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 38
forks: 7
openIssues: 9
closedIssues: 26
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-23T06:02:30Z"
lastCommitAt: "2026-06-24T06:39:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 41
maintainers: ["ahmadrosid"]
openGraphImageUrl: "https://opengraph.githubassets.com/c815d15e9d03f63bd6337a816beaf8f67eec5e25f0cece5eb7e4ef24d06845c1/ahmadrosid/tinyclaw"
---

# TinyClaw

> Deploy your own AI Agent platform as easily as spinning up WordPress.

TinyClaw is a small, self-hosted Bun + TypeScript monorepo for running AI agents. 

Inspired by [OpenClaw](https://github.com/openclaw/openclaw) and [Hermes Agent](https://github.com/nousresearch/hermes-agent) — same self-hosted agent idea (tools, channels, soul, automations) — but **multi-tenant by design**. Those projects target one operator on one machine; TinyClaw is one server, many orgs, with isolated profiles, sessions, member invites, and roles built in.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for system design, or the [docs site](https://ahmadrosid.github.io/tinyclaw/) for the full guide.

## Quick start

Requires [Bun](https://bun.sh).

```bash
# Install dependencies
bun install

# Start the web (starts the server automatically if needed)
bun run dev:web
```

Visit web dashboard: http://localhost:3000

Or run the server on its own:

```bash
bun run dev:server
```

### Docker

You can also run TinyClaw with Docker.

**Prebuilt image (quickest):**

```bash
# Pull and run the latest image
docker pull ghcr.io/ahmadrosid/tinyclaw:latest
docker run -d -p 4310:4310 -v…
