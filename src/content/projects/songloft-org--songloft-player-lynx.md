---
repo: "songloft-org/songloft-player-lynx"
name: "songloft-player-lynx"
description: "🎵 Plugin-based, ad-free free music player, Lynx version"
originalDescription: "🎵 插件化、无广告的免费音乐播放器 lynx 版本"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/songloft-org/songloft-player-lynx"
homepage: "https://songloft.hanxi.cc/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [50, 39]
topics: ["lynx", "lynxjs", "music", "music-player", "songloft"]
stars: 13
forks: 4
openIssues: 1
closedIssues: 10
watchers: 2
contributors: 2
recentReleases: 7
createdAt: "2026-08-07T08:56:31Z"
lastCommitAt: "2026-11-04T11:27:50Z"
lastReleaseAt: "2026-11-04T11:27:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 60
maintainers: ["hanxi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/77cf34d34e7ef20482e60b0b3ce271058887b04fcb508f69340c03bf24f06247/songloft-org/songloft-player-lynx"
---

# Songloft Player (Lynx)

The Lynx client for Songloft Player, completely rewritten from the Flutter version as ReactLynx + TypeScript. Supports Android / iOS / HarmonyOS / Web.

To learn about the underlying technology: [Lynx official website](https://lynxjs.org/) · [ReactLynx official documentation](https://lynxjs.org/react/).

"Settings → Playback settings → Keep screen on on lyrics page" is off by default and is saved only on this device. When enabled, the screen stays on while lyrics are visible (in wide-screen mode, lyrics are shown side by side). It remains effective while playback is paused. Returning to the cover, leaving the player, or switching to the background restores automatic screen-off. Android/iOS/HarmonyOS require a native installation package that includes the new screen-on interface; older shells degrade safely. On Web, it depends on browser Screen Wake Lock support and permissions; a denied request does not affect playback.

## Current status

The project is currently positioned as a **preview release**. Core playback, library/playlists, lyrics, plugins, themes, multi-server support, and admin settings are already implemented. The About page now separately…
