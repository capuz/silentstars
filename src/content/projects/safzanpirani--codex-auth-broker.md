---
repo: "safzanpirani/codex-auth-broker"
name: "codex-auth-broker"
description: "Codex app-server powered auth broker for Pi, Factory Droid, and OpenAI Responses API clients"
readmeQualityOk: true
url: "https://github.com/safzanpirani/codex-auth-broker"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["codex", "factory-droid", "openai", "responses-api", "tailscale"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-05-11T14:23:04Z"
lastCommitAt: "2026-11-22T11:48:38Z"
lastReleaseAt: "2026-10-22T06:43:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 54
maintainers: ["safzanpirani", "mshivam019"]
openGraphImageUrl: "https://opengraph.githubassets.com/7089cf400f444120d06e11ffc4b8c7f78bdde9f6e32fb9dbfdfd614123b90baa/safzanpirani/codex-auth-broker"
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
