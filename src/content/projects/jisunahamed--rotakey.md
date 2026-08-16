---
repo: "jisunahamed/rotakey"
name: "rotakey"
description: "Self-hosted OpenAI-compatible AI model gateway with quota-aware multi-key routing."
readmeQualityOk: true
url: "https://github.com/jisunahamed/rotakey"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [64, 23]
topics: ["ai-gateway", "golang", "openai-compatible", "postgresql", "rate-limiting", "react", "redis", "self-hosted"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-28T06:51:10Z"
lastCommitAt: "2026-08-16T04:07:25Z"
lastReleaseAt: "2026-08-10T17:19:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 42
maintainers: ["jisunahamed"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e9c2274a4df1151fca45dc056efc65e953970a3eaf92713eb38ae9001e3bd7b/jisunahamed/rotakey"
---

# Rotakey

Rotakey is a single-owner, self-hosted AI gateway. Providers are configured provider-wise as OpenAI-compatible or Anthropic-compatible, while applications use one gateway key and a public model alias through either SDK contract.

```text
Application ── Bearer gateway key ──> Rotakey /v1
                                         │
                         public alias ────┤
                                         ▼
                         provider + eligible credential
```

The gateway serves:

- OpenAI: `GET /v1/models`, `POST /v1/chat/completions`, and `POST /v1/responses`
- Anthropic: Models, `POST /v1/messages`, token counting, Message Batches, and Files
- `GET /health/live`
- `GET /health/ready`

The admin console is served at `/admin/`.

New to gateway operations? Read the [Rotakey Operator Guide](https://github.com/jisunahamed/rotakey/blob/HEAD/docs/OPERATOR-GUIDE.md) for setup, dashboard metrics, every rate-limit dimension, routing behavior, errors, security, backup, and troubleshooting. For model discovery, role mapping, native/translated routes, Windows setup, and troubleshooting, see [Connect Claude Code to…
