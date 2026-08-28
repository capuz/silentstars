---
repo: "lollonet/snapMULTI"
name: "snapMULTI"
description: "Multi-room Raspberry Pi audio appliance — Spotify, AirPlay, Tidal, MPD via Snapcast. Zero-touch SD card install, optional read-only mode, framebuffer display."
readmeQualityOk: true
url: "https://github.com/lollonet/snapMULTI"
homepage: "https://github.com/lollonet/snapMULTI/releases/latest"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [76, 21]
topics: ["airplay", "docker", "home-audio", "multiroom-audio", "raspberry-pi", "self-hosted", "snapcast", "spotify-connect", "mpd", "raspberry-pi-audio"]
stars: 9
forks: 0
openIssues: 17
closedIssues: 79
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-26T18:37:22Z"
lastCommitAt: "2026-08-28T14:25:51Z"
lastReleaseAt: "2026-04-13T17:00:01Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 56
maintainers: ["lollonet", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/14892687139fb58475861f53ff41895714ee8442f75302fad2e1d2ca45827555/lollonet/snapMULTI"
discussionCount: 2
---

🇬🇧 **English** | 🇮🇹 [Italiano](https://github.com/lollonet/snapMULTI/blob/HEAD/README.it.md)

# snapMULTI — Multi-room audio for Raspberry Pi

snapMULTI is for people who want an **open-source multi-room audio system** without hand-building the Linux audio stack. You still flash Raspberry Pi OS, download the software (a ZIP release, or git if you're comfortable with the command line), and answer a few questions about your setup; snapMULTI automates the hard parts — Snapcast, Docker, audio routing, service discovery (mDNS), read-only boot, and recovery diagnostics. Cast from **Spotify**, **AirPlay**, **Tidal**, or your music library; every speaker plays together with sub-millisecond drift. The streaming services keep their own account requirements.

</p>

> **Sound output.** snapMULTI sends a line-level signal from the Pi — it does not amplify. You need one of:
> - an **active speaker** (built-in amp, e.g. Edifier R1280T, Audioengine A2+),
> - a **validated DAC HAT** (HiFiBerry DAC+ family or InnoMaker PCM5122) into an external amplifier and passive speakers,
> - a **validated digital HAT** (HiFiBerry Digi+ family) feeding an AV receiver over S/PDIF, or
> - a manually…
