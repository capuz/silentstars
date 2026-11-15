---
repo: "niekvlessert/vgmplay-js-2"
name: "vgmplay-js-2"
description: "Video Game Music player for the web that is easy to use, tries to support every format."
readmeQualityOk: true
url: "https://github.com/niekvlessert/vgmplay-js-2"
homepage: "https://niekvlessert.github.io/vgmplay-js-2/"
language: "Assembly"
languages: ["Assembly", "C", "JavaScript"]
languagePcts: [31, 25, 20]
topics: ["audio", "chiptunes", "games", "hes", "kss", "libvgm", "mod", "msx", "musicplayer", "nsf"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2019-12-30T10:59:06Z"
lastCommitAt: "2026-11-15T11:21:12Z"
lastReleaseAt: "2026-03-08T21:59:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 69
undervaluedScore: 37
maintainers: ["niekvlessert"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ffd2ef2981ee21500e49146c13428f8a36427fb9364bd547979a7028057eb7b/niekvlessert/vgmplay-js-2"
---

# vgmplay-js-2
VGMRips VGMPlay transpiled to Javascript, can be used as library for libvgm, player, Chrome/Firefox Extension and standalone MacOS App.

For development context, start with [AGENTS.md](https://github.com/niekvlessert/vgmplay-js-2/blob/HEAD/AGENTS.md), the
[architecture guide](https://github.com/niekvlessert/vgmplay-js-2/blob/HEAD/docs/architecture.md), and the
[verified status and limitations](https://github.com/niekvlessert/vgmplay-js-2/blob/HEAD/docs/status.md).

This is a newer version, once based on vgmplay-js. 

Objectives:

General:
- libvgm only at first, but others came...
- Webbased
- Playback through Audioworklet

For the player:

- Minimize the amount of HTML code required to use it.
- Nice full screen experience on phone and desktop

For the extension:

- Plugin into any website and play back the media that is available there.

For the library:

- Make it easy to design your own webbased games and play VGM files in that. But I seperated in later.

Works on current Brave and Chrome now (feb 2026). Compilation works with Emscripten 5.0.1

Lately a lot of additions using vibe coding.

The compiled binaries are build by github actions. However if you want to…
