---
repo: "Epi-Lo/desktop-lyric"
name: "desktop-lyric"
description: "desktop lyrics overlay with auto-translation — works with Tidal, Spotify, and any SMTC player"
readmeQualityOk: true
url: "https://github.com/Epi-Lo/desktop-lyric"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 12
forks: 3
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-01-02T07:44:55Z"
lastCommitAt: "2026-11-23T10:26:51Z"
lastReleaseAt: "2026-11-21T06:31:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 62
maintainers: ["pxxpkm", "Epi-Lo", "Mohambrahim"]
openGraphImageUrl: "https://opengraph.githubassets.com/0377878735a66d41f35f8deee33d1b534f7c46dd5319d59a370875802ed868cb/Epi-Lo/desktop-lyric"
---

# desktop-lyric

Desktop lyrics overlay for Windows. Shows synced lyrics with Chinese translation for whatever's playing in Tidal, Spotify, YouTube in the browser, or any player that shows up in Windows media controls (SMTC).

Windows 桌面歌詞，跟住你而家播緊嘅歌出同步歌詞同中文譯文，預設繁體（香港用字）。

## what it does

- Detects the song playing via Windows SMTC
- Fetches lyrics from Netease, QQ Music, Kugou, LRCLIB and picks the one closest to the song length
- Syncs lyrics to playback position, still ok when the player's position freezes for a few seconds
- Traditional Chinese by default (OpenCC + Hong Kong variants), can turn off with 繁 on the overlay
- Floating overlay you can drag around, clicks go through it when the mouse is not on the lyrics
- 鎖 on the overlay locks the lyrics, so YouTube hover previews or mix titles don't swap the song
- 選 opens the song picker when it matched the wrong song. You can lock the title or the artist and search again, and it remembers your pick next time
- Cleans up YouTube titles, e.g.
