---
repo: "immortalbob/Mnemolis"
name: "Mnemolis"
description: "A self-hosted knowledge broker for homelabs. Routes and fuses queries across Kiwix, FreshRSS, Open-Meteo, SearXNG, Uptime Kuma, and Home Assistant — and tracks what changed over time. REST API and MCP server, integrates natively with Open WebUI and Home Assistant."
url: "https://github.com/immortalbob/Mnemolis"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["docker", "home-assistant", "homelab", "self-hosted", "fastapi", "freshrss", "kiwix", "llm-tools", "local-ai", "local-first"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-15T21:37:38Z"
lastCommitAt: "2026-06-26T21:31:37Z"
lastReleaseAt: "2026-06-17T22:08:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 62
maintainers: ["immortalbob"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a8c8314bd3b7424ad634ca0d94403ef3dbac416c9e9d26876bac1aad83335c7/immortalbob/Mnemolis"
---

# Mnemolis

A unified local knowledge search API for self-hosted homelabs. Mnemolis runs as a Docker container on your internal network and routes queries to the appropriate backend — offline knowledge, weather forecast, RSS news, live web search, service monitoring, or multiple sources concurrently — via a single endpoint.

Exposes both a **REST API** and an **MCP server** so any client can connect to it.

This README covers what it is, installation, and the API reference. For deep-dive mechanism detail, exact scoring weights, and the real bugs found and fixed along the way, see the **[Wiki](https://github.com/immortalbob/Mnemolis/wiki)**.

## Why Mnemolis

A homelab accumulates real, distinct sources of truth — your own RSS feeds, an offline encyclopedia, weather, service uptime, Home Assistant state — but each one normally needs its own query language, its own client, its own mental context switch. Mnemolis exists so you can ask one plain-language question and not have to know in advance which backend actually has the answer, or query three of them yourself when the real answer spans more than one. It runs entirely on your own infrastructure — Open-Meteo is the one deliberate…
