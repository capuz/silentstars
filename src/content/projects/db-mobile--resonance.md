---
repo: "db-mobile/resonance"
name: "resonance"
description: "Local-first, zero-account Open Source API Client"
readmeQualityOk: true
url: "https://github.com/db-mobile/resonance"
homepage: "https://db-mobile.github.io/resonance/"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [61, 32]
topics: ["api-rest", "javascript", "open-source", "tauri", "rust", "api", "client", "graphql"]
stars: 66
forks: 7
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-06-28T19:17:19Z"
lastCommitAt: "2026-11-12T11:42:09Z"
lastReleaseAt: "2026-01-26T23:17:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["db-mobile", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/547ab7f44c8abe27a550519fe0ce873161fcf267e1a15afe7edfa131ff522a1c/db-mobile/resonance"
---

# Resonance

**A lightweight, local-first, open-source alternative to Postman and Insomnia.**
No account. No cloud sync. No telemetry. Your collections are plain YAML files on your disk.

[Installation](#installation) · [Features](#features) · [Command line](#command-line) · [Screenshots](#screenshots) · [Documentation](https://db-mobile.github.io/resonance/) · [Scripting](https://github.com/db-mobile/resonance/blob/HEAD/SCRIPTS.md) · [Contributing](#contributing) · [Chat](https://matrix.to/#/#resonance:matrix.org)

&nbsp;

## Why Resonance?

- **Local-first, zero-account** — everything works offline, forever. Collections, environments, history, and settings live as human-readable files that you can version, diff, and share with git.
- **Genuinely lightweight** — built with Tauri and a Rust backend: ~15 MB bundle size, ~50 MB memory footprint.
- **Every protocol you need** — REST, GraphQL (incl. subscriptions), gRPC (with server reflection), WebSocket, Server-Sent Events, and MQTT in one client.
- **Secrets stay secret** — credentials and secret variables are stored in your OS keychain (GNOME Keyring / KWallet, macOS Keychain, Windows Credential Manager), never in the collection…
