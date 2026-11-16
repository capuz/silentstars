---
repo: "nicolas-riera/Quest1-SteamOS"
name: "Quest1-SteamOS"
description: "Native SteamOS on the Oculus Quest 1"
readmeQualityOk: true
url: "https://github.com/nicolas-riera/Quest1-SteamOS"
language: "C"
languages: ["C"]
languagePcts: [65]
stars: 27
forks: 5
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 4
recentReleases: 10
createdAt: "2026-10-07T08:13:05Z"
lastCommitAt: "2026-11-16T11:47:43Z"
lastReleaseAt: "2026-11-11T00:09:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 49
maintainers: ["nicolas-riera", "alexbixor"]
openGraphImageUrl: "https://opengraph.githubassets.com/25e24a367e0940437013df0c5779ec02d81785f7acfbf3f7e07e82d9b818259e/nicolas-riera/Quest1-SteamOS"
---

# SteamOS on the Oculus Quest

> **Disclaimer: this whole project was entirely vibecoded.** Every line of code, every
> script and this README were written by an AI (Claude), directed and tested on real
> hardware by a human who did not write the code. It works on the headset it was tested on;
> expect rough edges elsewhere, and use it at your own risk.

  
*(Source : [RxVReality](https://www.reddit.com/user/RxVReality/))*

**Native SteamOS on the Oculus Quest 1**, the way the Steam Frame runs it: Valve's SteamOS
(Holo, arm64) boots directly on the headset as the main system, with no Android underneath.
SteamVR runs on the headset itself. Head tracking, the panels, the controllers and the
Wi-Fi are driven natively.

The system starts with `fastboot boot`. The boot image is loaded in RAM, so Meta's system
stays installed and untouched. Rebooting the headset brings it back.

> **Status: experimental, for developers.** There is no way to install it yet. A PC installer
> is being designed ([installer/](https://github.com/nicolas-riera/Quest1-SteamOS/blob/HEAD/installer/)): it downloads SteamOS and Steam from Valve's
> servers and Meta's own Quest 1 update, builds the system image on…
