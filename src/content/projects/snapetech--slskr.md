---
repo: "snapetech/slskr"
name: "slskr"
description: "Soulseek network client app in Rust with daemon, web UI, HTTP API, transfers, search, and observability"
readmeQualityOk: true
url: "https://github.com/snapetech/slskr"
homepage: "https://github.com/snapetech/slskr"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["rust", "soulseek", "soulseek-network", "soulseek-web"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-01T19:58:38Z"
lastCommitAt: "2026-08-28T15:32:28Z"
lastReleaseAt: "2026-05-17T19:40:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 52
maintainers: ["snapetech"]
openGraphImageUrl: "https://opengraph.githubassets.com/26ac29a8ec81a9c9bb6c8b56c9e740d7af8f74b0c0b9c47fdda5eb517385e02b/snapetech/slskr"
discussionCount: 1
---

# slskr

Support slskr development through [PayPal](https://www.paypal.com/donate/?business=donations%40snape.tech) or [Ko-fi](https://ko-fi.com/snapetech).

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
- TypeScript, Python, Go, and Rust client surfaces for automation and…
