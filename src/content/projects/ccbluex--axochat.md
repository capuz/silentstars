---
repo: "CCBlueX/axochat"
name: "axochat"
description: "Backend for LiquidBounce's global chat feature (LiquidChat)."
readmeQualityOk: true
url: "https://github.com/CCBlueX/axochat"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["chat", "liquidbounce", "minecraft", "liquidchat"]
stars: 8
forks: 4
openIssues: 5
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2020-02-25T22:12:55Z"
lastCommitAt: "2026-11-07T22:52:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 41
maintainers: ["1zun4"]
openGraphImageUrl: "https://opengraph.githubassets.com/d21ba695d3bc6a33ac43ac4a73821d38c46110fbf41f4820c57237e55d363f69/CCBlueX/axochat"
---

# AxoChat Server
A generic server for chat features in Minecraft modifications utilizing the Mojang authentication scheme and WebSockets. LiquidBounce employs it for its global chat feature, which allows users to communicate with other people using the client regardless of the current server.

## Implementation
A specification of the protocol used can be found [here](https://github.com/CCBlueX/axochat/blob/HEAD/PROTOCOL.md).

## Usage
The server is configured through environment variables, see [.env.example](https://github.com/CCBlueX/axochat/blob/HEAD/.env.example).

```sh
cargo run --release -- start
```

It needs a MySQL or MariaDB database; tables are created on startup.
Staff are the users with a staff role in the LiquidBounce Service API (`API_URL`, `API_TOKEN`).
The Docker image runs in `/data`, where the certificates are kept; mount a volume there.
`docker compose up -d` runs it from `.env`; `COMPOSE_PROFILES=tunnel` and `TUNNEL_TOKEN` add a Cloudflare tunnel.

`axochat generate <name> [uuid]` prints a JWT for testing.
Mutes from an old `banned.txt` move into the database with `axochat import-bans banned.txt`.

## Kotlin client
`client/` is a Kotlin library for the…
