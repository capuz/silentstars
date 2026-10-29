---
repo: "kfox/c64cast"
name: "c64cast"
description: "Turn a real Commodore 64 into a programmable display + audio device via Ultimate 64 or TeensyROM+ — video, SID-music scopes, webcam, MIDI/ASID synth, WLED, generative visuals, overlays, playlists."
readmeQualityOk: true
url: "https://github.com/kfox/c64cast"
homepage: "https://kfox.github.io/c64cast/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["6502", "c64", "commodore-64", "petscii", "python", "retrocomputing", "sid", "teensyrom", "ultimate-64", "vic-ii"]
stars: 12
forks: 4
openIssues: 39
closedIssues: 186
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-06-13T23:59:38Z"
lastCommitAt: "2026-10-29T21:24:27Z"
lastReleaseAt: "2026-08-31T00:28:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 62
maintainers: ["kfox", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d06c409bbb35b2e2a51e6e61d13c95d658424120052eaf1f3cabd5603420449/kfox/c64cast"
discussionCount: 0
---

# c64cast

c64cast turns a real Commodore 64 — driven over the network through an
[Ultimate 64](https://ultimate64.com/) or
[TeensyROM+](https://lectronz.com/products/teensyrom) — into a programmable
display and audio device. It runs a **playlist of scenes** on the real
hardware: play videos and images, stream a live webcam, visualize SID music
on a 3-voice oscilloscope, synthesize a MIDI keyboard or an ASID stream
through the real SID chip, render reactive generative visuals, or hand the
machine over to a native game or demo. Frames from any source are quantized
in real time to a VIC-II display mode (PETSCII, MCM, hi-res bitmap, multicolor
hi-res); audio plays through the SID's `$D418` DAC or the hi-fi Ultimate Audio
PCM sampler. Stackable **overlays** decorate any scene with scrolling text,
spectrum analyzers, clocks, weather, RSS, logos, and more; a **performance
layer** puts the whole show on a MIDI controller or a phone; and **ensemble
mode** drives a wall of C64s at once.

The full documentation lives at **<https://kfox.github.io/c64cast/>** — three
books (User's Guide, Programmer's Reference Guide, Performance Card) plus the
caveats and troubleshooting notes, rebuilt from…
