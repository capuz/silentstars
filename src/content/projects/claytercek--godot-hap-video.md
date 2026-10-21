---
repo: "claytercek/godot-hap-video"
name: "godot-hap-video"
description: "GDExtension for Hap video playback in Godot 4.6+ — GPU-native decoding, multiple 4K@60 streams, instant seek, reverse playback."
readmeQualityOk: true
url: "https://github.com/claytercek/godot-hap-video"
homepage: "https://store.godotengine.org/asset/claytercek/hap-video/"
language: "Zig"
languages: ["Zig"]
languagePcts: [83]
topics: ["gdextension", "godot", "godot-addon", "godot4", "hap", "hap-codec", "video", "video-playback"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-07-13T15:33:35Z"
lastCommitAt: "2026-10-21T19:56:16Z"
lastReleaseAt: "2026-08-04T19:46:09Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 81
undervaluedScore: 36
maintainers: ["claytercek", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b224eda66984ec114b0163f7d5dc5d7d3e9965abb74e06686a990a70e3a8c8d/claytercek/godot-hap-video"
fundingLinks: ["GITHUB:https://github.com/claytercek"]
---

# Hap Video for Godot

Play Hap-encoded QuickTime (`.mov`) video in Godot 4. The extension decodes
Hap frames, uploads their GPU-compressed texture data, and exposes them through
Godot's `VideoStreamPlayer` or a `HapPlayer` node for direct control.
Embedded signed 16/24-bit PCM audio plays through Godot's audio buses.

## Install and play a video

1. Download `hap-video-<tag>.zip` from the [latest release](https://github.com/claytercek/godot-hap-video/blob/HEAD/../../releases/latest).
2. Extract it at your Godot project's root so its contents land in
   `addons/hap_video/`.
3. Restart the editor. Godot loads the GDExtension automatically.

The release archive contains the manifest, debug and release libraries for the
supported platforms, this README, and the required license notices.

Put a Hap `.mov` file in the project and assign it to a normal
`VideoStreamPlayer`. The extension registers a loader for `.mov` files:

```gdscript
var player := VideoStreamPlayer.new()
add_child(player)
player.stream = load("res://videos/loop.mov")
player.play()
```

This route uses the controls provided by `VideoStreamPlayer`, including play,
pause, stop, seeking, and looping. Opening is…
