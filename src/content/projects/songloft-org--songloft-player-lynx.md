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
languagePcts: [51, 38]
topics: ["lynx", "lynxjs", "music", "music-player", "songloft"]
stars: 16
forks: 7
openIssues: 2
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-07T08:56:31Z"
lastCommitAt: "2026-11-19T04:42:48Z"
lastReleaseAt: "2026-11-19T04:11:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 60
maintainers: ["hanxi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a37f71c9afd92939dff1887133386fd358b5131b81f8c1db7d589cfe68dad54b/songloft-org/songloft-player-lynx"
---

# Songloft Player (Lynx)

The Lynx client for Songloft Player, completely rewritten from the Flutter version to ReactLynx + TypeScript. Supports four platforms: Android / iOS / HarmonyOS / Web.

To learn about the underlying technology: [Lynx official website](https://lynxjs.org/) · [ReactLynx official documentation](https://lynxjs.org/react/).

"Settings → Playback settings → Keep screen on on the lyrics page" is off by default and is stored only on the local device. When enabled, the screen stays on while lyrics are visible (in wide-screen mode, lyrics are shown side by side). This still applies while playback is paused. Returning to the cover, leaving the player, or switching to the background restores automatic screen-off. Android/iOS/HarmonyOS require a native installation package that includes the new screen-on API; older shells degrade safely. On Web, this depends on browser Screen Wake Lock support and permissions; if the request is denied, playback is not affected.
