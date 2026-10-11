---
repo: "flox1an/nostube"
name: "nostube"
description: "Nostr based video platform"
readmeQualityOk: true
url: "https://github.com/flox1an/nostube"
homepage: "https://nostu.be"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["blossom", "nostr"]
stars: 38
forks: 5
openIssues: 22
closedIssues: 54
watchers: 1
contributors: 4
recentReleases: 3
createdAt: "2025-06-06T22:09:01Z"
lastCommitAt: "2026-10-11T10:13:35Z"
lastReleaseAt: "2026-09-03T10:22:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 63
maintainers: ["flox1an"]
openGraphImageUrl: "https://opengraph.githubassets.com/2045f3043b24a0cc97de15710d50098804b20c16c0522e56fe929ab413b14820/flox1an/nostube"
---

# Nostube

Monorepo for Nostube.

| Path | What it is |
|---|---|
| `apps/web` | The Nostube web app (nostu.be), including the embed player and the Tauri desktop wrapper |
| `apps/server` | The self-hosted Rust server (relay, Blossom, admin); embeds the site and embed player (`scripts/build-server-web.sh`, then `cargo run`) |
| `apps/studio` | The server's admin interface (appearance, instance settings, account), served under `/studio/` |
| `apps/site` | Skeleton of the self-hosted creator homepage (static Vite app, reads the server's `/api/config`) |
| `packages/core` | Shared logic without React: Nostr client, media URL ladder, HLS loader, instance config (`@nostube/core`, internal, not published) |
| `packages/widgets` | Shared React components for the apps (`@nostube/widgets`, internal) |

More apps (`studio`) follow; see `docs/adr/`.

Dependencies are installed once at the repository root (npm workspaces): `npm ci`, then `cd apps/web && npm run build`.
