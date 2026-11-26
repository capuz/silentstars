---
repo: "haop2922-ai/AudioMixing"
name: "AudioMixing"
description: "Symmetric audio routing over a local network: multiple computers send sound to each other, broadcast/listen-only, phone as a speaker, Bluetooth bridging, and one computer sending to multiple headphones at once. Windows + Android, purely LAN, no accounts."
originalDescription: "局域网内的对称音频路由：多台电脑互传声音、广播/只听、手机当喇叭、蓝牙桥接、一台电脑同时送多个耳机。Windows + Android，纯局域网无账号。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/haop2922-ai/AudioMixing"
homepage: "https://github.com/haop2922-ai/AudioMixing/releases"
language: "Python"
languages: ["Python", "Java"]
languagePcts: [63, 24]
topics: ["android", "android-app", "audio", "lan", "opus", "wasapi", "windows", "windows-10", "windows-11", "audio-routing"]
stars: 13
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-10-10T01:51:08Z"
lastCommitAt: "2026-11-26T15:27:37Z"
lastReleaseAt: "2026-11-26T13:46:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 46
maintainers: ["haop2922-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/0889b6235f3cc6c6f6e433ad5bfcf0f7bf1564232c393fbd48bd58971134d3ea/haop2922-ai/AudioMixing"
---

# AudioMixing

[中文](https://github.com/haop2922-ai/AudioMixing/blob/HEAD/README.md) | [English](https://github.com/haop2922-ai/AudioMixing/blob/HEAD/README.en.md)

> Let two people each wear their own headphones and play games / watch movies together.

Runs only on the local network, does not go through a server, and requires no account.

[⬇️ Download Windows version](https://github.com/haop2922-ai/AudioMixing/releases) · [⬇️ Download Android version](https://github.com/haop2922-ai/AudioMixing/releases)

✅ 584 unit tests · tests run automatically before building; no exe is produced if they fail

## How it differs from other audio forwarding software

Common audio forwarding software (such as AudioRelay) works as **one computer acting as a radio station, with other devices acting as radios**, a one-way star structure. AudioMixing's structure is **symmetric**:
