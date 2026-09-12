---
repo: "xiSage/godot-vlc"
name: "godot-vlc"
description: "GDExtension integrates LibVLC into Godot 4.3+"
readmeQualityOk: true
url: "https://github.com/xiSage/godot-vlc"
language: "Rust"
languages: ["Rust", "PowerShell"]
languagePcts: [49, 46]
topics: ["godot", "media-player", "rust", "vlc-libvlc"]
stars: 102
forks: 14
openIssues: 7
closedIssues: 5
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-03-01T15:48:21Z"
lastCommitAt: "2026-09-12T08:05:23Z"
lastReleaseAt: "2026-05-09T03:31:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 35
maintainers: ["xiSage", "mfkl"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb1bbd27919e1b577d7921c55bdbc979717525eaeaf9248a36d4931763c1bfd6/xiSage/godot-vlc"
discussionCount: 1
---

# godot-vlc

VLC extension for Godot. Supports Godot 4.3 and newer. Supports Windows and Linux.
## How to use
Put media files into `res://` and they will be loaded as `VLCMedia`. Then you can play them with `VLCMediaPlayer` node.

You can also use `VLCMedia.load_from_file()` to load media from disk or `VLCMedia.load_from_mrl()` to load media from a [media resource locator](https://wiki.videolan.org/Media_resource_locator).

There are some other features, such as subtitles and chapters, can be accessed through scripts. For more information, see the in-editor documentation.

## Screenshot

## Supported platforms

| Platform | Status |
|---|---|
| Windows x64 | supported |
| Linux x64 | supported; requires glibc 2.35 or newer |
| macOS, Linux arm64, Windows arm64 | not supported |

Nothing has to be installed on the user's machine: the addon ships its own
LibVLC and does not use a system VLC. The Linux requirement above comes from how
the extension is built, not from a choice in the code; the bound is recorded in
`build/vlc/glibc-baseline.txt` and enforced by `scripts/check_glibc_floor.ps1`.

## Building from source

Two tools have to be present, and the setup script reports rather…
