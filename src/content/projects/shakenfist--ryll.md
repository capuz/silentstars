---
repo: "shakenfist/ryll"
name: "ryll"
description: "A surprisingly functional SPICE client written in rust."
readmeQualityOk: true
url: "https://github.com/shakenfist/ryll"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 5
forks: 3
openIssues: 35
closedIssues: 14
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-04-02T06:21:33Z"
lastCommitAt: "2026-08-21T04:10:46Z"
lastReleaseAt: "2026-07-24T08:17:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 59
maintainers: ["mikalstill", "shakenfist-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ff27a99b670a91c63c50d2785f2031ff03301f496df9b2950727df2e79f6208/shakenfist/ryll"
---

# Ryll - A Rust SPICE VDI Client

Ryll is a Rust implementation of a SPICE (Simple Protocol for Independent
Computing Environments) client. SPICE is one of the two virtual desktop
(VDI) protocols supported by qemu / KVM on Linux, so a SPICE client will
mostly be of interest to people looking for ways to access Linux virtual
machines running graphical environments. Ryll began life as a test
client for the [Kerbside](https://github.com/shakenfist/kerbside) SPICE
proxy, and it retains deep instrumentation from that heritage, but it is
now a client for everyday use as well.

Ryll is intended to be a **multi-modal SPICE client**: every delivery
mode is a first-class citizen and shares as much functionality as the
mode itself can physically support. The supported modes today are a
**GUI** (egui / eframe desktop window) for interactive day-to-day use, a
**headless** mode for automated testing, CI, and cadence latency
probing, and a **web** mode (browser frontend over WebRTC with native
TLS) that lets any modern browser connect to a SPICE session without
installing software.

## Highlights

- Broad SPICE protocol coverage: display, cursor, inputs, audio
  playback, USB redirection, and…
