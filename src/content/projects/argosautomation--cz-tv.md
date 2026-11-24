---
repo: "argosautomation/cz-tv"
name: "cz-tv"
description: "A live TV guide for the M5Stack Cardputer Zero. Any M3U playlist, on the card's own screen or on a TV over HDMI. 27 free channels built in."
readmeQualityOk: true
url: "https://github.com/argosautomation/cz-tv"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["cardputer", "cardputer-zero", "embedded-linux", "framebuffer", "hls", "iptv", "live-tv", "m3u", "m5stack", "rust"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-11-22T02:55:29Z"
lastCommitAt: "2026-11-24T01:54:49Z"
lastReleaseAt: "2026-11-24T01:55:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 27
maintainers: ["argosautomation"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f5cad1c402cf5db6b6f773f8eb27b9fe5144159c416ba433b2e293164552389/argosautomation/cz-tv"
---

# cz-tv

A live TV guide for the **M5Stack Cardputer Zero**. Browse channels on the
card's own 320x170 screen, press ENTER, and it plays - on that same little
screen, or fullscreen on a TV the moment an HDMI cable is plugged in.

*Both of those are the card's own framebuffer, read off `/dev/fb0` on a stock
install with no config file.*

*The guide, type-to-search, and DW English decoding full-panel on the card's
own screen. Captured off `/dev/fb0` while the real binary was driven through a
uinput keyboard, so there is no desktop capture and no mock-up in it. The
full-length version is on the [v1.2 release](https://github.com/argosautomation/cz-tv/releases/tag/v1.2).*

Channels come from an ordinary **M3U playlist**, so it plays whatever you
already have: a Jellyfin or Plex playlist, an IPTV subscription, an iptv-org
list, or a text file of URLs you wrote yourself. It also ships with **27 free
live channels** built in, so it works the moment you install it - no account,
no config file, no server of mine or anyone else's in the path. The card
fetches the stream straight from the broadcaster's own CDN.
