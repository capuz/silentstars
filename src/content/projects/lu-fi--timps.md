---
repo: "Lu-Fi/timps"
name: "timps"
description: "Tiny IMP Streamer: a minimal, dependency-light streamer for Ingenic SoC cameras."
readmeQualityOk: true
url: "https://github.com/Lu-Fi/timps"
language: "C"
languages: ["C", "Shell"]
languagePcts: [72, 21]
topics: ["c", "embedded", "ingenic", "ip-camera", "mjpeg", "rtsp", "rtsp-server", "srt", "streaming", "thingino"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-10T17:49:30Z"
lastCommitAt: "2026-09-12T19:01:33Z"
lastReleaseAt: "2026-08-02T16:56:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 58
maintainers: ["Lu-Fi"]
openGraphImageUrl: "https://opengraph.githubassets.com/958ad16079726c99566396d9bae9bcc7f93f9cf798dcc4f396e9092ca890edcb/Lu-Fi/timps"
---

# timps

**Tiny IMP Streamer** — a minimal, dependency-light RTSP / fragmented-MP4 / MJPEG
streamer for Ingenic SoC IP cameras.

Built straight on the vendor **libimp** — no live555, libconfig, libwebsockets
or libschrift. A lightweight alternative to prudynt / raptor for the
[thingino](https://github.com/themactep/thingino-firmware) ecosystem.

</div>

---

## Documentation

This README is a quick-start entry point. For the full reference —
architecture, every config key, the complete `/control` API, per-SoC
capability matrix, testing — see the **[wiki](https://github.com/Lu-Fi/timps/blob/HEAD/docs/wiki/Home.md)**:

| Page | Covers |
| --- | --- |
| [Architecture](https://github.com/Lu-Fi/timps/blob/HEAD/docs/wiki/Architecture.md) | Process/thread model, HAL abstraction, hub pub/sub, data flow |
| [Building](https://github.com/Lu-Fi/timps/blob/HEAD/docs/wiki/Building.md) | `make sim`, cross-compiling, every `USE_*` flag, thingino packaging |
| [Configuration Reference](https://github.com/Lu-Fi/timps/blob/HEAD/docs/wiki/Configuration-Reference.md) | Every `timps.conf` key, defaults, live-vs-restart-only |
| [HTTP /control…
