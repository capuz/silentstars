---
repo: "wilbowes/EchoMuse"
name: "EchoMuse"
description: "Alexa replacement and controller for Echo Dot 2nd Generation device."
readmeQualityOk: true
url: "https://github.com/wilbowes/EchoMuse"
language: "Python"
languages: ["Python"]
languagePcts: [50]
stars: 287
forks: 28
openIssues: 54
closedIssues: 29
watchers: 1
contributors: 9
recentReleases: 8
createdAt: "2026-05-01T09:49:22Z"
lastCommitAt: "2026-08-20T04:08:28Z"
lastReleaseAt: "2026-06-20T07:07:56Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 86
undervaluedScore: 26
maintainers: ["wilbowes", "dependabot[bot]", "kdkavanagh"]
openGraphImageUrl: "https://opengraph.githubassets.com/c40fdb9de18ec7c2c649769c759017f3cc0ef64508c58b10e288daf47c1248cd/wilbowes/EchoMuse"
---

# EchoMuse

Give your Amazon Echo Dot 2nd Generation a second life as a fully local,
open-source voice assistant and media player for Home Assistant.

EchoMuse replaces the Alexa firmware with a lightweight Go server and pairs
it with a Python controller that presents each Dot to Home Assistant as a
native **ESPHome voice satellite** — no cloud, no custom HA integration to
install. Say your wake word, talk to [Assist](https://www.home-assistant.io/voice_control/),
hear the answer through the Dot's speaker. The hardware you already own
($10 on the second-hand market) does the rest.

## What you get

- **Wake word → Assist → spoken response**, fully local. Wake detection runs
  on the controller (openwakeword), so models, sensitivity, and improvements
  never need a firmware update.
- **Custom wake words** — train your own ("hey biscuit") from synthetic TTS
  speech with the bundled [`oww_forge/`](https://github.com/wilbowes/EchoMuse/blob/HEAD/oww_forge/README.md) trainer, then
  install it from the dashboard in one click.
- **On-device wake word (experimental)** — the Echo can run the wake model
  itself and report what it *would* have detected, without acting on it, so
  the two…
