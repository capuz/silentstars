---
repo: "MattCheramie/GopherTrunk"
name: "GopherTrunk"
description: "Pure-Go, cross-platform RTL-SDR scanner and audio processing toolkit."
readmeQualityOk: true
url: "https://github.com/MattCheramie/GopherTrunk"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["golang", "open-source", "rf", "rtl-sdr", "sdr", "p25", "tetra", "d-star", "dmr", "edacs"]
stars: 134
forks: 16
openIssues: 26
closedIssues: 76
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2026-05-05T01:01:05Z"
lastCommitAt: "2026-09-05T07:49:48Z"
lastReleaseAt: "2026-05-22T06:27:47Z"
status: "thriving"
tags: ["funded"]
healthScore: 95
undervaluedScore: 29
maintainers: ["claude", "MattCheramie", "CamdenBopp"]
openGraphImageUrl: "https://opengraph.githubassets.com/09a7742ff49aeb0de6f1cec6e9878ddc8891a7792ab3b394c3c6e7ab8767267c/MattCheramie/GopherTrunk"
fundingLinks: ["GITHUB:https://github.com/MattCheramie", "KO_FI:https://ko-fi.com/Mrcheramie"]
---

</p>

<h1 align="center">GopherTrunk</h1>

  <strong>Pure-Go digital-trunking radio scanner engine for RTL-SDR · HackRF · Airspy · Airspy HF+.</strong><br>
  P25 · DMR · TETRA · NXDN · Motorola Type II · EDACS · LTR · MPT 1327 · dPMR · D-STAR · YSF.<br>
  Zero CGO, single static binary, headless daemon + Bubbletea TUI cockpit + browser web console.
</p>

</p>

---

## What is this?

GopherTrunk is a software-defined-radio scanner that follows digital
trunked-radio voice calls and decodes them to audio. It runs on a
pool of RTL-SDR (every osmocom tuner), HackRF (One / Jawbreaker /
Rad1o), Airspy R2 / Mini, and Airspy HF+ dongles, has no C
dependencies at build or runtime (no `librtlsdr` / `libhackrf` /
`libairspy` / `libairspyhf` / `libusb` / `libasound2` /
`libmp3lame`), and ships as a single ~10 MB static binary for Linux,
macOS 12 (Monterey) or later, and Windows.

Completed calls stream to Broadcastify Calls, RdioScanner, OpenMHz,
and live Icecast / ShoutCast mountpoints out of the box. Why does
this exist? Read **[The Story of GopherTrunk](https://gophertrunk.org/story.html)**.

> **New to radio or SDR?** Start with the **[Learn RF & SDR…
