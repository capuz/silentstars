---
repo: "Tuhis/gawk"
name: "gawk"
description: "Self-hosted, sub-500 ms live game streaming over WebTransport + WebCodecs — join by code, scales horizontally across a Go relay fleet."
readmeQualityOk: true
url: "https://github.com/Tuhis/gawk"
homepage: "https://tuhis.github.io/gawk/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [48, 26]
topics: ["game-streaming", "go", "kubernetes", "low-latency", "quic", "self-hosted", "webcodecs", "webtransport"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-09T17:31:37Z"
lastCommitAt: "2026-11-05T00:21:08Z"
lastReleaseAt: "2026-07-12T21:39:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["ioio-fi-self-hosted-renovatebot[bot]", "tuhokuutio[bot]", "riliisseri[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/52bea97ea2d6a0abe3c11474b4b87be0b86ffbb8f5ecb33814e7363447df11fa/Tuhis/gawk"
---

# gawk

Self-hosted, low-latency live game streaming for the browser. A broadcaster
shares their screen; viewers join with a 6-character code and watch at
**sub-500 ms glass-to-glass latency** (≈50 ms measured on a hardware
encode/decode path) — no accounts, no plugins, no native app required.

**[gawk.ioio.fi](https://gawk.ioio.fi)** runs this exact stack. This
repository is everything needed to run your own: two Helm charts, two
images, and a **[self-hosting guide](https://github.com/Tuhis/gawk/blob/HEAD/docs/self-hosting.md)**.

## Features

- **Sub-500 ms latency** — WebTransport datagrams + WebCodecs, tuned to
  favor dropped frames over stalled playback
- **Join by code** — no accounts, no installs for broadcasters or viewers
- **Scales horizontally** — a self-federating relay fleet carries hundreds
  of broadcasts and ~1,000 viewers on a single hot broadcast
- **Native broadcasters** for Linux, Windows and macOS with true hardware
  encode (the browser cannot hardware-encode on Linux — [why](https://github.com/Tuhis/gawk/blob/HEAD/docs/19-linux-native-broadcaster.md))
- **System and per-application audio**, Opus, synchronized off a shared clock
- **Resilience opt-ins** —…
