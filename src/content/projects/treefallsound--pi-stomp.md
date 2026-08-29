---
repo: "TreeFallSound/pi-stomp"
name: "pi-stomp"
description: "pi-stomp is a DIY high definition, multi-effects stompbox platform for guitar, bass and keyboards"
readmeQualityOk: true
url: "https://github.com/TreeFallSound/pi-stomp"
homepage: "https://treefallsound.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["audio", "effects", "guitar", "raspberry", "raspberry-pi", "pi-stomp", "modep"]
stars: 169
forks: 32
openIssues: 9
closedIssues: 47
watchers: 7
contributors: 7
recentReleases: 3
createdAt: "2020-02-15T23:01:32Z"
lastCommitAt: "2026-08-29T17:27:32Z"
lastReleaseAt: "2026-08-15T06:03:55Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 49
maintainers: ["sastraxi", "John-PS", "rreichenbach"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8c2d40eac239a1c51c3c45eb9627868d4661f8cbf91913404e09d88dcf5a95d/TreeFallSound/pi-stomp"
---

# pi-Stomp!
#### pi-Stomp is a DIY high definition, multi-effects stompbox platform for guitar, bass and keyboards
For more info about what it is and what it can do, go to [treefallsound.com](https://treefallsound.com)

## pi-Stomp Software and Firmware
We start with a 64-bit Raspberry Pi lite operating system.  We then add MOD, which is an open source audio host & UI
created by the awesome folk at moddevices.com

The pi-Stomp hardware requires drivers to interface with the LCD, potentiometers, encoders, footswitches, MIDI, etc.

A pi-Stomp software service, mod-ala-pi-stomp, uses the drivers to monitor all input devices, to drive the LCD
and to, among other things, send commands to mod-host for reading/writing pedalboard configuration information. 

## License
This project is licensed under `AGPL-3.0-or-later`. See `LICENSE` for the full license text.
Third-party components bundled in the OS image are listed in `THIRD_PARTY_LICENSES.md`.

This repository includes:
* the pi-Stomp hardware drivers ('pistomp' module)
* the mod-ala-pi-stomp service ('modalapistomp.py' & 'modalapi' module)
* setup scripts (deprecated support - see below) for downloading/installing the above along…
