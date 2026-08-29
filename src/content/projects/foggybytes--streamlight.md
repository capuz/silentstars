---
repo: "FoggyBytes/StreamLight"
name: "StreamLight"
description: "Moonlight fork, a complete new UI experience with a lot of new features and a deeper host integration."
readmeQualityOk: true
url: "https://github.com/FoggyBytes/StreamLight"
language: "C"
languages: ["C", "C++"]
languagePcts: [57, 41]
topics: ["fork", "game-streaming", "moonlight", "windows", "streamtweak", "apollo", "network", "sunshine", "vibepollo", "vibeshine"]
stars: 29
forks: 1
openIssues: 2
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-13T16:47:02Z"
lastCommitAt: "2026-08-29T10:21:31Z"
lastReleaseAt: "2026-04-25T12:01:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 39
maintainers: ["github-actions[bot]", "FoggyBytes"]
openGraphImageUrl: "https://opengraph.githubassets.com/f928f11bcf2c45fa483907ec385146688617daa6c0b374296f3db2bf8b4c85ec/FoggyBytes/StreamLight"
---

## 🎮 StreamLight

</div>

**StreamLight** is the client half of the FoggyBytes streaming duo: a fork of [Moonlight](https://github.com/moonlight-stream/moonlight-qt) with a gamepad-first interface and native integration with its host-side companion, [**StreamTweak**](https://github.com/FoggyBytes/StreamTweak).

The streaming engine is untouched from upstream Moonlight — FFmpeg, D3D11VA, DXVA2, libplacebo, `moonlight-common-c`. What is new sits around it: the interface, and everything the two apps can do together over a local TCP bridge — host link matching, host metrics in the overlay, the store each game comes from, session quality reports, remote power-off and Windows Update, Tailscale, and signing a woken host in with its PIN from the sofa.

</div>

## ✅ Compatibility

Windows 10 and 11. Works as an ordinary Moonlight-compatible client against any **Sunshine / Apollo / Vibeshine / Vibepollo** host, and unlocks its paired feature set when [**StreamTweak**](https://github.com/FoggyBytes/StreamTweak) is running on the host.

> 🔐 **The bridge is authenticated.** Every command StreamLight sends is signed with its existing Moonlight identity certificate; the host approves each…
