---
repo: "snapetech/slskr"
name: "slskr"
description: "Soulseek network client app in Rust with daemon, web UI, HTTP API, transfers, search, and observability"
readmeQualityOk: true
url: "https://github.com/snapetech/slskr"
homepage: "https://github.com/snapetech/slskr"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["rust", "soulseek", "soulseek-network", "soulseek-web"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-01T19:58:38Z"
lastCommitAt: "2026-10-04T10:01:01Z"
lastReleaseAt: "2026-05-17T19:40:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 49
maintainers: ["snapetech", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2478017b47bb8c10cb5fe771443e95a491d94e9c22664a97c32d125a74ec7e1/snapetech/slskr"
discussionCount: 3
---

# slskr

`slskr` is a self-hosted Rust daemon, HTTP API, and browser UI for the
[Soulseek](https://www.slsknet.org/news/) network.

It is built for operators who want a private, scriptable Soulseek client they
can run locally, on a server, or behind their own service boundary. One
`slskr serve` process owns the Soulseek session, peer listeners, share index,
transfer engine, API, event stream, and bundled Web UI.

## Project Status

`slskr` is the Rust implementation target for slskr's native runtime and its
external slskd/slskdN interoperability work. The daemon already includes the main
operating surfaces needed by a
browser client and API automation:

- Soulseek login/session management, keepalive, reconnect, and listener state.
- Search, browse, private messages, rooms, watched users, shares, and transfers.
- Direct, obfuscated, and indirect peer probes for protocol/runtime validation.
- Bundled Web UI plus compatibility-oriented HTTP endpoints and event streams.
- TypeScript, Python, Go, and Rust client surfaces for automation and tests.
- Release, security, packaging, live-interop, and public-posture gates.

The compatibility goal is behavioral and operational compatibility…
