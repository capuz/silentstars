---
repo: "live-miracles/restream-srs"
name: "restream-srs"
description: "SRT/RTMP streaming server. Takes inputs and restreams to multiple outputs"
readmeQualityOk: true
url: "https://github.com/live-miracles/restream-srs"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [56, 34]
topics: ["daisyui", "livestream", "nodejs", "rtmp", "srs", "srt", "ffmpeg", "bonding"]
stars: 5
forks: 0
openIssues: 5
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-05-14T06:28:27Z"
lastCommitAt: "2026-09-23T08:45:42Z"
lastReleaseAt: "2026-07-14T14:24:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 49
maintainers: ["AlexFreik"]
openGraphImageUrl: "https://opengraph.githubassets.com/87a59643a5373fc8e36621336841c8a45791942a1c4e1c5299c861295b444649/live-miracles/restream-srs"
---

# Restream SRS

Minimal streaming server — takes RTMP/SRT inputs and restreams them to multiple RTMP/SRT outputs. Built on official [SRS](https://github.com/ossrs/srs) for ingest, `srt-bonding-relay` for bonded SRT ingress, and FFmpeg for outputs. Node.js + TypeScript backend.

Designed to handle tens of simultaneous pipelines (inputs) and hundreds of output forwards running continuously across long events. See [Capacity & Limits](#capacity--limits) for the tested envelope.

```
OBS / ffmpeg  ──RTMP────────►  SRS (21935)  ──FFmpeg──►  YouTube / Facebook / ...
              ──SRT─────────►  SRS (10080)  ──FFmpeg──►  rtmp:// or srt://
              ──SRT bonding─►  srt-bonding-relay (10081) ──► SRS
```

---

## Architecture

| Component | Description |
|-----------|-------------|
| SRS | Ingest broker — accepts RTMP and SRT streams |
| srt-bonding-relay | Standalone bonded SRT relay (GitHub release in prod, sibling repo in dev) |
| Node.js app | REST API + dashboard on port 8080 |
| FFmpeg | One process per output, spawned and managed by the app |
| SQLite | Persistent state for pipelines, outputs, stream keys, settings |

---

## Capacity & Limits 

The server is built and operated…
