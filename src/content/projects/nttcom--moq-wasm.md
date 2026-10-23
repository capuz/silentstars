---
repo: "nttcom/moq-wasm"
name: "moq-wasm"
description: "Pure Rust Media over QUIC Implementation(ClientSDK / Relay Server) for Browser / Native App / IP Camera / Robot / Drone / AI Agent."
readmeQualityOk: true
url: "https://github.com/nttcom/moq-wasm"
homepage: "https://nttcom.github.io/moq-wasm/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 56
forks: 6
openIssues: 0
closedIssues: 43
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2023-12-19T04:33:41Z"
lastCommitAt: "2026-10-23T12:04:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["yuki-uchida", "d-matsui", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8fe380581b1c10c23b1461047747eee230811f27f7585c0ef7be4b03a3c8602/nttcom/moq-wasm"
discussionCount: 2
---

# moq-wasm

## What is moq-wasm?

Real-time communication of any data for web browsers, native apps, IP
cameras, USB cameras, robots, drones and AI agents. One publish/subscribe API
with a simple architecture, high-performance QUIC transport, priority control
and caching, so you no longer have to pick between WebSocket, MQTT, HLS, DASH
and WebRTC for each use case.

Implements Media over QUIC Transport
[draft-ietf-moq-transport-14](https://datatracker.ietf.org/doc/draft-ietf-moq-transport/14/)
in Rust (drafts in [`docs/spec/`](https://github.com/nttcom/moq-wasm/blob/HEAD/docs/spec/)).

## Use cases and demos

Try the demos hosted at **<https://nttcom.github.io/moq-wasm/>**. They
connect to the cloud relay by default, so nothing needs to be installed.

| Use case | Demo |
| --- | --- |
| Video meetings | [Meeting](https://nttcom.github.io/moq-wasm/examples/meeting/) |
| Large-scale live streaming | [Live Viewer](https://nttcom.github.io/moq-wasm/examples/live-viewer/): live playback with rewind and rendition switching |
| Video on demand | [Live Viewer](https://nttcom.github.io/moq-wasm/examples/live-viewer/): publish an MP4 from the browser |
| Remote monitoring and control of IP…
