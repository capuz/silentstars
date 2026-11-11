---
repo: "LYJW131/mygo-music-apple-music"
name: "mygo-music-apple-music"
description: "Apple Music for MyGo Music on macOS, Windows and Linux, with Hi-Res Lossless"
originalDescription: "Apple Music for MyGo Music on macOS, Windows and Linux, with Hi-Res Lossless"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LYJW131/mygo-music-apple-music"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [66, 34]
topics: ["mygo-music-plugin"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-07T12:07:24Z"
lastCommitAt: "2026-11-11T19:45:29Z"
lastReleaseAt: "2026-11-08T16:05:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["LYJW131", "lyjw131[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa136be626ec60eb463ee2ece778fbdfd73d39220b6740b40adcce07025bdf11/LYJW131/mygo-music-apple-music"
---

# Apple Music for MyGo Music

Search and play in [MyGo Music](https://github.com/egoist/mygo-music). Audio quality defaults to 256 kbps AAC, with optional up to 24-bit/192 kHz ALAC high-resolution lossless support (setup method [see below](#lossless)).

[English](https://github.com/LYJW131/mygo-music-apple-music/blob/HEAD/README.en.md)

## Installation and Usage

1. Click the badge above and MyGo Music will ask whether to install it, or paste `https://github.com/LYJW131/mygo-music-apple-music` into "Settings → Plugins → `+`".
2. Set the source to **Apple Music**.
3. Click login and sign in with an Apple account that has a valid subscription. If your account uses a passkey or security key to sign in, see [below](#media-user-token).
4. In "Settings → Plugins → Apple Music", allow the launcher to start. The plugin's bundled `amhelper` decrypts songs locally and passes them to MyGo Music for direct playback, so you don't need to install ffmpeg separately. Only platforms without `amhelper`, such as Windows arm64, need to install [ffmpeg](https://ffmpeg.org).

### Logging In with media-user-token

MyGo Music's login window does not support passkeys. You can sign in in your own browser…
