---
repo: "snapetech/slskr"
name: "slskr"
description: "Soulseek network client app in Rust with daemon, web UI, HTTP API, transfers, search, and observability"
readmeQualityOk: true
url: "https://github.com/snapetech/slskr"
homepage: "https://github.com/snapetech/slskr"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["rust", "soulseek", "soulseek-network", "soulseek-web"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-01T19:58:38Z"
lastCommitAt: "2026-07-15T05:55:50Z"
lastReleaseAt: "2026-05-17T19:40:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 62
maintainers: ["snapetech", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/50dd3480fdeab973f0958471c5db161756c3f1d61378d1097782dbccfe848627/snapetech/slskr"
discussionCount: 1
---

# slskr

`slskr` is a self-hosted Rust daemon, HTTP API, and browser UI for the
[Soulseek](https://www.slsknet.org/news/) network.

It is built for operators who want a private, scriptable Soulseek client they
can run locally, on a server, or behind their own service boundary. One
`slskr serve` process owns the Soulseek session, peer listeners, share index,
transfer engine, API, event stream, and bundled Web UI.

## Project Status

`slskr` is the Rust implementation target for the slskr/slskdN feature-parity
work. The daemon already includes the main operating surfaces needed by a
browser client and API automation:

- Soulseek login/session management, keepalive, reconnect, and listener state.
- Search, browse, private messages, rooms, watched users, shares, and transfers.
- Direct, obfuscated, and indirect peer probes for protocol/runtime validation.
- Bundled Web UI plus compatibility-oriented HTTP endpoints and event streams.
- TypeScript, Python, Go, and Rust client surfaces for automation and tests.
- Release, security, packaging, live-interop, and public-posture gates.

The compatibility goal is behavioral and operational compatibility with useful
slskd/slskdN workflows, not…
