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
stars: 164
forks: 21
openIssues: 35
closedIssues: 93
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2026-05-05T01:01:05Z"
lastCommitAt: "2026-11-04T02:57:06Z"
lastReleaseAt: "2026-05-22T06:27:47Z"
status: "thriving"
tags: ["funded"]
healthScore: 94
undervaluedScore: 28
maintainers: ["claude", "MattCheramie", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1d3ac13b013d5052230ac8ae02f7168406c10a405a8daa7096d84ecf0c69d0b/MattCheramie/GopherTrunk"
fundingLinks: ["GITHUB:https://github.com/MattCheramie", "KO_FI:https://ko-fi.com/Mrcheramie"]
---

P25 · DMR · TETRA · NXDN · Motorola Type II · EDACS · LTR · MPT 1327 · dPMR · D-STAR · YSF.<br>
  Zero CGO, single static binary, headless daemon + Bubbletea TUI cockpit + browser web console.

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

> **New to radio or SDR?** Start with the **[Learn RF & SDR path](https://gophertrunk.org/learn/rf-sdr/)** —
> a free, structured course that takes you from "what is a radio wave?" to decoding
> digital trunked systems with GopherTrunk, one short lesson at a time.

##…
