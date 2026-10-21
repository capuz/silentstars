---
repo: "JF9SOM/FBSAT59"
name: "FBSAT59"
description: "Satellite Tracking & Communications — satellite tracking with built-in Hamlib Doppler & Rotator controls, SDR supports, AX.25, APRS, FT4, Q65, Image reception(built-in SatDump), AI CW decoding, telemetry decoding(built-in gr-satellite) and EME."
readmeQualityOk: true
url: "https://github.com/JF9SOM/FBSAT59"
homepage: "https://fbsat59.jf9som.com/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["amateur-radio", "doppler", "fastapi", "gpredict", "ham-radio", "hamlib", "pyside6", "python", "satellite-tracking", "sdr"]
stars: 25
forks: 4
openIssues: 10
closedIssues: 16
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-10T08:51:04Z"
lastCommitAt: "2026-10-21T08:49:19Z"
lastReleaseAt: "2026-06-07T02:47:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 42
maintainers: ["JF9SOM", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/06c7ed4244dd1b4d5c5492831281f38b5ab8430d34fa3647d7500f9c8bf8db5e/JF9SOM/FBSAT59"
discussionCount: 3
---

# FBSAT59

🌐 [日本語](https://github.com/JF9SOM/FBSAT59/blob/HEAD/README.ja.md) | English

**Integrated satellite communications software for radio amateurs**

FBSAT59 is a modern, feature-rich satellite communications application for
amateur radio operators. Alongside satellite tracking and Doppler correction,
it packs in major digital communication modes — FT4, APRS, image reception
(SSTV/SSDV, HRPT/LRPT), and more — all in one application.

> ### 🌍 World's first: ADC — Audio Doppler Correction for FT4
> FBSAT59 is the **world's first** satellite tracking application with **ADC (Audio Doppler Correction)**.
> A CAT-controlled transceiver cannot follow a satellite's Doppler shift closely enough within FT4's
> 7.5-second periods, which makes QSOs around TCA difficult. ADC corrects the remainder in software on the audio itself, quickly and smoothly, so
> FT4 satellite QSOs work with an ordinary rig and a sound card — no SDR required. In an offline replay of a real RS-44 pass, ADC RX decoded
> 71 messages where an uncorrected receiver decoded almost none. See
> [FT4 ADC — status by rig](#ft4-adc-audio-doppler-correction--status-by-rig).

---

| Feature | FBSAT59 |…
