---
repo: "DaveForan/atproto-tailnet"
name: "atproto-tailnet"
description: "Tailscale-as-a-service via AT Protocol (Bluesky) identity — isolated mesh networks with invite-by-handle"
readmeQualityOk: true
url: "https://github.com/DaveForan/atproto-tailnet"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [60, 34]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-24T13:33:30Z"
lastCommitAt: "2026-11-12T05:39:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 44
maintainers: ["DaveForan"]
openGraphImageUrl: "https://opengraph.githubassets.com/26448ff7286b96d8004524d1b4e3bb5a967426f1f374fc1e2aa641f18cf41af7/DaveForan/atproto-tailnet"
---

# atproto-tailnet

Create private mesh networks using your Bluesky identity. Sign in with your AT Protocol handle, get an isolated [Tailscale](https://tailscale.com)-compatible network, and invite others by their `@handle`.

Built on a purpose-built Rust mesh coordinator (replacing [Headscale](https://github.com/juanfont/headscale)) with a TypeScript service layer for auth, orchestration, and the dashboard.

## How it works

1. **Sign in** with your Bluesky handle via AT Protocol OAuth
2. **Get a tailnet** — a private Headscale instance spins up automatically
3. **Connect devices** — standard `tailscale up --login-server <your-url>` 
4. **Invite others** by their `@handle.bsky.social` — they sign in and join your network
5. **Manage access** — roles, permissions, device approval, lockdown mode

## Features

- **AT Protocol auth** — no passwords, no accounts to create. Your Bluesky DID is your identity.
- **Isolated networks** — each tenant gets its own Headscale container, port, and subdomain
- **Role-based access** — 15 granular permissions, custom roles, originator protection
- **Device approval** — optional gate on new device connections
- **Device locking** — bind members to…
