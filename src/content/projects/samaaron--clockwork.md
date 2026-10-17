---
repo: "samaaron/clockwork"
name: "clockwork"
description: "Clockwork Infrastructure for hosting DSP engines. Build for Web, Native, VSTs, and embedded. "
readmeQualityOk: true
url: "https://github.com/samaaron/clockwork"
language: "C++"
languages: ["C++"]
languagePcts: [75]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-04T18:10:48Z"
lastCommitAt: "2026-10-17T07:59:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["samaaron"]
openGraphImageUrl: "https://opengraph.githubassets.com/d921423ce2a0f8dce0da7547540549eb27f61017e6412868eb121e27ac993291/samaaron/clockwork"
---

> **Note: Still Alpha Status**: _Clockwork is in active development._ The ABI and memory layout are likely to fluctuate wildy during initial development. _Feedback and ideas are most welcome._

# clockwork
```
  ▄████▄ ██      ▄█████▄  ▄████▄ ██  ▄█▀
 ██   ▀▀ ██      ██   ██ ██   ▀▀ ██▄█▀
 ██      ██      ██   ██ ██      ███▄
 ██   ▄▄ ██      ██   ██ ██   ▄▄ ██ ▀█▄
  ▀████▀ ███████ ▀█████▀  ▀████▀ ██   ██
       ██     ██ ▄█████▄ ██████▄ ██  ▄█▀
       ██     ██ ██   ██ ██   ██ ██▄█▀
       ██ ▄█▄ ██ ██   ██ ██████▀ ███▄
       ███▀ ▀███ ██   ██ ██ ▀█▄  ██ ▀█▄
       ██     ██ ▀█████▀ ██   ██ ██   ██

```
Clockwork-like infrastructure for hosting realtime DSP engines.

Run your own DSP engine in a browser, natively, on embedded hardware, or in the
BEAM as a NIF.

Clockwork powers-up your DSP engine with dynamic audio device handling, a session
clock with support for Ableton Link, an OSC-based API, and four main forms of
low-latency IO lanes connecting your DSP with the outside world:

* Events - MIDI, OSC and gamepad. Play notes from a keyboard, move params from
  a control surface, use a gamepad as an instrument, drive the engine from
  another app over the network. Schedule any…
