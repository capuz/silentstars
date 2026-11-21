---
repo: "justin13888/Beam"
name: "Beam"
description: "High performance, native media server"
readmeQualityOk: true
url: "https://github.com/justin13888/Beam"
homepage: "https://beam.justinchung.net"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 6
forks: 0
openIssues: 47
closedIssues: 166
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-19T18:00:55Z"
lastCommitAt: "2026-11-21T11:32:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 78
maintainers: ["justin13888"]
openGraphImageUrl: "https://opengraph.githubassets.com/1727e11376f2e489216e413934d3ae2a2e4d28a15961661c8879991a8f1c26be/justin13888/Beam"
---

# beam

> NOTE: Beam is pre-alpha. Expect breaking changes (including destructive database migrations)
> on-and-off given time, ahead of a first alpha release for testing and feedback.

Beam is a media server for streaming your own video library to a variety of devices -- built for
home labs and small setups that want something modern, straightforward, and actively developed.

Beam deliberately **never transcodes on the fly**. Instead of live remuxing/transcoding, it
serves pre-existing files directly (byte-range HTTP streaming) and, where a title has multiple
encoded versions, lets the client pick among them for constrained-bandwidth playback. See
[`docs/architecture/streaming.md`](https://github.com/justin13888/Beam/blob/HEAD/docs/architecture/streaming.md) and
[ADR-0004](https://github.com/justin13888/Beam/blob/HEAD/docs/architecture/decisions/ADR-0004-never-transcode.md) for the rationale.

## Motivation

Beam originally started as a project to surpass the limitations of Jellyfin, a popular open-source media server. Jellyfin is a great project, but we need a more modern, straightforward solution that is as easy to use but more feature-rich and actively developed.
