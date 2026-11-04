---
repo: "s1099/oxidecord"
name: "oxidecord"
description: "Blazing-fast native discord client built with gpui"
readmeQualityOk: true
url: "https://github.com/s1099/oxidecord"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["discord", "gpui", "rust", "discord-client"]
stars: 24
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2025-12-04T13:19:33Z"
lastCommitAt: "2026-11-04T13:05:28Z"
lastReleaseAt: "2026-10-24T22:19:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 64
maintainers: ["s1099", "Mchicao"]
openGraphImageUrl: "https://opengraph.githubassets.com/a097adca075f9880069144720c683e4f58091371a845c17e44467a92652f406e/s1099/oxidecord"
---

## Oxidecord

WIP Cross platform native discord client built with rust gpui, focused on being memory efficient and blazing fast.

> [!NOTE]
> Oxidecord isn't feature complete yet, so these numbers will likely change as more features land.

## Download

Download `oxidecord.exe` from the [latest release](https://github.com/s1099/oxidecord/releases/latest), save it anywhere you like, and run it.

## Running

1. Clone the repo: 
```bash
git clone https://github.com/s1099/oxidecord
cd oxidecord
```
2. Build and run
```bash
cargo run # debug build
# or
cargo run --release # release build
``` 
3. Binary can be found in `target/release` or `target/debug`

Voice calls link Opus, which is built from source, so the build also needs
CMake and a C compiler. If CMake is older than the installed Visual Studio it
won't know that generator so either update CMake, or build through Ninja with
`CMAKE_GENERATOR=Ninja`.

### TODO
- [x] Embeds
- [x] Dm's
- [x] Image rendering
- [x] Themes
- [x] Updater
- [x] App icon
- [x] Status changes
- [x] Video playback
- [x] Voice calls
- [x] Screenshare
- [ ] Video calls
- [x] Caching
- [x] Markdown rendering
- [ ] Custom themes
- [ ] Cross platform autoupdater…
