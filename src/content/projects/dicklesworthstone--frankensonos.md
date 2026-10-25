---
repo: "Dicklesworthstone/frankensonos"
name: "frankensonos"
description: "Memory-safe Rust controller for your own Sonos speakers on your own LAN — reliable SSDP/UPnP-SOAP/GENA interoperability (S1 + S2), a Spotify-library classical DJ, and a CLI + HTTP API + MCP server so AI agents can run the house, including off-LAN over Tailscale."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankensonos"
language: "Rust"
languages: ["Rust"]
languagePcts: [68]
topics: ["async", "dlna", "home-automation", "interoperability", "mcp", "model-context-protocol", "rust", "smart-home", "soco", "sonos"]
stars: 106
forks: 6
openIssues: 1
closedIssues: 4
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2026-10-06T23:30:08Z"
lastCommitAt: "2026-10-25T09:00:49Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 30
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1408019360/72122113-583e-44da-a980-558c0758dda4"
---

# FrankenSonos

**Your Sonos, your way. Command your speakers from anywhere in the world, as
long as you're on your Tailscale tailnet.** A memory-safe Rust controller and
daemon for the Sonos speakers you already own: one binary that runs the whole
house from the terminal, an HTTP API, or any AI agent that speaks MCP.

-dea584)

> **Status: pre-release (before `0.1.0`).** Everything below is implemented,
> and every feature is tested end to end against `fsonos-sim`, a virtual
> Sonos house (an S1 and an S2 household speaking SOAP and GENA on loopback,
> checked against scrubbed captures of real players). The daemon also runs a
> real two-household house, S1 and S2, where discovery, grouping, volume,
> favorites, Spotify rendering and announcements have run on real players,
> and `fsonos selftest` checks yours without changing anything you can hear.
> There is no real-hardware CI yet, and interfaces may still change before
> `0.1.0`.

---

## Why FrankenSonos

Sonos hardware is excellent and lasts for years; the software around it is
where it falls short. The app loses speakers, grouping fights you, automation
is out of reach, the legacy S1 line is frozen while S2 moves on without…
