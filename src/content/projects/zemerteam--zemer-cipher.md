---
repo: "ZemerTeam/zemer-cipher"
name: "zemer-cipher"
description: "YouTube cipher deobfuscation, n-transform & PoToken (BotGuard) generation - a standalone Android library (Kotlin) with self-healing remote player configs."
readmeQualityOk: true
url: "https://github.com/ZemerTeam/zemer-cipher"
language: "Kotlin"
languages: ["Kotlin", "JavaScript"]
languagePcts: [76, 20]
topics: ["android", "android-library", "botguard", "deobfuscation", "innertube", "kotlin", "potoken", "reverse-engineering", "streaming", "webview"]
stars: 31
forks: 4
openIssues: 0
closedIssues: 154
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-20T01:35:09Z"
lastCommitAt: "2026-09-25T09:02:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["zemer-dude[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a77b221619a77fe87b82535d4be1ee6e71b794875686e5ac44db99f9315171c/ZemerTeam/zemer-cipher"
---

# zemer-cipher

Android library for YouTube cipher deobfuscation and PoToken generation.

**Scope:** this library deciphers web clients' sig/n and mints poTokens. Which stream clients are
chosen, and how each is tested for whole-song delivery past the CDN's 1-MiB free window, lives in
[`zemer-app`](https://github.com/ZemerTeam/zemer-app) (`YTPlayerUtils` + `tests/client-fulldownload.mjs`).

## Origin

The WebView signature-cipher / n-transform deciphering here (`CipherDeobfuscator`, `CipherWebView`,
the injected `window._cipherSigFunc`) was **originally written by me
([alltechdev](https://github.com/alltechdev))** - first implemented into [`zemer-app`](https://github.com/ZemerTeam/zemer-app) on
**2026-02-12**
([`f905d49`](https://github.com/ZemerTeam/zemer-app/commit/f905d49da8b4486b659fa32d68e2f45f939fb56a)).
This repository is that same code, extracted into a standalone Android library
(`com.zemer:cipher`).

**Remote config:** [`zemer-app`](https://github.com/ZemerTeam/zemer-app) fetches `player_configs.json`
from this repo's `master` at runtime (via `PlayerConfigStore`) to self-heal YouTube player rotations
without an app update.

## Features

- Signature cipher deobfuscation…
