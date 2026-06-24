---
repo: "glima/mare-player"
name: "mare-player"
description: "Maré Player: a COSMIC desktop applet for TIDAL music streaming. Builds in either applet or standalone modes."
url: "https://github.com/glima/mare-player"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-03-08T08:18:52Z"
lastCommitAt: "2026-06-24T06:38:34Z"
lastReleaseAt: "2026-05-07T05:10:56Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 67
maintainers: ["glima", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5dc715bcfb5567093cce0a16b9a53adaa5693c04ed27dcfee8d314c8e1fff614/glima/mare-player"
---

# <img src="resources/icon.svg" width="36" align="absmiddle" /> Maré Player

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub Repo stars](https://img.shields.io/github/stars/glima/mare-player)

A COSMIC™ desktop application for the TIDAL music streaming service.
Stream Hi-Res audio, watch music videos, browse your library, and
control playback — with a real-time spectrum visualizer and full
MPRIS integration.

Builds as either a **panel applet** (popup from the system panel) or a
**standalone window** (regular application) — chosen at compile time
via the `panel-applet` feature flag (enabled by default).

<table align="center">
<tr>
<td align="center"><img src="resources/screenshot_applet.png" alt="Panel applet popup" width="320" /></td>
<td align="center"><img src="resources/screenshot_standalone.png" alt="Standalone window" width="600" /></td>
</tr>
<tr>
<td align="center"><sub>Panel Applet mode</sub></td>
<td align="center"><sub>Standalone Window mode</sub></td>
</tr>
</table>

## Features

- **Hi-Res Audio Playback** — Stream FLAC up to 24-bit/192 kHz via
  DASH, decoded with symphonia and output through PulseAudio
  (pipewire-pulse on modern…
