---
repo: "zydezu/mpvconfig"
name: "mpvconfig"
description: "Config files for https://mpv.io/ | See my modernX fork here: https://github.com/zydezu/modernX"
url: "https://github.com/zydezu/mpvconfig"
language: "Lua"
languages: ["Lua"]
languagePcts: [98]
stars: 101
forks: 8
openIssues: 0
closedIssues: 22
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2023-02-08T20:52:40Z"
lastCommitAt: "2026-06-27T00:49:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 36
maintainers: ["zydezu"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fcd6fd2745e00b4c6a4b379af3b191ef9a796360003cdbcc3bfb0473392dbab/zydezu/mpvconfig"
---

# mpvconfig

My personal [mpv](https://mpv.io/) config.

> [!NOTE]
> Releases of the [modernx](https://github.com/zydezu/modernx) script are in a seperate repository - see here [https://github.com/zydezu/ModernX/releases](https://github.com/zydezu/ModernX/releases).

## How to Use

Use `git clone https://github.com/zydezu/mpvconfig mpv`, and place it in the relevant directory. This will be typically located at `\%APPDATA%\mpv\` on Windows and `~/.config/mpv/` on Linux/MacOS.

### Linux Note

For the clipboard functionality use in `copypaste.lua`, you many need to install the `xclip` or `wl-clipboard` package, depending on your session type.

### Flatpak Instructions (from https://github.com/zydezu/mpvconfig/issues/21)

Use `mkdir -p ~/.var/app/io.mpv.Mpv/config` to make the mpv configuration directory for the first time

`cd ~/.var/app/io.mpv.Mpv/config`

`git clone https://github.com/zydezu/mpvconfig mpv` to clone the config files as `mpv/`

`flatpak override --user io.mpv.Mpv --filesystem=host`, needed for mpv flatpak to access host filesystem, so screenshots and lyric downloads can be saved

See the [Files section](https://mpv.io/manual/master/#files) in mpv's manual for more…
