---
repo: "manaflow-ai/subrouter"
name: "subrouter"
description: "Subrouter routes Codex/Claude Code traffic across multiple ChatGPT Pro/Claude Max subscriptions and API keys."
url: "https://github.com/manaflow-ai/subrouter"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-04T04:28:04Z"
lastCommitAt: "2026-06-25T02:08:47Z"
lastReleaseAt: "2026-05-04T07:25:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 53
maintainers: ["lawrencecchen"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8cad3491aa8dc0ac3e58591acdbfec774ce334057cf4587b246306c42777fc2/manaflow-ai/subrouter"
---

# Subrouter

Subrouter is a local AI coding-agent proxy. It routes traffic across Codex accounts with sticky conversation-to-account assignment so cached context stays useful.

## Goals

- Run fast on a Mac Mini.
- Forward requests with normal Go reverse-proxy behavior, including headers and streaming responses.
- Support subscription accounts first, API keys second.
- Keep each conversation pinned to one account.
- Pick a fresh account for a new conversation based on available rate-limit headroom.
- Provide the Codex account manager and daemon in one Go binary.

## Install

### Agent setup prompt

Paste this into Claude, Codex, or another coding agent that has SSH access to your server and a local browser for OAuth:

```text
Set up Subrouter as a shared production service.

Inputs:
- Server SSH target: <user@host>
- Server URL reachable from my machine: http://<tailnet-ip-or-dns>:31415
- Local server nickname: team

Rules:
- Do not copy ~/.codex/auth.json or local ~/.subrouter/codex/accounts/*.json to the server.
- Server OAuth accounts must be created with fresh server-owned login flows.
- Do not print access tokens, refresh tokens, API keys, id tokens, or admin tokens.
- Keep…
