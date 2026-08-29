---
repo: "FoggyBytes/StreamTweak"
name: "StreamTweak"
description: "Your host, streaming-ready on demand."
readmeQualityOk: true
url: "https://github.com/FoggyBytes/StreamTweak"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["apollo", "ethernet", "game-streaming", "moonlight", "network", "sunshine", "tray-app", "vibepollo", "vibeshine", "streamlight"]
stars: 32
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-28T13:10:15Z"
lastCommitAt: "2026-08-29T10:21:51Z"
lastReleaseAt: "2026-03-06T16:36:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 41
maintainers: ["github-actions[bot]", "FoggyBytes"]
openGraphImageUrl: "https://opengraph.githubassets.com/97f2a3374685bb22ab60af10b7574ec612aa65dff8b58c2d85e7670e082245cc/FoggyBytes/StreamTweak"
---

## 🎮 StreamTweak

   [](https://claude.ai/code)

</div>

**StreamTweak** is the host half of the FoggyBytes streaming duo. It takes care of the setup that makes game streaming reliable — the network link, spatial audio, HDR, the game library, the NVIDIA driver profile — and keeps a record of how every session actually went.

Paired with its companion client [**StreamLight**](https://github.com/FoggyBytes/StreamLight) the two work as one: the client asks for the link speed it needs, the host reports what is happening to a launch, and telemetry, store metadata, Tailscale presence and remote power and update controls travel between them over a local TCP bridge.

</div>

## ✅ Compatibility

Windows 10 21H2 and later, alongside [Sunshine](https://github.com/LizardByte/Sunshine), [Apollo](https://github.com/ClassicOldSong/Apollo), [Vibeshine](https://github.com/Nonary/vibeshine) or [Vibepollo](https://github.com/Nonary/Vibepollo).

Everything host-side works on its own. The paired features need [**StreamLight**](https://github.com/FoggyBytes/StreamLight) on the client, and the newest of them — client-driven link speed, the launch report, the shared session card and the PIN pad — need…
