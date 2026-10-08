---
repo: "emaspa/openxlr"
name: "openxlr"
description: "Linux control suite, PipeWire submixer, and OpenDeck plugin for Elgato XLR interfaces (Wave XLR Pro, XLR Dock, Wave XLR, MK.2)"
readmeQualityOk: true
url: "https://github.com/emaspa/openxlr"
language: "C#"
languages: ["C#"]
languagePcts: [70]
topics: ["elgato", "linux", "openaction", "pipewire", "stream-deck", "wavexlr", "wavexlrlinux", "wavelink", "wavelink-linux"]
stars: 26
forks: 3
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-26T09:03:59Z"
lastCommitAt: "2026-10-08T10:52:42Z"
lastReleaseAt: "2026-09-02T14:10:54Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["emaspa", "CarinaSchoppe"]
openGraphImageUrl: "https://opengraph.githubassets.com/688817f85d58f7693ee5b11f124572d8e591bf97a92258463f659a8333a1eda7/emaspa/openxlr"
fundingLinks: ["GITHUB:https://github.com/emaspa", "BUY_ME_A_COFFEE:https://buymeacoffee.com/emaspa"]
---

Native Linux control suite for Elgato XLR interfaces: hardware
control over reverse-engineered USB protocols, a Wave Link style
PipeWire submixer with per-application channels, virtual microphones,
LV2, CLAP and VST3 plugin inserts, multi-output monitoring, a dedicated mix for a
second computer on the USB Aux port, and an OpenDeck plugin for Stream
Deck control.

The window and the terminal mixer, both from 0.1.42, the terminal mixer
in the Tokyo Night skin. This README and the linked guides describe
current `main`; for a released build, read the docs at its release tag.
Changes merged after a release are available from source until the next release.

Elgato ships no Linux software. These devices expose class-compliant USB
audio; OpenXLR also supplies device-specific configuration, including
WirePlumber rules that keep XLR Dock and original Wave XLR capture alive.
Controls beyond standard USB audio use device-specific protocols, decoded
from Wave Link USB captures and prior open-source protocol work. OpenXLR
uses those mappings alongside ALSA controls where available.

Not affiliated with or endorsed by Elgato. Built by protocol analysis on
the author's own hardware.

## Supported…
