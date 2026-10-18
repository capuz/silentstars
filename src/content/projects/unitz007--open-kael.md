---
repo: "unitz007/open-kael"
name: "open-kael"
description: "Kael's shared agent runtime — agent loop, tools/workflows/triggers, Identity mechanism, Slack/Telegram messaging, memory, and an OpenRouter-compatible LLM client"
readmeQualityOk: true
url: "https://github.com/unitz007/open-kael"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-05T13:33:23Z"
lastCommitAt: "2026-10-18T08:16:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 47
maintainers: ["unitz007", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5946ee7c7dde344229a0781722d84cd43eeea6c7ad1678de9b1edbb44c26a5d/unitz007/open-kael"
---

# open-kael

A Go framework for building AI agent systems — agent loop, multi-channel messaging, skills with cron/webhook triggers, tool execution, and a REST API with a plugin extension point.

```
github.com/unitz007/open-kael
```

---

## Packages

| Package | What it does |
|---------|-------------|
| `domain` | Core types: Agent, Skill, Integration, Identity, AppAuthorization, MessengerChannel, and the Store/Executor/LLM interfaces everything is wired through |
| `runtime` | Boots and runs agents — turn handling, inbound listener loop, cron scheduler, webhook dispatch, MCP server per agent |
| `api` | HTTP REST server over the domain model; accepts provider plugins via `RoutePlugin` so server.go has no provider imports |
| `postgres` | PostgreSQL implementation of `domain.Store`, with a `Migrate` function and a `LoadAll` bootstrap query |
| `crypto` | AES-GCM credential encryption/decryption; `Resolver` implements `domain.CredentialEncryptor` and `domain.CredentialResolver` |

---

## Core concepts

**Agent** — a named worker with instructions, an LLM config, and a set of Skills. Agents do not own tools directly; they own Skills that bind tools with configuration.

**Skill**…
