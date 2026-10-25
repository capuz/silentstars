---
repo: "zfogg/ascii-chat"
name: "ascii-chat"
description: "💻📸 video chat in your terminal 🔡💬"
readmeQualityOk: true
url: "https://github.com/zfogg/ascii-chat"
homepage: "https://ascii-chat.com"
language: "C"
languages: ["C"]
languagePcts: [60]
topics: ["ascii", "ascii-art", "c", "cli", "command-line", "encryption", "ipv4", "network", "networking", "shell"]
stars: 202
forks: 10
openIssues: 45
closedIssues: 208
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2013-11-21T00:51:43Z"
lastCommitAt: "2026-10-25T02:47:50Z"
lastReleaseAt: "2025-12-04T15:19:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 42
maintainers: ["zfogg"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5c952266b32a28cd06a2a2d782b97f9026bc72632f37943069bc6cd76160b73/zfogg/ascii-chat"
---

# 💻📸 ascii-chat 🔡💬 Video chat in your terminal

🌐 **[ascii-chat.com](https://ascii-chat.com)** - Homepage, installation, and documentation

📚 **[API Reference & Man Pages](https://ascii-chat.com/man3)** - Developer API reference and C library documentation

Probably the first command line video chat program (let me know if this isn't
true). Initial commits _November 20-24, 2013_, with
[@craigpalermo](https://github.com/craigpalermo), at some collegiate hackathon.

ascii-chat is an ascii-art communication application that operates over TCP/IP, Websocket, and WebRTC. It
supports color and audio and crypto and compression and multiple clients
and has many little features and options.

The client functions by simply printing text and terminal escape codes to your
terminal, so it works EVERYWHERE that terminals work: on rxvt-unicode in
OpenBox, in a PuTTY SSH session, in iTerm and Kitty.app on macOS, and
theoretically everywhere else terminals run. You just need a webcam.

ascii-chat even works in an initial unix login shell. You know, the shell that
runs 'startx' and launches your desktop environment so you can open a gui
terminal app like Konsole or Kitty or Alacritty in kde or…
