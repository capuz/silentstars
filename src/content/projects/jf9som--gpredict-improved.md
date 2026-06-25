---
repo: "JF9SOM/gpredict-improved"
name: "gpredict-improved"
description: "Improvements to GPredict — satellite tracking with built-in Hamlib Doppler control, SDR support (HackRF/RTL-SDR), and browser access from phones on the same LAN."
url: "https://github.com/JF9SOM/gpredict-improved"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["amateur-radio", "doppler", "fastapi", "gpredict", "ham-radio", "hamlib", "pyside6", "python", "satellite-tracking", "sdr"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-10T08:51:04Z"
lastCommitAt: "2026-06-25T06:42:17Z"
lastReleaseAt: "2026-06-07T02:47:58Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 57
maintainers: ["JF9SOM"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9d6f7215f998ce37146e4388d93b53e8179ed82365359d47f4bf7830d3d5d50/JF9SOM/gpredict-improved"
discussionCount: 1
---

# GPredict-Improved

🌐 [日本語](README.ja.md) | English

**Modern successor to GPredict** — Amateur satellite tracking software

GPredict-Improved is a ground-up rewrite of
[GPredict](https://github.com/csete/gpredict) — the beloved amateur radio
satellite tracker by Alexandru Csete OZ9AEC — built on a modern Python stack.

---

## What's improved

| Feature | GPredict | GPredict-Improved |
|---------|----------|-------------------|
| Platform | Desktop only | Desktop + **browser access from phones/tablets on the same LAN** |
| Radio control | Requires separate rigctld | **Built-in Hamlib** (700+ radios) — select your rig in the GUI |
| SDR support | None | **HackRF / RTL-SDR via SoapySDR** — spectrum, demodulation, IQ recording |
| Doppler correction | Frequency only | **Frequency + mode + CTCSS/DCS tone** set automatically |
| Dual-rig | Supported | **Rig 1 + Rig 2** — SDR dongle can be assigned as a rig |
| Satellite frequency DB | SATNOGS only, text-file editing | SATNOGS auto-sync + **add/edit entries from the GUI** |
| TLE updates | Auto-update supported | **Multi-source auto-update with quality scoring** |
| Pass prediction | List view | **Graphical pass chart + sky radar +…
