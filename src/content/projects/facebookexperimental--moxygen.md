---
repo: "facebookexperimental/moxygen"
name: "moxygen"
description: "C++ implementation of Media over QUIC Transport (MoQT) — library, relay, samples, and interop tooling."
readmeQualityOk: true
url: "https://github.com/facebookexperimental/moxygen"
language: "C++"
languages: ["C++"]
languagePcts: [84]
topics: ["low-latency", "low-latency-streaming", "media-over-quic", "media-over-quic-transport", "moq", "moqt", "webtransport"]
stars: 122
forks: 41
openIssues: 19
closedIssues: 48
watchers: 10
contributors: 94
recentReleases: 0
createdAt: "2024-04-15T14:31:53Z"
lastCommitAt: "2026-10-31T07:44:35Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 45
maintainers: ["afrind", "genevievehelsel", "kvtsoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f763d3d5d9746f2b96fb6cb3385528123ff64f8499ac6bd427ccbfafdb4574e/facebookexperimental/moxygen"
---

# moxygen

moxygen is a C++ implementation of [Media over QUIC Transport
(MoQT)](https://datatracker.ietf.org/doc/draft-ietf-moq-transport/). It provides a
library for building MoQT publishers, subscribers, and relays, along with a working
relay server, sample applications, and protocol conformance and interop tooling.

The library is transport-agnostic — WebTransport, raw QUIC, or QMUX-on-TCP —
coroutine-based, and built on [folly](https://github.com/facebook/folly),
[mvfst](https://github.com/facebook/mvfst), and
[proxygen](https://github.com/facebook/proxygen).

## Documentation

| Document | Contents |
|----------|----------|
| [QUICKSTART.md](https://github.com/facebookexperimental/moxygen/blob/HEAD/QUICKSTART.md) | Run a publisher, a relay, and a subscriber in a few minutes |
| [ARCHITECTURE.md](https://github.com/facebookexperimental/moxygen/blob/HEAD/ARCHITECTURE.md) | API model — control plane, data plane, sessions, threading |
| [READMOQMEDIA.md](https://github.com/facebookexperimental/moxygen/blob/HEAD/READMOQMEDIA.md) | Streaming real audio and video with ffmpeg and a browser player |
|…
