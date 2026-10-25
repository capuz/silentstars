---
repo: "frogCaller/Pitato"
name: "Pitato"
description: "Turns a Raspberry Pi in a GPi Case 2W, or any Pi, into a media center and home remote: Plex, Jellyfin, music, radio, retro games and Home Assistant, all run from a game controller."
readmeQualityOk: true
url: "https://github.com/frogCaller/Pitato"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-17T04:24:37Z"
lastCommitAt: "2026-10-25T02:47:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 32
maintainers: ["frogCaller"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2b6871cd2f86320786e0fa8a6f2737bc3e3313100b98e28ea6aa3672585a5d4/frogCaller/Pitato"
discussionCount: 0
---

# Pitato

Turns your Raspberry Pi GPi Case 2W into a pocket-sized smart media center. Versatile home entertainment
remote where you can watch live TV, stream videos, listen to music and radio, view photos, play your own
games, check the weather and system stats, and control your smart home through Home Assistant. It works on
any Raspberry Pi with a TV or monitor on HDMI too.

## Install

The easy way is an SD card image, for any 64-bit Pi (Zero 2 W, 3, 4 or 5): from the
[latest release](https://github.com/frogCaller/pitato/releases/latest), the one ending in
`gpi-case-2w.img.xz` for the GPi Case 2W, or `hdmi.img.xz` for a TV or monitor. Write it to a microSD
card (8 GB or more) with [Raspberry Pi Imager](https://www.raspberrypi.com/software/), under Use custom,
adding your WiFi, time zone, username and password in its settings if you like (the WiFi can be set in
Pitato's Settings too). Without them, the user is `pi`, with no password until you set one
(`sudo passwd pi`).

Or set it up yourself, on Raspberry Pi OS Lite (Bookworm):

```
git clone https://github.com/frogCaller/pitato.git
cd pitato
sudo bash setup.sh
```

It asks if the Pi is in a GPi Case 2W. If it is, it sets up the…
