---
repo: "uxandai/launchme"
name: "launchme"
description: "Another game launcher."
readmeQualityOk: true
url: "https://github.com/uxandai/launchme"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 48
forks: 3
openIssues: 2
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-09-29T17:06:48Z"
lastCommitAt: "2026-11-02T11:36:23Z"
lastReleaseAt: "2026-10-26T18:39:01Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 41
maintainers: ["Drackrath"]
openGraphImageUrl: "https://opengraph.githubassets.com/78c54ee0f4b0a58a968e4fdbe1cae7b180593ab67c504553cd2f97034b992130/uxandai/launchme"
---

**[Website](https://uxandai.github.io/launchme/)** · **[Changelog](https://github.com/uxandai/launchme/blob/HEAD/changelog/)** · **[Download](https://github.com/uxandai/launchme/blob/HEAD/../../releases/latest)** ·
**[Discord](https://discord.gg/y2wk3kr9wW)** · **[Architecture](https://github.com/uxandai/launchme/blob/HEAD/docs/ARCHITECTURE.md)**

A full-screen, console-style game launcher for Windows 10/11, built for a gamepad.
It merges Steam (collections and non-Steam shortcuts), GOG, Battle.net, EA app, Ubisoft Connect,
Epic Games, Amazon Games, Xbox (PC) and your own programs into one library, with artwork from SteamGridDB (and Epic's
own store art for an Epic account's games).

> **Linux: highly experimental (WIP).** Since 0.4.0 the same launcher also builds and runs natively on Linux,
> with Proton/Wine for Windows games (umu-launcher, GE-Proton, prefixes, per-game options). It is a work in
> progress: expect bugs and missing pieces, and keep Windows as the supported platform for now.
> See [Linux](#linux-highly-experimental-wip).

Native C++20: Win32, Direct2D/DirectWrite/WIC, WinHTTP, XAudio2 and Media Foundation — no HTML UI.
The interface is available in English,…
