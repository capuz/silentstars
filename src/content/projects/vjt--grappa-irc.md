---
repo: "vjt/grappa-irc"
name: "grappa-irc"
description: "Always-on IRC bouncer with a REST-first API (grappa) + irssi-shape PWA client (cicchetto). Beta."
readmeQualityOk: true
url: "https://github.com/vjt/grappa-irc"
homepage: "https://grappa.chat/"
language: "TypeScript"
languages: ["TypeScript", "Elixir"]
languagePcts: [45, 39]
stars: 7
forks: 5
openIssues: 102
closedIssues: 778
watchers: 1
contributors: 7
recentReleases: 10
createdAt: "2026-05-11T19:03:42Z"
lastCommitAt: "2026-08-17T03:35:19Z"
lastReleaseAt: "2026-08-04T23:43:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 73
maintainers: ["vjt", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e1c7561c96a502448168fb4e2fe0432b73a53b99ca3eede3b5874e6a6c853c8/vjt/grappa-irc"
---

# grappa-irc

> An always-on IRC bouncer with a REST-first API and a browser PWA that looks like irssi.

**Live instance → [irc.sindro.me](https://irc.sindro.me)** — open it in any browser, or install it to a phone home screen (visitors need no password).

## What

Two components in one monorepo:

- **grappa** — the server. A persistent bouncer that terminates IRC at the server boundary and exposes a REST API plus a multiplexed WebSocket (Phoenix Channels) for real-time push. One supervised OTP process per `(user, network)` (Elixir/OTP + Phoenix). SASL bridging to upstream NickServ. Self-hostable on any VPS.
- **cicchetto** — the client. A PWA that speaks pure REST and **never parses IRC**. Installable on a phone home screen, visually irssi, with mobile ergonomics added on top — not instead. SolidJS + TypeScript + Vite + Bun; `phoenix.js` for the Channels client.

*Modern IRC — always-on, usable from a phone — without making it not-IRC.* For anyone who's been on IRC for a decade: it's irssi-in-tmux, reachable from a browser.

</p>

### Two facades, one store

grappa exposes one scrollback store through two facades:

1. **REST + WebSocket Channels** — the primary surface and the…
