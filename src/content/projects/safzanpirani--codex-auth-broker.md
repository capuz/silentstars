---
repo: "safzanpirani/codex-auth-broker"
name: "codex-auth-broker"
description: "Codex app-server powered auth broker for Pi, Factory Droid, and OpenAI Responses API clients"
readmeQualityOk: true
url: "https://github.com/safzanpirani/codex-auth-broker"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["codex", "factory-droid", "openai", "responses-api", "tailscale"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-05-11T14:23:04Z"
lastCommitAt: "2026-10-12T11:09:49Z"
lastReleaseAt: "2026-10-09T05:11:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 41
maintainers: ["safzanpirani"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1e4752537f1e1440cbf13b80d0bcc923de3ac4c3c62acceea8d9cb6562bf4cc/safzanpirani/codex-auth-broker"
---

# codex-auth-broker

Codex app-server powered auth bridge for Pi, Factory Droid, and tools that
talk to the OpenAI Responses or Chat Completions APIs.

The main use case is simple: log into Codex on one trusted machine, run this
broker there, and point Pi or Factory Droid at `http://127.0.0.1:8317/v1` or a
private Tailscale address. Your client gets `/v1/responses`; your real Codex
OAuth refresh token stays on the machine that owns the login.

Run it on private networks (localhost, Tailscale, a VPC subnet) with named
client keys (`--keys-file`) or at least a single `--api-key`. Even with keys
configured, never expose it on the public internet — it fronts a personal
Codex account.

## What It Does

- Reads the existing Codex CLI auth file, usually `~/.codex/auth.json`.
- Refreshes the Codex access token locally when needed.
- Calls the ChatGPT Codex Responses backend with access-only auth.
- Exposes:
  - `GET /healthz`
  - `GET /dashboard`
  - `GET /dashboard/api/usage`
  - `GET /dashboard/api/usage/by-user`
  - `GET /dashboard/api/requests`
  - `GET /dashboard/api/costs`
  - `GET /v1/models`
  - `GET /v1/responses` (Responses WebSocket upgrade)
  - `POST /v1/responses`
  - `POST…
