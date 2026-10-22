---
repo: "lambadalambda/kallisti"
name: "kallisti"
description: "A Discord-like client and server for Mumble (web and desktop)"
readmeQualityOk: true
url: "https://github.com/lambadalambda/kallisti"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [52, 30]
stars: 7
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-15T11:18:50Z"
lastCommitAt: "2026-10-22T08:50:00Z"
lastReleaseAt: "2026-10-21T11:17:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["lambadalambda", "cortexobscura"]
openGraphImageUrl: "https://opengraph.githubassets.com/09c6c056e9e341f09fcec5a327227dbc6982546be61e8e39d870db8d038f6bf3/lambadalambda/kallisti"
---

# Kallisti

Voice and text chat on top of Mumble, with a Discord-like interface. Web first.
https://kallisti.chat

- `packages/protocol`: Mumble protocol (framing, protobuf codec, state, voice packets)
- `apps/web`: Svelte web client (chat, voice, settings)
- `server`: Go server: web app, accounts, text channels and a built-in Mumble
  server (Mumble clients and web clients in one place)
- `packages/devtools`: dev scripts (smoke test, voice bot)

## Deployment

Kallisti runs in one of two ways:

- **Built-in server** (recommended): Kallisti is the Mumble server. Web users,
  the desktop app and normal Mumble clients all connect to it, and every
  feature works.
- **In front of an existing Murmur**: Kallisti adds the web app, accounts and
  text channels; voice stays on your Murmur server and its Mumble users keep
  everything they have. Some features need the built-in server (see below).

Both need a domain with HTTPS: browsers allow the microphone only on secure
pages. The quickest start, with Docker and the built-in server:

```sh
umask 077
printf 'DOMAIN=chat.example.org\nSUPERUSER_PASSWORD=%s\n' "$(openssl rand -hex 16)" > deploy/.env
docker compose -f deploy/compose.yml up -d…
