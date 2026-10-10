---
repo: "Enn3Developer/n_music"
name: "n_music"
description: "Cross-platform music player written in Rust + Slint"
readmeQualityOk: true
url: "https://github.com/Enn3Developer/n_music"
language: "Kotlin"
languages: ["Kotlin", "Rust", "QML"]
languagePcts: [41, 38, 20]
topics: ["audio", "cross-platform", "music", "music-player", "rust", "slint"]
stars: 32
forks: 5
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2022-04-06T19:59:30Z"
lastCommitAt: "2026-10-10T10:02:20Z"
lastReleaseAt: "2024-10-06T19:00:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["claude", "Enn3Developer"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8635710f715cd944f0ba684c7135b223d68f7722581a92548dad2416a730487/Enn3Developer/n_music"
---

# N Music

Cross-platform music player written in Rust + Slint

## Features

- Cover art
- Music from local folders, plus web playlists and Telegram chats on desktop
- Supports media control on all platforms (Windows, Mac, Linux and Android)
- Extremely fast and resource efficient
- Locale support

## Coming

- Streaming:
    - [ ] Simple web streaming
    - [ ] Youtube streaming
    - [ ] Deezer streaming

- QoL:
    - [ ] Playlists
    - [ ] Auto updater (desktop only; opt-out)

## Contribute

### Building

Run in debug mode:

```shell
cargo run --package n_music_desktop
```

Build in release mode:

```shell
cargo build --release --package n_music_desktop
```

### Telegram

Signing in to Telegram needs N Music's API credentials when building. Register an app at
[my.telegram.org](https://my.telegram.org) and pass its id and hash:

```shell
N_MUSIC_TELEGRAM_API_ID=12345 N_MUSIC_TELEGRAM_API_HASH=0123456789abcdef \
  cargo run --package n_music_desktop
```

Without them, the app builds and runs as before, with the Telegram source turned off. Release
builds take them from the `N_MUSIC_TELEGRAM_API_ID` and `N_MUSIC_TELEGRAM_API_HASH` secrets.

### Translations

If your language isn't…
