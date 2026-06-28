---
repo: "JF9SOM/FBSAT59"
name: "FBSAT59"
description: "Satellite Tracking & Communications — satellite tracking with built-in Hamlib Doppler & Rotator controls, SDR supports, AX.25, APRS, FT4, Q65, Image reception, telemetry decording and EME software."
url: "https://github.com/JF9SOM/FBSAT59"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["amateur-radio", "doppler", "fastapi", "gpredict", "ham-radio", "hamlib", "pyside6", "python", "satellite-tracking", "sdr"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-10T08:51:04Z"
lastCommitAt: "2026-06-28T03:12:16Z"
lastReleaseAt: "2026-06-07T02:47:58Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 57
maintainers: ["JF9SOM"]
openGraphImageUrl: "https://opengraph.githubassets.com/a95b1526bc0d857fbf3742afde405f659461c0b37bc025d49a62ea87d5a99803/JF9SOM/FBSAT59"
discussionCount: 1
---

# FBSAT59

🌐 [日本語](README.ja.md) | English

**Modern successor to GPredict** — Amateur satellite tracking software

FBSAT59 is a ground-up rewrite of
[GPredict](https://github.com/csete/gpredict) — the beloved amateur radio
satellite tracker by Alexandru Csete OZ9AEC — built on a modern Python stack.

---

## What's improved

| Feature | GPredict | FBSAT59 |
|---------|----------|-------------------|
| Platform | Desktop only | Desktop + **browser access from phones/tablets on the same LAN** |
| Radio control | Requires separate rigctld | **Built-in Hamlib** (700+ radios) — select your rig in the GUI |
| SDR support | None | **HackRF / RTL-SDR via SoapySDR** — spectrum, demodulation, IQ recording |
| Doppler correction | Frequency only | **Frequency + mode + CTCSS/DCS tone** set automatically |
| Dual-rig | Supported | **Rig 1 + Rig 2** — SDR dongle can be assigned as a rig |
| Satellite frequency DB | SATNOGS only, text-file editing | SATNOGS auto-sync + **add/edit entries from the GUI** |
| TLE updates | Auto-update supported | **Multi-source auto-update with quality scoring** |
| Pass prediction | List view | **Graphical pass chart + sky radar + footprint on world map** |
|…
